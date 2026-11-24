// Entry for "Two-Sentence Horror"
// Writes a two-sentence horror story to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I taught my smart speaker to say goodnight in my late wife's voice, and now I fall asleep to it every night. Last night it whispered goodnight before I asked — and it used a nickname only she knew.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
