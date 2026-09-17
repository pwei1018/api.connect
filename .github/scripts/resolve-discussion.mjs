#!/usr/bin/env node
// Q&A Auto-Responder — manual re-run discussion resolver
//
// When the workflow is triggered via `workflow_dispatch` (a maintainer
// manually re-running the bot for an existing discussion, e.g. to retry
// after a knowledge-base update), there is no `github.event.discussion`
// context to read from. This script looks up the discussion by number via
// GraphQL and exposes the same fields as step outputs so the rest of the
// workflow can treat both trigger paths identically.

import { appendFileSync } from 'node:fs';

const { GITHUB_TOKEN, REPO, DISCUSSION_NUMBER, GITHUB_OUTPUT } = process.env;

if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required');
if (!REPO) throw new Error('REPO is required');
if (!DISCUSSION_NUMBER) throw new Error('DISCUSSION_NUMBER is required');

const [owner, repo] = REPO.split('/');

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

// Set a (possibly multi-line) output safely using the heredoc-style
// delimiter syntax GitHub Actions supports for GITHUB_OUTPUT.
function setOutput(name, value) {
  if (!GITHUB_OUTPUT) return;
  const delimiter = `ghadelimiter_${Math.random().toString(36).slice(2)}`;
  appendFileSync(GITHUB_OUTPUT, `${name}<<${delimiter}\n${value}\n${delimiter}\n`);
}

async function main() {
  const query = `
    query ($owner: String!, $repo: String!, $number: Int!) {
      repository(owner: $owner, name: $repo) {
        discussion(number: $number) {
          id
          title
          bodyText
          category { name slug }
        }
      }
    }
  `;
  const data = await githubGraphQL(query, {
    owner,
    repo,
    number: Number(DISCUSSION_NUMBER),
  });
  const discussion = data.repository?.discussion;
  if (!discussion) {
    throw new Error(`Discussion #${DISCUSSION_NUMBER} not found in ${REPO}`);
  }

  setOutput('node_id', discussion.id);
  setOutput('title', discussion.title ?? '');
  setOutput('body', discussion.bodyText ?? '');
  setOutput('category_slug', discussion.category?.slug ?? '');
  setOutput('category_name', discussion.category?.name ?? '');
  console.log(
    `Resolved discussion #${DISCUSSION_NUMBER}: "${discussion.title}" (category: ${discussion.category?.name})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
