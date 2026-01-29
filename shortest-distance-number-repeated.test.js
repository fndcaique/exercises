import test from "node:test";
import assert from "node:assert/strict";
import { getShortestDistanceNumberRepeated } from "./shortest-distance-number-repeated.js";

/* for invalid input cases, should return -1
  undefined,
  null,
  [],
  [10]
*/

test("should return -1 for the input undefined", () => {
  assert.equal(getShortestDistanceNumberRepeated(undefined), -1);
});

test("should return -1 for the input null", () => {
  assert.equal(getShortestDistanceNumberRepeated(null), -1);
});

test("should return -1 for the input empty array", () => {
  assert.equal(getShortestDistanceNumberRepeated([]), -1);
});

test("should return -1 for the input array with only one element", () => {
  assert.equal(getShortestDistanceNumberRepeated([10]), -1);
});

/*
  for valid cases, should return the shortest distance between repeated numbers
  { input: [1, 2, 3, 4, 2, 5, 3], output: 3 },
  { input: [7, 8, 9], output: -1 },
  { input: [1, 1, 2, 3], output: 1 },
  { input: [1, 1, 2, 1], output: 1 },
*/

test("should return 3 when the input is [1, 2, 3, 4, 2, 5, 3]", () => {
  assert.equal(getShortestDistanceNumberRepeated([1, 2, 3, 4, 2, 5, 3]), 3);
});

test("should return -1 when the input is [7, 8, 9]", () => {
  assert.equal(getShortestDistanceNumberRepeated([7, 8, 9]), -1);
});

test("should return 1 when the input is [1, 1, 2, 3]", () => {
  assert.equal(getShortestDistanceNumberRepeated([1, 1, 2, 3]), 1);
});

test("should return 1 when the input is [1, 1, 2, 1]", () => {
  assert.equal(getShortestDistanceNumberRepeated([1, 1, 2, 1]), 1);
});
