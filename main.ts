// One-word entry for the make.fun bounty
// "One Word, One Username, One Reward" (u-rusdyxbt-one-word-one-username-one-reward-1a191fae).
//
// The program writes exactly one word — our make.fun username — to
// entry.txt inside the output directory, and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry word: our own make.fun username.
const ENTRY_WORD = "veneraxyz";

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to the absolute /output
// directory so the program never depends on the current working directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A single word, at most 30 characters, no whitespace or separators.
// Checked before any file is written, so a bad word can never produce
// a partial or malformed entry.
if (!/^[^\s]{1,30}$/.test(ENTRY_WORD)) {
  throw new Error("entry must be a single word of at most 30 characters");
}

mkdirSync(outputDir, { recursive: true });
// One word plus a trailing newline; the file holds nothing else.
writeFileSync(join(outputDir, "entry.txt"), ENTRY_WORD + "\n", "utf8");
