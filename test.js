import assert from 'node:assert';
import test from 'node:test'
import parseBytes from './index.js';

test('parseBytes', () => {
  assert.strictEqual(parseBytes('0 Bytes'), 0);
  assert.strictEqual(parseBytes('1 Bytes'), 1);
  assert.strictEqual(parseBytes('1 KB'), 1024);
  assert.strictEqual(parseBytes('1 MB'), 1048576);
  assert.strictEqual(parseBytes('1 GB'), 1073741824);
  assert.strictEqual(parseBytes('1 TB'), 1099511627776);
  assert.strictEqual(parseBytes('1 PB'), 1125899906842624);
  assert.strictEqual(parseBytes('1 EB'), 1152921504606846976);
  assert.strictEqual(parseBytes('1 ZB'), 1180591620717411303424);
  assert.strictEqual(parseBytes('1 YB'), 1208925819614629174706176);
  assert.strictEqual(parseBytes('1.5 KB'), 1536);
});
