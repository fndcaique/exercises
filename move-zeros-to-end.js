export function moveZerosToEnd(nums) {
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }

  return left.concat(right);
}
