// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Edge List Conversion

// Given an edge list, `edges`, representing an undirected graph, and `V`, the number of nodes, implement two functions:

// 1. `edge_list_to_adjacency_list(edges, V)`: Convert the edge list to an adjacency list representation.
// 2. `edge_list_to_adjacency_matrix(edges, V)`: Convert the edge list to an adjacency matrix representation.

// All nodes are integers between `0` and `V-1`.

// An edge list is a list of pairs, `(u, v)`, representing an edge between nodes `u` and `v`. For an undirected graph, each edge appears once in the list.

// An adjacency list is a list of `V` lists, where `adj_list[u]` contains all neighbors of node `u`.

// An adjacency matrix is a 2D grid of size `V x V` where `matrix[u][v] = 1` if there is an edge between `u` and `v`, and `0` otherwise.

// Example 1:
// edges = [(0, 1), (1, 2), (2, 0)]
// V = 3

// Adjacency list:
// [
//   [1, 2],
//   [0, 2],
//   [0, 1]
// ]

// Adjacency matrix:
// [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// Example 2:
// edges = [(0, 1), (2, 3)]
// V = 4

// Adjacency list:
// [
//   [1],
//   [0],
//   [3],
//   [2]
// ]

// Adjacency matrix:
// [
//   [0, 1, 0, 0],
//   [1, 0, 0, 0],
//   [0, 0, 0, 1],
//   [0, 0, 1, 0]
// ]

// Example 3:
// edges = []
// V = 3

// Adjacency list:
// [
//   [],
//   [],
//   []
// ]

// Adjacency matrix:
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]

// - Follow-up 1: What if the edges also have weights?

// If edges have weights, the edge list becomes a list of tuples `(u, v, w)` where `w` is the weight. In the adjacency list, we store pairs `(neighbor, weight)` instead of just the neighbor. In the adjacency matrix, we store the weight value in the matrix instead of `1`.

// - Follow-up 2: What if the graph is also directed in addition to weighted?

// For a directed graph, each edge `(u, v, w)` only adds `v` to the adjacency list of `u`, not the reverse.

// - Follow-up 3: How would you choose between adjacency list and adjacency matrix?

// Constraints:

// - The number of nodes `V` is at most `10^3`
// - The number of edges is at most `10^5`
// - All nodes are integers between `0` and `V-1` (inclusive)
// - There are no self-loops or parallel edges

const V = 3;
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];

/**
 * Converts an edge list into an adjacency list for an undirected graph.
 *
 * @param {number[][]} edges - Each edge is [u, v].
 * @param {number} V - Number of vertices labeled 0..V-1.
 *
 * @example
 * edges = [[0, 1], [1, 2], [2, 0]]
 * V = 3
 */
function edgeListToAdjacencyList(edges, V) {
  const graph = new Array(V).fill().map(() => new Array(0));
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

console.log("\n\nedgeListToAdjacencyList:\n\n");
console.log("edges:", edges, "\n\n");
console.table(edgeListToAdjacencyList(edges, V));

/**
 * Converts an edge list into an adjacency matrix for an undirected graph.
 *
 * @param {number[][]} edges - Each edge is [u, v].
 * @param {number} V - Number of vertices labeled 0..V-1.
 *
 * @example
 * edges = [[0, 1], [1, 2], [2, 0]]
 * V = 3
 */
function edgeListToAdjacencyMatrix(edges, V) {
  const graph = new Array(V).fill().map(() => new Array(V).fill(0));
  for (const [u, v] of edges) {
    graph[u][v] = 1;
    graph[v][u] = 1;
  }
  return graph;
}

console.log("\n\nedgeListToAdjacencyMatrix:\n\n");
console.log("edges:", edges, "\n\n");
console.table(edgeListToAdjacencyMatrix(edges, V));
