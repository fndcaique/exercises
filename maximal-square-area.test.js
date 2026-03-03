import test from "node:test";
import assert from "node:assert/strict";
import { getMaximalSquareGoodLandArea } from "./maximal-square-area.js";

test("User provided 6x5 matrix (should find a 3x3 square)", () => {
  const input = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  // The 3x3 square is located from row 2, col 1 to row 4, col 3.
  assert.equal(getMaximalSquareGoodLandArea(input), 9);
});

test("Empty matrix returns 0", () => {
  assert.equal(getMaximalSquareGoodLandArea([]), 0);
});

test("Matrix with only zeros returns 0", () => {
  const input = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  assert.equal(getMaximalSquareGoodLandArea(input), 0);
});

test("Full 4x4 matrix of ones returns 16", () => {
  const input = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  assert.equal(getMaximalSquareGoodLandArea(input), 16);
});

test("Disjoint ones (no squares larger than 1x1)", () => {
  const input = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ];
  assert.equal(getMaximalSquareGoodLandArea(input), 1);
});

test("Single element matrix with 1 returns 1", () => {
  assert.equal(getMaximalSquareGoodLandArea([[1]]), 1);
});
