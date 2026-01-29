import { it } from "node:test";
import assert from "node:assert/strict";
import { getTopologicalOrdering } from "./topological-ordering.js";

function assertValidTopologicalOrder(graph, order) {
  const n = graph.length;

  // Must contain exactly n nodes
  assert.equal(order.length, n, "order must contain all nodes");

  // Must be a permutation of [0..n-1]
  const seen = new Array(n).fill(false);
  for (const node of order) {
    assert.ok(Number.isInteger(node), "order must contain integers");
    assert.ok(node >= 0 && node < n, "node out of range");
    assert.equal(seen[node], false, "duplicate node in order");
    seen[node] = true;
  }

  // Check edge constraints: u must appear before v for every u -> v
  const pos = new Array(n);
  for (let i = 0; i < n; i++) pos[order[i]] = i;

  for (let u = 0; u < n; u++) {
    for (const v of graph[u]) {
      assert.ok(
        pos[u] < pos[v],
        `edge constraint violated: ${u} -> ${v} but ${u} appears after ${v}`,
      );
    }
  }
}

it("should return [] when the graph has a cycle", () => {
  let graph = [[1], [0]]; // 0 <-> 1
  assert.deepStrictEqual(getTopologicalOrdering(graph), []);

  graph = [[2], [0], [1]]; // 0->2->1->0
  assert.deepStrictEqual(getTopologicalOrdering(graph), []);

  graph = [[2], [], [0]]; // 0->2->0
  assert.deepStrictEqual(getTopologicalOrdering(graph), []);

  graph = [[2], [1], []]; // self-loop 1->1
  assert.deepStrictEqual(getTopologicalOrdering(graph), []);
});

it("should return a valid topological ordering for a DAG (example 1)", () => {
  const graph = [[1], [], [1], [4], [1, 2, 5], [2]];
  const order = getTopologicalOrdering(graph);
  assertValidTopologicalOrder(graph, order);
});

it("should handle empty graph", () => {
  const graph = [];
  assert.deepStrictEqual(getTopologicalOrdering(graph), []);
});

it("should handle single node with no edges", () => {
  const graph = [[]];
  assert.deepStrictEqual(getTopologicalOrdering(graph), [0]);
});

it("should handle multiple isolated nodes (no edges)", () => {
  const graph = [[], [], [], []];
  const order = getTopologicalOrdering(graph);
  assertValidTopologicalOrder(graph, order);
});

it("should handle disconnected components", () => {
  // 0->1 and 2->3 are independent
  const graph = [[1], [], [3], []];
  const order = getTopologicalOrdering(graph);
  assertValidTopologicalOrder(graph, order);
});

it("should handle diamond dependencies (multiple valid answers)", () => {
  // 0 -> 1, 0 -> 2, 1 -> 3, 2 -> 3
  const graph = [[1, 2], [3], [3], []];
  const order = getTopologicalOrdering(graph);
  assertValidTopologicalOrder(graph, order);
});

it("should return [] when a cycle exists inside a larger graph", () => {
  // DAG part: 0->1
  // Cycle part: 2->3->4->2
  const graph = [[1], [], [3], [4], [2]];
  assert.deepStrictEqual(getTopologicalOrdering(graph), []);
});

it("should not fail on duplicate edges (still a DAG)", () => {
  const graph = [[1, 1, 1], []];
  const order = getTopologicalOrdering(graph);
  assertValidTopologicalOrder(graph, order);
});
