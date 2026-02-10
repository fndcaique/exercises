/*
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".


Example 1:

Input: s = "babcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

Example 2:

Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
Explanation: There are two strings in words that are a subsequence of s: "ahjpjau", "ja".

*/

/*
SOLUTION

Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]

A map of letter and an ordered list of index
{
  "d": [0],
  "s": [1],
  "a": [2, 7],
  "h": [3],
  "j": [4, 6],
  "p": [5],
  "u": [8],
  "f": [9]
}
*/

export function countSubsequencesOfS(s: string, words: string[]) {
  if (!s || !words?.length) return 0;

  let count = 0;
  const mapLetterIndex = new Map<string, number[]>();

  for (let index = 0; index < s.length; index += 1) {
    const char = s[index];
    const orderedListOfIndex = mapLetterIndex.get(char) || [];
    orderedListOfIndex.push(index);
    mapLetterIndex.set(char, orderedListOfIndex);
  }

  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    if (isSubsequence(mapLetterIndex, word)) {
      count += 1;
    }
  }
  return count;
}

function isSubsequence(mapLetterIndex: Map<string, number[]>, word: string) {
  let currentIndex = -1;
  for (let index = 0; index < word.length; index += 1) {
    const char = word[index];
    const listOfIndex = mapLetterIndex.get(char);
    if (!listOfIndex) {
      return false;
    }
    const resultIndex = binarySearchNextIndex(listOfIndex, currentIndex);
    if (resultIndex === -1) {
      return false;
    }
    currentIndex = listOfIndex[resultIndex];
  }
  return true;
}

export function binarySearchNextIndex(list: number[], target: number) {
  let start = 0,
    end = list.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start < end) {
    if (list[middle] > target) {
      end = middle;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return list[middle] > target ? middle : -1;
}

/*

THE SOLUTION

Step 1
a map with chars of s as key and a list of words and current_index of word

for s = "babcde", words = ["a","bb","acd","ace"]

O('words')
map = {
  'a': [{word: 'a', index: 0}, {word: 'acd', index: 0}, {word: 'ace', index: 0}]
  'b': [{word: 'bb', index: 0}]
}

Step 2
Run a for over the s chars to process each item in that char

char = 'a'
items = [{word: 'a', index: 0}, {word: 'acd', index: 0}, {word: 'ace', index: 0}]
set null for map[char]

for each item:
  - increment index: item.index++
  - if the index is equals to |w| increment total count: total++
  - else: add the current item to the map[item.word[item.index]] list:

So after that map will be:
map = {
  'a': null
  'b': [{word: 'bb', index: 0}],
  'c': [{word: 'acd', index: 1}, {word: 'ace', index: 1}]
}

continue the Step 2: go to next char of s



*/
export function countSubsequencesOfSFast(s: string, words: string[]) {
  if (!s || !words?.length) {
    return 0;
  }
  let count = 0;
  // Step 1
  const map = new Map<string, { word: string; index: number }[]>();
  const addItemToMap = (
    char: string,
    item: { word: string; index: number },
  ) => {
    const list = map.get(char);
    if (list) {
      list.push(item);
    } else {
      map.set(char, [item]);
    }
  };
  for (const word of words) {
    addItemToMap(word[0], { word, index: 0 });
  }
  // Step 2
  for (const char of s) {
    const list = map.get(char);
    if (list?.length) {
      map.delete(char);
      for (const item of list) {
        item.index += 1;
        if (item.index === item.word.length) {
          count += 1;
        } else {
          addItemToMap(item.word[item.index], item);
        }
      }
    }
  }
  return count;
}
