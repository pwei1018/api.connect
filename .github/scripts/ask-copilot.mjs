#!/usr/bin/env node
// Q&A Auto-Responder — grounded-answer generator
//
// Replaces the old `copilot -p ... -s --no-ask-user --no-custom-instructions`
// CLI invocation with a direct call to the GitHub Copilot SDK
// (@github/copilot-sdk), which talks to the same Copilot CLI runtime over
// JSON-RPC instead of shelling out to a global npm install.
//
// Behavioral equivalents of the old CLI flags:
//   --no-ask-user + no --allow-tool grants
//     -> onPermissionRequest always rejects, so any tool-use request
//        (shell, file write/read, MCP, etc.) is auto-denied, keeping this a
//        pure text-generation call grounded only in the supplied prompt.
//   --no-custom-instructions
//     -> systemMessage: { mode: "replace", content: <minimal persona> }
//        prevents the SDK from auto-loading this checkout's
//        .github/copilot-instructions.md, which would otherwise
//        duplicate/conflict with the instructions already embedded in the
//        prompt text by build-context.mjs.
//
// Reads the prompt built by build-context.mjs from $RUNNER_TEMP/qa-prompt.txt
// and writes the model's answer to $RUNNER_TEMP/qa-answer.txt, matching the
// file contract the workflow and post-answer.mjs already expect.

import { readFileSync, writeFileSync } from 'node:fs';
import { CopilotClient } from '@github/copilot-sdk';

const {
  GITHUB_TOKEN,
  RUNNER_TEMP = '.',
  COPILOT_MODEL, // optional override; omitted uses the runtime's default model
  COPILOT_TIMEOUT_MS = '120000',
} = process.env;

const PROMPT_FILE = `${RUNNER_TEMP}/qa-prompt.txt`;
const ANSWER_FILE = `${RUNNER_TEMP}/qa-answer.txt`;

if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is required');

async function main() {
  const prompt = readFileSync(PROMPT_FILE, 'utf8');

  const client = new CopilotClient({ gitHubToken: GITHUB_TOKEN });
  await client.start();

  try {
    const session = await client.createSession({
      ...(COPILOT_MODEL ? { model: COPILOT_MODEL } : {}),
      systemMessage: {
        mode: 'replace',
        content: 'You are a text-generation assistant. Follow the instructions in the user message exactly.',
      },
      // No tool use of any kind is permitted for this task: the answer must
      // be grounded only in the context already embedded in the prompt.
      onPermissionRequest: () => ({
        kind: 'reject',
        feedback: 'Tool use is disabled for this task; answer using only the supplied context.',
      }),
    });

    const result = await session.sendAndWait({ prompt }, Number(COPILOT_TIMEOUT_MS));
    const answer = result?.data?.content ?? '';
    writeFileSync(ANSWER_FILE, answer, 'utf8');

    await session.disconnect();
  } finally {
    await client.stop();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
