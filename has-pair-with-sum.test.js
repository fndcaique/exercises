/*
Given a set of numbers, find a pair of numbers that add up to a certain target.
Ex:
numbers: [1, 2, 3, 9], target: 10
the pair is [1, 9]
*/

import test from "node:test";
import assert from "node:assert/strict";
import {
  hasPairWithSumUnsortedNumbers,
  hasPairWithSumSortedNumbers,
} from "./has-pair-with-sum.js";

test("with unsorted numbers [1, 3, 9, 2]", () => {
  const numbers = [1, 3, 9, 2];
  assert.equal(
    hasPairWithSumUnsortedNumbers(numbers, 10),
    true,
    "target 10 shoul return true",
  );
  assert.equal(
    hasPairWithSumUnsortedNumbers(numbers, 8),
    false,
    "target 8 shoul return false",
  );
});

test("with unsorted numbers [1, 10, 2, 6, 5, 40, 9]", () => {
  const numbers = [1, 10, 2, 6, 5, 40, 9];
  assert.equal(
    hasPairWithSumUnsortedNumbers(numbers, 13),
    false,
    "target 13 should return false",
  );
  assert.equal(
    hasPairWithSumUnsortedNumbers(numbers, 14),
    true,
    "target 14 should return true",
  );
  assert.equal(
    hasPairWithSumUnsortedNumbers(numbers, 17),
    false,
    "target 17 should return false",
  );
  assert.equal(
    hasPairWithSumUnsortedNumbers(numbers, 22),
    false,
    "target22 should return false",
  );
});

test("with sorted numbers [1, 2, 3, 9]", () => {
  const numbers = [1, 2, 3, 9];
  assert.equal(
    hasPairWithSumSortedNumbers(numbers, 10),
    true,
    "target 10 shoul return true",
  );
  assert.equal(
    hasPairWithSumSortedNumbers(numbers, 8),
    false,
    "target 8 shoul return false",
  );
});

test("with sorted numbers [1, 2, 5, 6, 9, 10, 40]", () => {
  const numbers = [1, 2, 5, 6, 9, 10, 40];
  assert.equal(
    hasPairWithSumSortedNumbers(numbers, 13),
    false,
    "target 13 should return false",
  );
  assert.equal(
    hasPairWithSumSortedNumbers(numbers, 14),
    true,
    "target 14 should return true",
  );
  assert.equal(
    hasPairWithSumSortedNumbers(numbers, 17),
    false,
    "target 17 should return false",
  );
  assert.equal(
    hasPairWithSumSortedNumbers(numbers, 22),
    false,
    "target22 should return false",
  );
});
