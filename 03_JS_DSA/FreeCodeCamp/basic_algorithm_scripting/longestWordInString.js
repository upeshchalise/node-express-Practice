// Return the length of the longest word in the provided sentence.

function longestWord(str) {
  let arr;
  arr = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
