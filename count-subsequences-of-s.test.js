import test from "node:test";
import assert from "node:assert/strict";
import {
  binarySearchNextIndex,
  countSubsequencesOfS,
  countSubsequencesOfSFast,
} from "./count-subsequences-of-s.ts";

test("binarySearchNextIndex edge cases", () => {
  const list = [0, 2, 4, 6];

  assert.equal(binarySearchNextIndex(list, -1), 0);
  assert.equal(binarySearchNextIndex(list, 0), 1);
  assert.equal(binarySearchNextIndex(list, 3), 2);
  assert.equal(binarySearchNextIndex(list, 6), -1);
});

test("Example 1 from the problem", () => {
  const s = "abcde";
  const words = ["a", "bb", "acd", "ace"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 3);
});

test("Example 2 from the problem", () => {
  const s = "dsahjpjauf";
  const words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 2);
});

test("Empty string s", () => {
  const s = "";
  const words = ["a", "b"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 0);
});

test("Empty words array", () => {
  const s = "abc";

  const result = countSubsequencesOfS(s, []);

  assert.equal(result, 0);
});

test("All words are subsequences", () => {
  const s = "aaaaa";
  const words = ["a", "aa", "aaa", "aaaa"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 4);
});

test("No word is a subsequence", () => {
  const s = "abc";
  const words = ["d", "ee", "ffff"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 0);
});

test("Duplicate words are counted independently", () => {
  const s = "abcde";
  const words = ["ace", "ace", "ace"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 3);
});

test("Subsequence must respect order", () => {
  const s = "abc";
  const words = ["ac", "ca"];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 1);
});

test("Large input sanity check", () => {
  const s = "a".repeat(10_000);
  const words = [
    "a".repeat(1),
    "a".repeat(10),
    "a".repeat(100),
    "a".repeat(10_000),
    "a".repeat(10_001), // too long
  ];

  const result = countSubsequencesOfS(s, words);

  assert.equal(result, 4);
});

test("FAST: Example 1 from the problem", () => {
  const s = "abcde";
  const words = ["a", "bb", "acd", "ace"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 3);
});

test("FAST: Example 2 from the problem", () => {
  const s = "dsahjpjauf";
  const words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 2);
});

test("FAST: Empty string s", () => {
  const s = "";
  const words = ["a", "b"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 0);
});

test("FAST: Empty words array", () => {
  const s = "abc";

  const result = countSubsequencesOfSFast(s, []);

  assert.equal(result, 0);
});

test("FAST: All words are subsequences", () => {
  const s = "aaaaa";
  const words = ["a", "aa", "aaa", "aaaa"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 4);
});

test("FAST: No word is a subsequence", () => {
  const s = "abc";
  const words = ["d", "ee", "ffff"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 0);
});

test("FAST: Duplicate words are counted independently", () => {
  const s = "abcde";
  const words = ["ace", "ace", "ace"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 3);
});

test("FAST: Subsequence must respect order", () => {
  const s = "abc";
  const words = ["ac", "ca"];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 1);
});

test("FAST: Large input sanity check", () => {
  const s = "a".repeat(10_000);
  const words = [
    "a".repeat(1),
    "a".repeat(10),
    "a".repeat(100),
    "a".repeat(10_000),
    "a".repeat(10_001), // too long
  ];

  const result = countSubsequencesOfSFast(s, words);

  assert.equal(result, 4);
});
