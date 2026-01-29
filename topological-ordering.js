// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Topological Ordering

// Given the adjacency list of a directed graph, `graph`, return a topological ordering of the nodes. If the graph contains a cycle, return an empty array.

// A topological ordering is an ordering of nodes where for every directed edge `u -> v`, node `u` appears before node `v` in the ordering.

// Example 1:
// graph = [
//   [1],        # Neighbors of node 0
//   [],         # Neighbors of node 1
//   [1],        # Neighbors of node 2
//   [4],        # Neighbors of node 3
//   [1, 2, 5],  # Neighbors of node 4
//   [2]         # Neighbors of node 5
// ]

// Output: [0, 3, 4, 5, 2, 1]
// There can be multiple valid topological orderings.
// [3, 4, 5, 2, 0, 1] is also a valid ordering.

// Example 2:
// graph = [
//   [1],  # Neighbors of node 0
//   [0],  # Neighbors of node 1
// ]

// Output: []
// There is a cycle.

// Here is the graph from Example 1:

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/topological-sort-8.png

// Constraints:

// - The number of nodes is at most `10^5`
// - The number of edges is at most `10^6`
// - Each node is labeled from `0` to `V-1`
//

export function getTopologicalOrdering(graph) {
  const UNVISITED = 0,
    VISITING = 1,
    VISITED = 2;
  const visited = Array.from({ length: graph.length }, () => UNVISITED);

  const stack = [];

  function dfs(node) {
    visited[node] = VISITING;
    for (let neighbor of graph[node]) {
      if (visited[neighbor] === UNVISITED) {
        if (!dfs(neighbor)) return false;
      } else if (visited[neighbor] === VISITING) {
        return false;
      }
    }
    stack.push(node);
    visited[node] = VISITED;
    return true;
  }

  for (let node = 0; node < graph.length; node += 1) {
    if (visited[node] === UNVISITED) {
      if (!dfs(node)) {
        return [];
      }
    }
  }

  return stack.reverse();
}
