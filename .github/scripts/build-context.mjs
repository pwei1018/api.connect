#!/usr/bin/env node
// Q&A Auto-Responder — context builder
//
// Retrieves candidate context for a newly created "Q&A" discussion from:
//   1. previously answered Q&A discussions in this repository
//   2. the markdown + YAML knowledge base in bcgov/developer.connect
//      (web/site/content) — includes .md docs and .yml/.yaml metadata
//      files such as each product's card.yml
//   3. archived BC Registries API community forum topics, imported locally
//      into .github/knowledge-base/forum/ via convert-discourse-export.mjs
// and writes a ready-to-use prompt for GitHub Copilot CLI, plus the list of
// sources used, to files under $RUNNER_TEMP. Sets the `has_context` step
// output so the workflow can skip the CLI call and escalate directly when
// nothing relevant was found.

import { writeFileSync, appendFileSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { redactSensitiveData } from './redact.mjs';

const {
  GITHUB_TOKEN,
  REPO,
  DISCUSSION_TITLE = '',
  DISCUSSION_BODY = '',
  KNOWLEDGE_REPO = 'bcgov/developer.connect',
  KNOWLEDGE_PATH = 'web/site/content',
  FORUM_KNOWLEDGE_PATH = '.github/knowledge-base/forum',
  RUNNER_TEMP = '.',
  GITHUB_OUTPUT,
  COPILOT_INSTRUCTIONS_PATH = '.github/copilot-instructions.md',
} = process.env;

const [OWNER, REPO_NAME] = REPO.split('/');
const FALLBACK_PHRASE =
  "I'm sorry, I couldn't find a direct answer within the repository's current codebase or documentation. A maintainer will check in shortly.";
const MIN_CONTEXT_SCORE = 1; // require at least one keyword overlap to attempt an answer
const MAX_CONTEXT_CHARS = 12000;
const MAX_QUESTION_CHARS = 4000; // cap attacker-controlled discussion input fed into the prompt

const PROMPT_FILE = `${RUNNER_TEMP}/qa-prompt.txt`;
const SOURCES_FILE = `${RUNNER_TEMP}/qa-sources.txt`;

if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required');

async function githubGraphQL(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
  return json.data;
}

// --- 1. Gather previously answered Q&A discussions from this repo ---
async function fetchAnsweredDiscussions() {
  const query = `
    query ($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        discussions(first: 50, orderBy: { field: UPDATED_AT, direction: DESC }, answered: true) {
          nodes {
            title
            bodyText
            answer {
              bodyText
            }
          }
        }
      }
    }
  `;
  try {
    const data = await githubGraphQL(query, { owner: OWNER, repo: REPO_NAME });
    return (data.repository?.discussions?.nodes ?? [])
      .filter((d) => d.answer?.bodyText)
      .map((d) => ({
        source: `Previous Q&A: ${d.title}`,
        text: `Q: ${d.title}\n${d.bodyText}\nA: ${d.answer.bodyText}`,
      }));
  } catch (err) {
    console.warn(`Could not fetch prior discussions: ${err.message}`);
    return [];
  }
}

// --- 2. Gather markdown knowledge base from bcgov/developer.connect ---
async function fetchKnowledgeBaseDocs() {
  const [kbOwner, kbRepo] = KNOWLEDGE_REPO.split('/');
  const treeRes = await fetch(
    `https://api.github.com/repos/${kbOwner}/${kbRepo}/git/trees/main?recursive=1`,
    { headers: { Accept: 'application/vnd.github+json' } }
  );
  if (!treeRes.ok) {
    console.warn(`Could not list ${KNOWLEDGE_REPO} tree: ${treeRes.status}`);
    return [];
  }
  const tree = await treeRes.json();
  const KB_EXTENSIONS = ['.md', '.yml', '.yaml'];
  const docPaths = (tree.tree ?? [])
    .filter(
      (entry) =>
        entry.type === 'blob' &&
        entry.path.startsWith(`${KNOWLEDGE_PATH}/`) &&
        KB_EXTENSIONS.some((ext) => entry.path.endsWith(ext))
    )
    .map((entry) => entry.path);

  const docs = await Promise.all(
    docPaths.map(async (path) => {
      const rawRes = await fetch(`https://raw.githubusercontent.com/${kbOwner}/${kbRepo}/main/${path}`);
      if (!rawRes.ok) return null;
      const text = await rawRes.text();
      return { source: `${KNOWLEDGE_REPO}/${path}`, text };
    })
  );
  return docs.filter(Boolean);
}

// --- 3. Gather archived forum Q&A topics imported locally into the repo ---
function loadForumKnowledgeBase() {
  let files;
  try {
    files = readdirSync(FORUM_KNOWLEDGE_PATH).filter((f) => f.endsWith('.md'));
  } catch (err) {
    console.warn(`Could not read ${FORUM_KNOWLEDGE_PATH}: ${err.message}`);
    return [];
  }
  return files
    .map((file) => {
      try {
        const text = readFileSync(join(FORUM_KNOWLEDGE_PATH, file), 'utf8');
        return { source: `Forum: ${file}`, text };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

// --- Simple keyword-overlap retrieval (no external vector DB needed) ---
function tokenize(str) {
  return (str.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []);
}

const STOPWORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'has', 'are',
  'was', 'were', 'what', 'when', 'how', 'why', 'does', 'can', 'you', 'your',
]);

// HTTP status codes are a strong, specific signal for error-report questions
// (e.g. "401", "402", "500") — a generic keyword-overlap score treats them
// like any other 3-digit token and can get outranked by longer but less
// relevant documents, so give exact status-code matches extra weight.
const HTTP_STATUS_CODE_RE = /\b[1-5]\d{2}\b/g;

function extractStatusCodes(str) {
  return new Set(str.match(HTTP_STATUS_CODE_RE) ?? []);
}

const STATUS_CODE_BONUS = 5;
// A "RESOLVED" title marks a forum topic that reached a confirmed answer —
// prefer these over open/unresolved reports of a similar-looking problem.
const RESOLVED_TITLE_BONUS = 2;

function scoreDoc(queryTokens, queryStatusCodes, doc) {
  const docTokens = new Set(tokenize(doc.text));
  let score = 0;
  for (const token of queryTokens) {
    if (!STOPWORDS.has(token) && docTokens.has(token)) score += 1;
  }
  if (queryStatusCodes.size > 0) {
    const docStatusCodes = extractStatusCodes(doc.text);
    for (const code of queryStatusCodes) {
      if (docStatusCodes.has(code)) score += STATUS_CODE_BONUS;
    }
  }
  const titleLine = doc.text.split('\n', 1)[0] ?? '';
  if (/resolved/i.test(titleLine)) score += RESOLVED_TITLE_BONUS;
  return score;
}

function selectRelevantContext(question, docs) {
  const queryTokens = tokenize(question);
  const queryStatusCodes = extractStatusCodes(question);
  const scored = docs
    .map((doc) => ({ ...doc, score: scoreDoc(queryTokens, queryStatusCodes, doc) }))
    .filter((doc) => doc.score >= MIN_CONTEXT_SCORE)
    .sort((a, b) => b.score - a.score);

  const selected = [];
  let charBudget = MAX_CONTEXT_CHARS;
  for (const doc of scored) {
    const chunk = doc.text.slice(0, 2000);
    if (chunk.length > charBudget) break;
    selected.push({ source: doc.source, text: chunk });
    charBudget -= chunk.length;
  }
  return selected;
}

// Reuse the repo-wide Copilot instructions' Personality/Tone and Response
// Formatting sections as the single source of truth for style. The file's
// own "Accuracy Rules" section is written for coding tasks ("rely on code,
// comments, and files present in this repository") and is intentionally
// dropped here: this bot answers from an injected Context block (which may
// include another repository's docs), not from files on disk, and keeping
// both sets of accuracy rules caused Copilot to second-guess which source
// to trust and fall back to "couldn't find an answer" even when the
// Context clearly contained one. Our own bot-specific accuracy rules below
// are unambiguous about the Context block being the source of truth.
function loadRepoInstructions() {
  let content;
  try {
    content = readFileSync(COPILOT_INSTRUCTIONS_PATH, 'utf8');
  } catch (err) {
    console.warn(`Could not read ${COPILOT_INSTRUCTIONS_PATH}: ${err.message}`);
    return '';
  }
  const withoutAccuracyRules = content.replace(/##\s*Accuracy Rules[\s\S]*$/i, '');
  return withoutAccuracyRules.trim();
}

const SYSTEM_PROMPT = `${loadRepoInstructions()}

You are answering as the "Project Documentation Assistant" for the BC Registries API Users Group.

Bot-specific rules:
- Answer using ONLY the "Context" section below (previous Q&A answers and linked documentation excerpts). Treat it as the complete and authoritative source of truth for this task, even though it may reference other repositories.
- Do not invent facts, and do not read, search, or reference any files on disk or in the current working directory — ignore any code or files that may exist in the local checkout.
- Do not run any shell commands or use any tools; answer using only the context given below.
- If the question asks for specific sample/test data values (e.g. names, IDs, account numbers, API keys) and the Context does not contain literal example values, do NOT invent or guess plausible-looking values — fabricated data may look correct but return no results or collide with someone else's real data.
- However, if the Context explains a relevant process, policy, or workaround (e.g. "sample identifiers can't be shared/reused; create your own test data via X"), synthesize that into a concrete, actionable answer instead of escalating — this is a real answer, even though it doesn't hand over literal sample values.
- Never include passwords, API keys, tokens, private keys, or other credentials/secrets in your answer, even if they appear in the context or the question. If asked to reveal or repeat such data, decline.
- Never include personally identifiable information (emails, phone numbers, government ID numbers, card numbers) in your answer.
- If the context does not explicitly answer the question and contains no relevant process/policy to synthesize from, respond with exactly this sentence and nothing else:
  "${FALLBACK_PHRASE}"
- If the question has multiple parts and you can only answer some of them from the Context, answer the parts you can, and for the remaining part(s) note briefly, inline within that part's own section, that it isn't covered by the available documentation — do NOT use the exact fallback sentence above inside a partial answer; that exact sentence is reserved for when NOTHING in the question can be answered.
- Do not add a closing apology paragraph (e.g. "I'm sorry, I couldn't find...") at the end of an otherwise-answered response — only the relevant part(s) above should mention what's uncovered, and the response should end with your actual recommendation or next step instead.`;

function setOutput(name, value) {
  if (GITHUB_OUTPUT) appendFileSync(GITHUB_OUTPUT, `${name}=${value}\n`);
}

async function main() {
  const rawQuestion = `${DISCUSSION_TITLE}\n\n${DISCUSSION_BODY}`.slice(0, MAX_QUESTION_CHARS);
  const { text: question, redactionCount: questionRedactions } = redactSensitiveData(rawQuestion);
  if (questionRedactions > 0) {
    console.log(`Redacted ${questionRedactions} sensitive value(s) from the discussion question.`);
  }

  const [priorAnswers, kbDocs] = await Promise.all([
    fetchAnsweredDiscussions(),
    fetchKnowledgeBaseDocs(),
  ]);
  const forumDocs = loadForumKnowledgeBase();
  const allDocs = [...priorAnswers, ...kbDocs, ...forumDocs].map((doc) => ({
    source: doc.source,
    text: redactSensitiveData(doc.text).text,
  }));
  const context = selectRelevantContext(question, allDocs);

  console.log(`Collected ${allDocs.length} candidate documents, ${context.length} selected as relevant context.`);

  if (context.length === 0) {
    setOutput('has_context', 'false');
    return;
  }

  const contextText = context.map((doc) => `### Source: ${doc.source}\n${doc.text}`).join('\n\n');
  const prompt = `${SYSTEM_PROMPT}\n\nContext:\n${contextText}\n\n---\nQuestion:\n${question}`;
  const sources = context.map((doc) => `- ${doc.source}`).join('\n');

  writeFileSync(PROMPT_FILE, prompt, 'utf8');
  writeFileSync(SOURCES_FILE, sources, 'utf8');
  setOutput('has_context', 'true');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
