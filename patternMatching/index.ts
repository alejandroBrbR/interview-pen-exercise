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

/**
 * Firs try, deprecated
 */
/*
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
*/

/**
 * Checks if a given word matches a given pattern.
 * @param {string} word - The word to be checked.
 * @param {string} pattern - The pattern to match against.
 * @returns {boolean} - Returns true if the word matches the pattern, otherwise false.
 */
function patternMatch(word: string, pattern: string): boolean {
    // this is a quick check to see if the word is the same length as the pattern
    if (word.length !== pattern.length) return false;

    const dictionaryLetters: { [key: string]: string } = {}; 
    const dictionaryPattern: { [key: string]: string } = {}; 

    // Simplify logic and delete flag variable using .every() iterator
    return word.split("").every((letter, index) => {
      if (dictionaryLetters[letter]) {
        if (dictionaryLetters[letter] !== pattern[index]) {
          return false
        }
      } else if (dictionaryPattern[pattern[index]]) {
        return false
      }

      // assign the letter to the dictionary
      dictionaryLetters[letter] = pattern[index];
      dictionaryPattern[pattern[index]] = letter;
      return true;
    });
}

/**
 * Filters an array of words based on a pattern.
 * 
 * @param words - An array of strings representing words.
 * @param pattern - A string representing the pattern to match.
 * @returns An array of strings that match the given pattern.
 */
function patternMatching(words: Array<string>, pattern: string): Array<string> {
  const result: Array<string> = [];
  words.forEach((word) => {
    if (patternMatch(word, pattern)) {
      result.push(word);
    } 
  });
  return result;
}

export { patternMatching };
