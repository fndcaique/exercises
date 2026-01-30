// # Tiling Floor

// Given `n > 1`, find the number of different ways to cover a `1xn` floor with `1x1` and `1x2` tiles.

// Example 1: n = 4
// Output: 5

// Example 2: n = 1
// Output: 1

// The following image shows the 5 different ways to cover a `1x4` floor with `1x1` and `1x2` tiles.

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/recursion-fig9.png

// Constraints:

// - `1 ≤ n ≤ 45`
// - Assume that the solution will fit in a signed `64`-bit integer.

/*

// Explanation:
// The problem can be solved using dynamic programming.
// We can define a function `tilingFloor(n)` that returns the number of ways to cover a `1xn` floor with `1x1` and `1x2` tiles.
// The base cases are `tilingFloor(1) = 1` and `tilingFloor(2) = 2`.
// For `n > 2`, we can either place a `1x1` tile at the end or a `1x2` tile at the end.
// If we place a `1x1` tile at the end, the remaining floor is `1xn-1`, and we can cover it in `tilingFloor(n-1)` ways.
// If we place a `1x2` tile at the end, the remaining floor is `1xn-2`, and we can cover it in `tilingFloor(n-2)` ways.
// Therefore, `tilingFloor(n) = tilingFloor(n-1) + tilingFloor(n-2)`.

// Time complexity: O(n)
// Space complexity: O(1)

*/

function tilingFloor(n) {
  if (n <= 2) return n;
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

for (let i = 1; i <= 45; i += 1) console.log(tilingFloor(i));
