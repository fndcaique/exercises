/*
Tests

s = 'abcd'
k = 2
output: 'abcd'

s = 'deeedbbcccbdaa'
k = 3
output: 'aa'

s = 'pbbcggttciiippooaais'
k = 2
output: 'ps'

s = 'aaabbbacd'
k = 3
output: 'acd'


s = 'aaabbbacaaaad'
k = 3
output: 'acaaaad'

*/

import test from "node:test";
import assert from "node:assert/strict";
import { identifyAdjacent } from "./remove-duplicated-in-string.js";

test("does not remove anything when no k repeats exist", () => {
  const s = "abcd";
  const k = 2;
  const output = "abcd";

  assert.equal(identifyAdjacent(s, k), output);
});

test("removes length 3 runs with chain reactions", () => {
  const s = "deeedbbcccbdaa";
  const k = 3;
  const output = "aa";

  assert.equal(identifyAdjacent(s, k), output);
});

test("removes length 2 runs with cascading effect", () => {
  const s = "pbbcggttciiippooaais";
  const k = 2;
  const output = "ps";

  assert.equal(identifyAdjacent(s, k), output);
});

test("removes only length 3 runs, keeps others", () => {
  const s = "aaabbbacd";
  const k = 3;
  const output = "acd";

  assert.equal(identifyAdjacent(s, k), output);
});
