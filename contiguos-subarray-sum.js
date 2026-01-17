/*
a % k === b % k -> (a - b) % k === 0
*/

export function hasGoodSubarray(nums, k) {
  const minSubArraySize = 2;
  // your code goes here
  if (!nums || nums.length < minSubArraySize) return false;
  const mapRestIndex = new Map([[0, -1]]);
  let sum = 0;
  let rest = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    rest = Math.abs(sum % k);
    if (mapRestIndex.has(rest)) {
      j = mapRestIndex.get(rest);
      if (i - j >= minSubArraySize) {
        console.log(
          `Found a good subarray(${j + 1}, ${i + 1}): ${nums.slice(j + 1, i + 1)}`,
        );
        return true;
      }
    } else {
      mapRestIndex.set(rest, i);
    }
  }

  return false;
}

console.log(hasGoodSubarray([2, 3, 1], 5));
