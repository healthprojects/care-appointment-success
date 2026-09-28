// Check that every locale's messages.json has exactly the same keys, and the
// same array lengths, as the English reference catalogue. Exits non-zero on
// any mismatch so it can run in CI.
import { readdirSync, readFileSync } from 'node:fs';

const REFERENCE = 'en-001';
const dir = new URL('../locales/', import.meta.url);
const load = (code) => JSON.parse(readFileSync(new URL(`${code}/messages.json`, dir), 'utf8'));

function shape(value, path = '', out = new Map()) {
  if (Array.isArray(value)) out.set(path, `array(${value.length})`);
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) shape(v, path ? `${path}.${k}` : k, out);
  } else out.set(path, typeof value);
  return out;
}

const reference = shape(load(REFERENCE));
let problems = 0;
for (const code of readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
  if (code === REFERENCE) continue;
  const other = shape(load(code));
  for (const [key, kind] of reference) {
    if (!other.has(key)) { console.error(`${code}: missing ${key}`); problems++; }
    else if (other.get(key) !== kind) { console.error(`${code}: ${key} is ${other.get(key)}, expected ${kind}`); problems++; }
  }
  for (const key of other.keys()) {
    if (!reference.has(key)) { console.error(`${code}: extra ${key}`); problems++; }
  }
}
if (problems) process.exit(1);
console.log(`All locales match ${REFERENCE} (${reference.size} keys).`);
