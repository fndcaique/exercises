/*
Given a set of numbers, find a pair of numbers that add up to a certain target.
Ex:
numbers: [1, 2, 3, 9], target: 10
the pair is [1, 9]
*/

/*
Solution:
If the numbers array is sorted, we only need two pointers to resolve the problem.
But if the array could be unsorted, and the output needs to be the pair of numbers that sum result in target, then we need to use a HashMap to store the complement and the index of the complement;
Else, then we can use a HashSet to store the complement;

The time complexity of a query in a hashmap or in a hashset is O(1).

So, the solution has time complexity O(n) and the space complexity is O(n) as well if the numbers can be unsorted.

But if the numbers are always sorted we can have a solution with time complexity O(n) and space complexity O(1);
*/

export const hasPairWithSumUnsortedNumbers = (numbers, targetSum) => {
  const setComplements = new Set();
  for (let index = 0; index < numbers.length; index += 1) {
    const currentValue = numbers[index];
    if (setComplements.has(currentValue)) {
      return true;
    }
    const complement = targetSum - currentValue;
    setComplements.add(complement);
  }
  return false;
};

export const hasPairWithSumSortedNumbers = (numbers, targetSum) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const currentSum = numbers[left] + numbers[right];
    if (currentSum === targetSum) {
      return true;
    }
    if (currentSum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return false;
};
