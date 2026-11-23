// One-Line Laugh entry (Node 22, standard library only): it writes one fixed
// funny line, a single sentence of at most 200 characters, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 200 characters that is not only white space,
// and the judge reads exactly the bytes written, so write no line end you do not
// mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a meeting that should have been an email, escalated one step
// further, until it becomes a meeting again. Everyday truth (everyone has sat
// in that meeting), surprise at the end, one sentence, nothing to explain.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'The meeting that could have been an email became the email that could have been nothing — and is now another meeting.',
);
