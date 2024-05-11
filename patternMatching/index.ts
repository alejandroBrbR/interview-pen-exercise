/* 
Given a list of strings and a pattern string, return a list of all of the strings in the provided list that match the pattern of the pattern string.

Example 1
Input: words = ["aa", "bb"], pattern = "cc"
Output: ["aa", "bb"]
Explanation: Both strings repeat letters just as the pattern string does.

Input: words = ["aac", "bbc", "bcb", "yzy"], pattern = "ghg"
Output: ["bcb", "yzy"]

Input: words = ["aa", "bb"], pattern = "zy"
Output: []
*/

function patternMatching(words: Array<string>, pattern: string): Array<string> {
  const result: Array<string> = [];
  words.forEach((word) => {
    // this is a quick check to see if the word is the same length as the pattern
    if (word.length !== pattern.length) return;

    const dictionary: { [key: string]: string } = {}; // Add index signature to dictionary object
    let correctPattern = false

    word.split("").forEach((letter, index) => {
      if (dictionary[letter]) {
        if (dictionary[letter] !== pattern[index]) {
          correctPattern = false;
          return
        }
      } else if (Object.values(dictionary).includes(pattern[index])) {
        correctPattern = false;
        return
      }

      // assign the letter to the dictionary
      dictionary[letter] = pattern[index];
      correctPattern = true;
    });

    if (correctPattern) result.push(word);
  });
  return result;
}
export { patternMatching };
