/**
 * Given a string, determine the length of the longest palindromic string that can be constructed from the string’s characters.
 */

function longestPalindrome(word: string): number {
  // take the pair letters + 1
  let count = 0;
  const test: Array<string> = [];

  word.split("").forEach((letter) => {
    const index = test.indexOf(letter);
    if (index >= 0) {
      test.splice(index, 1);
      count = count + 2;
    } else {
      test.push(letter);
    }
  });

  if (count < word.length) {
    count++;
  }
  return count;
}

export { longestPalindrome };
