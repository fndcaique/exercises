/*
A farmer wants to farm their land with the maximum area where good land is present. The 'land' is represented as a matrix with 1s and 0s, where 1s mean good land and 0s mean bad land. The farmer only want to farm in a square of good land with the maximum area. Please help the farmer to find the maximum area of the land they can farm in good land.

Example:

0 1 1 0 1
1 1 0 1 0
0 1 1 1 0
1 1 1 1 0
1 1 1 1 1
0 0 0 0 0

0 1 1 0 1
1 1 0 1 0
0 1 1 1 0
1 1 1 1 0
1 1 1 1 1
0 0 0 0 0

*/

export function getMaximalSquareGoodLandArea(land) {
  if (!land.length || !land[0].length) return 0;
  const rows = land.length;
  const cols = land[0].length;
  let maxSide = 0;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (land[i][j] === 1) {
        if (j === 0 || i === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
        maxSide = Math.max(dp[i][j], maxSide);
      }
    }
  }
  return maxSide * maxSide;
}
