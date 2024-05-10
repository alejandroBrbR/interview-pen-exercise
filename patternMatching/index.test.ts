import { describe, expect, test } from "@jest/globals";
import { patternMatching } from "./index";

/*
Example 1
Input: words = ["aa", "bb"], pattern = "cc"
Output: ["aa", "bb"]
Explanation: Both strings repeat letters just as the pattern string does.

Input: words = ["aac", "bbc", "bcb", "yzy"], pattern = "ghg"
Output: ["bcb", "yzy"]

Input: words = ["aa", "bb"], pattern = "zy"
Output: []
*/

describe("patternMatching testing", () => {
  test("Test 1", () => {
    const res = patternMatching(["aa", "bb"], "cc");
    expect(res).toStrictEqual(["aa", "bb"]);
  });

  test("Test 2", () => {
    const res = patternMatching(["aac", "bbc", "bcb", "yzy"], "ghg");
    expect(res).toStrictEqual(["bcb", "yzy"]);
  });

  test("Test 3", () => {
    const res = patternMatching(["aa", "bb"], "zy");
    expect(res).toStrictEqual([]);
  });
});
