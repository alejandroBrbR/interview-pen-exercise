import { describe, expect, test } from "@jest/globals";
import { longestPalindrome } from "./index";

describe("Longest Palindrome testing", () => {
  test("Test 1", () => {
    const res = longestPalindrome("aabbc");
    expect(res).toStrictEqual(5);
  });

  test("Test 2", () => {
    const res = longestPalindrome("abbcccd");
    expect(res).toStrictEqual(5);
  });

  test("Test 3", () => {
    const res = longestPalindrome("xyz");
    expect(res).toStrictEqual(1);
  });

  test("Test 4", () => {
    const res = longestPalindrome("racecar");
    expect(res).toStrictEqual(7);
  });
  
  test("Test 5", () => {
    const res = longestPalindrome("abcde");
    expect(res).toStrictEqual(1);
  });
  
  test("Test 6", () => {
    const res = longestPalindrome("abccba");
    expect(res).toStrictEqual(6);
  });
});

