#!/usr/bin/env node
// One-off/re-runnable importer: converts a Discourse "export posts" TSV
// (Topic ID, Topic Title, Category, Post number, Author, Content, Created
// At, Updated At) into one markdown file per topic under
// .github/knowledge-base/forum/, so the Q&A bot's context builder can use
// real forum Q&A history as part of its knowledge base.
//
// Usage: node convert-discourse-export.mjs <input.tsv> [output-dir]

import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { redactSensitiveData } from './redact.mjs';

const [, , inputPath, outputDirArg] = process.argv;
if (!inputPath) {
  console.error('Usage: node convert-discourse-export.mjs <input.tsv> [output-dir]');
  process.exit(1);
}
const OUTPUT_DIR = outputDirArg || '.github/knowledge-base/forum';

// Categories that are private, meta, or otherwise not useful as public Q&A
// knowledge (staff-only discussions, trust-level-restricted lounge chat,
// and feedback about the forum software itself).
const EXCLUDED_CATEGORIES = new Set(['Staff', 'Lounge', 'Site Feedback']);

// Parse RFC4180-style tab-delimited text (quoted fields may contain tabs,
// newlines, and doubled `""` as an escaped quote).
function parseTSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === '\t') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (c === '\r') {
      // skip, handled by following \n
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'topic';
}

function main() {
  const raw = readFileSync(inputPath, 'utf8');
  const rows = parseTSV(raw);
  const [header, ...dataRows] = rows;
  const col = Object.fromEntries(header.map((name, idx) => [name.trim(), idx]));

  const topics = new Map();
  for (const r of dataRows) {
    if (r.length < header.length) continue;
    const topicId = r[col['Topic ID']];
    const title = r[col['Topic Title']];
    const category = r[col['Category']];
    const author = r[col['Author']];
    const content = r[col['Content']];
    const createdAt = r[col['Created At']];
    if (!topicId || !title) continue;
    if (EXCLUDED_CATEGORIES.has(category)) continue;
    // Skip auto-generated "About the X category" descriptions — not Q&A content.
    if (author === 'system' && /^About the .* category$/i.test(title)) continue;

    if (!topics.has(topicId)) {
      topics.set(topicId, { title, category, posts: [] });
    }
    topics.get(topicId).posts.push({ author, content, createdAt });
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  // Clear previously generated files so removed/renamed topics don't linger.
  for (const existing of readdirSync(OUTPUT_DIR)) {
    if (existing.endsWith('.md')) unlinkSync(join(OUTPUT_DIR, existing));
  }

  let written = 0;
  let redactedTopics = 0;
  for (const [topicId, topic] of topics) {
    const fileName = `${topicId}-${slugify(topic.title)}.md`;
    let redactionCount = 0;
    const body = topic.posts
      .map((p) => {
        const { text, redactionCount: n } = redactSensitiveData(p.content ?? '');
        redactionCount += n;
        return `**${p.author}** (${p.createdAt}):\n\n${text.trim()}`;
      })
      .join('\n\n---\n\n');
    if (redactionCount > 0) redactedTopics++;

    const md = `# ${topic.title}\n\n_Category: ${topic.category} · Source: BC Registries API community forum_\n\n${body}\n`;
    writeFileSync(join(OUTPUT_DIR, fileName), md, 'utf8');
    written++;
  }

  console.log(`Wrote ${written} forum topic file(s) to ${OUTPUT_DIR} (${redactedTopics} had redactions).`);
}

main();
