/*
Remove Adjacent Duplicates in String. You are given a string s and an integer k. Write a function to remove k adjacent duplicates from s where the "adjacent" characters are equal.

For instance, if k is 3 and the string is "daaabbbaa", since we have "aaa" and "bbb" as adjacent triples, the function should transform the string to "daa", removing the "bbb" first and then the remaining "aaa".

Example:

s = 'abcd'
k = 2
output: 'abcd'

s = 'deeedbbcccbdaa'
k = 3
output: 'aa'

s = 'pbbcggttciiippooaais'
k = 2
output: 'ps'

s = 'aaabbbacd'
k = 3
output: 'acd'

*/

// function removeRepeated(text, rTimes) {
//   let output = "";
//   let index = 0;
//   while (index < text.length) {
//     let endRepeated = index + 1;
//     while (
//       endRepeated < text.length &&
//       endRepeated - index < rTimes &&
//       text[index] === text[endRepeated]
//     ) {
//       endRepeated++;
//     }
//     if (endRepeated - index !== rTimes) {
//       output += text.substring(index, endRepeated);
//     }
//     index = endRepeated;
//   }
//   return output;
// }

// export function identifyAdjacent(s, k) {
//   // your code goes here function
//   let base = s;
//   let output = removeRepeated(base, k);
//   while (base.length !== output.length) {
//     base = output;
//     output = removeRepeated(base, k);
//   }
//   return output;
// }
//
export function identifyAdjacent(s, k) {
  const stack = [""];
  let sentence = "";
  for (let i = 0; i < s.length; ) {
    const char = s[i];
    sentence = stack.pop();
    if (sentence[0] !== char) {
      stack.push(sentence);
      sentence = "";
    }
    let j = i + 1;
    while (j < s.length && j - i < k && s[j] === char) {
      j++;
    }
    const newSequence = s.substring(i, j);
    sentence += newSequence;
    if (sentence.length >= k) {
      const rest = sentence.length % k;
      if (rest !== 0) {
        stack.push(newSequence);
      }
    } else {
      stack.push(sentence);
    }
    i = j;
  }
  return stack.join("");
}

console.log(identifyAdjacent("abbcccbaada", 3));
