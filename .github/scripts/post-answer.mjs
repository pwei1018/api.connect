#!/usr/bin/env node
// Q&A Auto-Responder — comment poster
//
// Reads the Copilot CLI's answer (or an escalation reason) and posts a
// single reply to the triggering discussion via the GraphQL API.

import { readFileSync, existsSync } from 'node:fs';
import { redactSensitiveData } from './redact.mjs';

const {
  GITHUB_TOKEN,
  DISCUSSION_ID,
  MAINTAINERS_TEAM = '@maintainers',
  MODE, // 'no-context' | 'answered'
  RUNNER_TEMP = '.',
} = process.env;

const FALLBACK_PHRASE =
  "I'm sorry, I couldn't find a direct answer within the repository's current codebase or documentation. A maintainer will check in shortly.";

const ANSWER_FILE = `${RUNNER_TEMP}/qa-answer.txt`;
const SOURCES_FILE = `${RUNNER_TEMP}/qa-sources.txt`;

if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required');
if (!DISCUSSION_ID) throw new Error('DISCUSSION_ID is required');

async function postComment(body) {
  const mutation = `
    mutation ($discussionId: ID!, $body: String!) {
      addDiscussionComment(input: { discussionId: $discussionId, body: $body }) {
        comment { url }
      }
    }
  `;
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: mutation, variables: { discussionId: DISCUSSION_ID, body } }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
  console.log(`Posted comment: ${json.data.addDiscussionComment.comment.url}`);
}

const ESCALATION_FOOTER = `\n\n---\n*Reply generated automatically by the Q&A Auto-Responder.*`;

async function main() {
  if (MODE === 'no-context') {
    await postComment(
      `🔔 ${MAINTAINERS_TEAM} I couldn't find any relevant prior Q&A or documentation to answer this automatically. Tagging for manual triage.${ESCALATION_FOOTER}`
    );
    return;
  }

  const answer = existsSync(ANSWER_FILE) ? readFileSync(ANSWER_FILE, 'utf8').trim() : '';

  // Only treat this as a full escalation when the *entire* answer is the
  // fallback phrase (nothing else was said). A longer answer that merely
  // mentions or echoes the fallback phrase while covering other parts of
  // a multi-part question is a partial answer, not a total miss, and
  // should still be posted — otherwise a real, useful partial answer gets
  // thrown away just because one sub-question couldn't be answered.
  const normalizedAnswer = answer.replace(/^["']|["']$/g, '').trim();
  const isFullEscalation = !answer || normalizedAnswer === FALLBACK_PHRASE;

  if (isFullEscalation) {
    await postComment(
      `🔔 ${MAINTAINERS_TEAM} I was unable to locate a verified answer for this query. Tagging for manual triage.${ESCALATION_FOOTER}`
    );
    return;
  }

  // Final safety net: strip any secrets/PII the model may have echoed back
  // from the context or the question, even though the prompt instructs it
  // not to.
  const { text: safeAnswer, redactionCount } = redactSensitiveData(answer);
  if (redactionCount > 0) {
    console.log(`Redacted ${redactionCount} sensitive value(s) from the answer before posting.`);
  }

  const sources = existsSync(SOURCES_FILE) ? readFileSync(SOURCES_FILE, 'utf8').trim() : '';
  const sourcesBlock = sources ? `\n\n<details><summary>Sources</summary>\n\n${sources}\n\n</details>` : '';

  await postComment(
    `${safeAnswer}${sourcesBlock}\n\n---\n*Reply generated automatically by the Q&A Auto-Responder. If this doesn't fully answer your question, a maintainer can follow up.*`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
