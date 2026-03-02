function sqrt(n: number) {
  if (n < 0) return null;
  if (n <= 2) return n;
  let start = 2;
  let end = n;
  let middle = Math.floor(end / 2);
  let result = middle * middle;
  while (start < end && result !== n) {
    if (result > n) {
      end = middle;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
    result = middle * middle;
  }
  return result === n ? middle : null;
}
const n = 9_007_199_136_250_225;
// const root = 94_906_265;
console.log(`sqrt(${n}) = ${sqrt(n)}`);
