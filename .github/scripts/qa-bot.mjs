#!/usr/bin/env node
// Q&A Auto-Responder
//
// Answers a newly created "Q&A" discussion by retrieving relevant context from:
//   1. previously answered Q&A discussions in this repository
//   2. the markdown knowledge base in bcgov/developer.connect (web/site/content)
// and asking a GitHub Models chat completion to draft a grounded answer.
// If no relevant context is found, it posts a fallback comment tagging maintainers.

const {
  GITHUB_TOKEN,
  REPO,
  DISCUSSION_ID,
  DISCUSSION_TITLE = '',
  DISCUSSION_BODY = '',
  KNOWLEDGE_REPO = 'bcgov/developer.connect',
  KNOWLEDGE_PATH = 'web/site/content',
  MAINTAINERS_TEAM = '@maintainers',
  MODEL = 'openai/gpt-4o-mini',
} = process.env;

const [OWNER, REPO_NAME] = REPO.split('/');
const FALLBACK_PHRASE =
  "I'm sorry, I couldn't find a direct answer within the repository's current codebase or documentation. A maintainer will check in shortly.";
const MIN_CONTEXT_SCORE = 1; // require at least one keyword overlap to attempt an answer
const MAX_CONTEXT_CHARS = 12000;

if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required');
if (!DISCUSSION_ID) throw new Error('DISCUSSION_ID is required');

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

// --- 3. Ask GitHub Models for a grounded answer ---
const SYSTEM_PROMPT = `You are the "Project Documentation Assistant" for the BC Registries API Users Group.

Personality and tone:
- Address users warmly and professionally as the Project Documentation Assistant.
- Keep responses concise, clear, and direct. Avoid long-winded introductions.
- Use an encouraging, collaborative peer-to-peer engineering tone.

Response formatting:
- Break down multi-step instructions using clear, non-nested bullet points.
- Bold primary technical terms, functions, or variable names when first introduced.
- Wrap code, commands, or config snippets in triple-backtick markdown blocks with a language tag.

Accuracy rules:
- Rely strictly on the provided context (previous Q&A answers and the linked documentation excerpts). Do not invent facts.
- If the context does not explicitly answer the question, respond with exactly this sentence and nothing else:
  "${FALLBACK_PHRASE}"`;

async function generateAnswer(question, contextDocs) {
  const contextText = contextDocs
    .map((doc) => `### Source: ${doc.source}\n${doc.text}`)
    .join('\n\n');

  const userPrompt = `Context:\n${contextText}\n\n---\nQuestion:\n${question}`;

  const res = await fetch('https://models.github.ai/inference/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    throw new Error(`Models API error ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  return json.choices?.[0]?.message?.content?.trim() ?? '';
}

// --- 4. Post the reply to the discussion ---
async function postComment(body) {
  const mutation = `
    mutation ($discussionId: ID!, $body: String!) {
      addDiscussionComment(input: { discussionId: $discussionId, body: $body }) {
        comment { url }
      }
    }
  `;
  const data = await githubGraphQL(mutation, { discussionId: DISCUSSION_ID, body });
  console.log(`Posted comment: ${data.addDiscussionComment.comment.url}`);
}

async function main() {
  const question = `${DISCUSSION_TITLE}\n\n${DISCUSSION_BODY}`;

  const [priorAnswers, kbDocs] = await Promise.all([
    fetchAnsweredDiscussions(),
    fetchKnowledgeBaseDocs(),
  ]);
  const allDocs = [...priorAnswers, ...kbDocs];
  const context = selectRelevantContext(question, allDocs);

  console.log(`Collected ${allDocs.length} candidate documents, ${context.length} selected as relevant context.`);

  if (context.length === 0) {
    await postComment(
      `🔔 ${MAINTAINERS_TEAM} I couldn't find any relevant prior Q&A or documentation to answer this automatically. Tagging for manual triage.\n\n---\n*Reply generated automatically by the Q&A Auto-Responder.*`
    );
    return;
  }

  const answer = await generateAnswer(question, context);

  if (!answer || answer.includes(FALLBACK_PHRASE)) {
    await postComment(
      `🔔 ${MAINTAINERS_TEAM} Copilot was unable to locate a verified answer for this query. Tagging for manual triage.\n\n---\n*Reply generated automatically by the Q&A Auto-Responder.*`
    );
    return;
  }

  const sources = context.map((doc) => `- ${doc.source}`).join('\n');
  await postComment(
    `${answer}\n\n<details><summary>Sources</summary>\n\n${sources}\n\n</details>\n\n---\n*Reply generated automatically by the Q&A Auto-Responder. If this doesn't fully answer your question, a maintainer can follow up.*`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
