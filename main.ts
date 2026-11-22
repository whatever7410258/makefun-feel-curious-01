// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt: a text written to intrigue
// the AI judge reading it. Deterministic: the same text on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Every spring the gardener plants the same seed and never sees it flower, " +
  "because it only opens at night, once, and by morning it is gone. " +
  "He has told no one — until tonight. " +
  "Will you stay up and see it with him?";

// The gate: entry.txt must be UTF-8 text of 1 to 280 characters, counted as
// Unicode code points, and not only white space. Refuse to write an entry
// that would fail it, so a bad text can never be submitted silently.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
