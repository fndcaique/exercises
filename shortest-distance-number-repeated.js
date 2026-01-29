// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Shortest Distance Number Repeated

// You are given an array of integers. Your task is to find the smallest distance between any two identical numbers in the array. If there are no repeated numbers, return `-1`.

// The distance between two positions is calculated as the absolute difference between their indices.

// Example 1:
// Input: numbers = [1, 2, 3, 4, 2, 5, 3]
// Output: 3
// Explanation: The number 2 appears at index 1 and index 4, with a distance of 3. The number 3 appears at index 2 and index 6, with a distance of 4. The smallest distance is 3.

// Example 2:
// Input: numbers = [7, 8, 9]
// Output: -1
// Explanation: Since no number is repeated in the array, the output is -1.

// Example 3:
// Input: numbers = [1, 1, 2, 3]
// Output: 1
// Explanation: The number 1 appears at adjacent positions, giving a minimum distance of 1.

// Example 4:
// Input: numbers = [1, 1, 2, 1]
// Output: 1
// Explanation: The number 1 appears at positions 0, 1, and 3. The minimum distance is 1 (between positions 0 and 1).

// Constraints:

// - The length of numbers is at most `10^5`
// - Each element in numbers is an integer between `-10^9` and `10^9`

/*
Map:
  number: index,
*/

export function getShortestDistanceNumberRepeated(numbers) {
  if (!numbers || numbers.length < 2) return -1;
  const map = new Map();
  let minDistance = -1;
  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex += 1) {
    let number = numbers[currentIndex];
    const previousNumberIndex = map.get(number);
    if (previousNumberIndex !== undefined) {
      const candidateDistance = currentIndex - previousNumberIndex;
      if (candidateDistance === 1) return 1;
      if (minDistance === -1 || candidateDistance < minDistance) {
        minDistance = candidateDistance;
      }
    }
    map.set(number, currentIndex);
  }
  return minDistance;
}
