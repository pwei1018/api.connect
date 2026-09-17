// Shared secret/PII redaction for the Q&A Auto-Responder.
//
// This is a best-effort safety net, not a guarantee: it scans text for
// common credential/PII shapes and masks them before the text is ever
// included in a Copilot prompt or posted as a discussion comment.

const REDACTION_RULES = [
  // Generic "key: value" secret assignments (API keys, passwords, tokens, etc.)
  {
    name: 'labeled-secret',
    pattern: /((?:api[_-]?key|secret|token|password|passwd|pwd|access[_-]?key|client[_-]?secret|private[_-]?key)\s*[:=]\s*)(['"]?)([^\s'"]{4,})\2/gi,
    replace: (_m, prefix, quote) => `${prefix}${quote}[REDACTED]${quote}`,
  },
  // AWS access key IDs
  { name: 'aws-access-key', pattern: /\bAKIA[0-9A-Z]{16}\b/g, replace: '[REDACTED_AWS_KEY]' },
  // GitHub tokens (classic and fine-grained)
  { name: 'github-token', pattern: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, replace: '[REDACTED_GITHUB_TOKEN]' },
  // Generic bearer tokens / JWTs
  { name: 'bearer-jwt', pattern: /\b(?:Bearer\s+)?eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, replace: '[REDACTED_TOKEN]' },
  // Private key blocks (PEM)
  { name: 'pem-private-key', pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g, replace: '[REDACTED_PRIVATE_KEY]' },
  // Social Insurance / Social Security-style numbers (###-##-#### or ### ### ###)
  { name: 'sin-ssn', pattern: /\b\d{3}[- ]\d{2,3}[- ]\d{3,4}\b/g, replace: '[REDACTED_ID_NUMBER]' },
  // Credit card-like numbers (13-19 digits, optionally grouped)
  { name: 'credit-card', pattern: /\b(?:\d[ -]?){13,19}\b/g, replace: '[REDACTED_CARD_NUMBER]' },
  // Email addresses
  { name: 'email', pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, replace: '[REDACTED_EMAIL]' },
];

/**
 * Redacts likely secrets/credentials/PII from a string.
 * @param {string} text
 * @returns {{ text: string, redactionCount: number }}
 */
export function redactSensitiveData(text) {
  if (!text) return { text: text ?? '', redactionCount: 0 };
  let redactionCount = 0;
  let result = text;
  for (const rule of REDACTION_RULES) {
    result = result.replace(rule.pattern, (...args) => {
      redactionCount += 1;
      return typeof rule.replace === 'function' ? rule.replace(...args) : rule.replace;
    });
  }
  return { text: result, redactionCount };
}
