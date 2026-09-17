#!/usr/bin/env node
// Q&A Auto-Responder — context builder
//
// Retrieves candidate context for a newly created "Q&A" discussion from:
//   1. previously answered Q&A discussions in this repository
//   2. the markdown knowledge base in bcgov/developer.connect (web/site/content)
// and writes a ready-to-use prompt for GitHub Copilot CLI, plus the list of
// sources used, to files under $RUNNER_TEMP. Sets the `has_context` step
// output so the workflow can skip the CLI call and escalate directly when
// nothing relevant was found.

import { writeFileSync, appendFileSync, readFileSync } from 'node:fs';

const {
  GITHUB_TOKEN,
  REPO,
  DISCUSSION_TITLE = '',
  DISCUSSION_BODY = '',
  KNOWLEDGE_REPO = 'bcgov/developer.connect',
  KNOWLEDGE_PATH = 'web/site/content',
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
  const mdPaths = (tree.tree ?? [])
    .filter((entry) => entry.type === 'blob' && entry.path.startsWith(`${KNOWLEDGE_PATH}/`) && entry.path.endsWith('.md'))
    .map((entry) => entry.path);

  const docs = await Promise.all(
    mdPaths.map(async (path) => {
      const rawRes = await fetch(`https://raw.githubusercontent.com/${kbOwner}/${kbRepo}/main/${path}`);
      if (!rawRes.ok) return null;
      const text = await rawRes.text();
      return { source: `${KNOWLEDGE_REPO}/${path}`, text };
    })
  );
  return docs.filter(Boolean);
}

// --- Simple keyword-overlap retrieval (no external vector DB needed) ---
function tokenize(str) {
  return (str.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []);
}

const STOPWORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'has', 'are',
  'was', 'were', 'what', 'when', 'how', 'why', 'does', 'can', 'you', 'your',
]);

function scoreDoc(queryTokens, doc) {
  const docTokens = new Set(tokenize(doc.text));
  let score = 0;
  for (const token of queryTokens) {
    if (!STOPWORDS.has(token) && docTokens.has(token)) score += 1;
  }
  return score;
}

function selectRelevantContext(question, docs) {
  const queryTokens = tokenize(question);
  const scored = docs
    .map((doc) => ({ ...doc, score: scoreDoc(queryTokens, doc) }))
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

// Reuse the repo-wide Copilot instructions (tone, formatting, accuracy
// rules) as the single source of truth instead of duplicating them here.
function loadRepoInstructions() {
  try {
    return readFileSync(COPILOT_INSTRUCTIONS_PATH, 'utf8').trim();
  } catch (err) {
    console.warn(`Could not read ${COPILOT_INSTRUCTIONS_PATH}: ${err.message}`);
    return '';
  }
}

const SYSTEM_PROMPT = `${loadRepoInstructions()}

You are answering as the "Project Documentation Assistant" for the BC Registries API Users Group.

Bot-specific rules:
- Rely strictly on the provided context below (previous Q&A answers and the linked documentation excerpts). Do not invent facts.
- Do not run any shell commands, read other files, or use tools; answer using only the context given below.
- If the context does not explicitly answer the question, respond with exactly this sentence and nothing else:
  "${FALLBACK_PHRASE}"`;

function setOutput(name, value) {
  if (GITHUB_OUTPUT) appendFileSync(GITHUB_OUTPUT, `${name}=${value}\n`);
}

async function main() {
  const question = `${DISCUSSION_TITLE}\n\n${DISCUSSION_BODY}`.slice(0, MAX_QUESTION_CHARS);

  const [priorAnswers, kbDocs] = await Promise.all([
    fetchAnsweredDiscussions(),
    fetchKnowledgeBaseDocs(),
  ]);
  const allDocs = [...priorAnswers, ...kbDocs];
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
