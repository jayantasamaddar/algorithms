/**
 * 3. Longest Substring Without Repeating Characters
 * -------------------------------------------------
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1
 * ----------
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2
 * ---------
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3
 * ---------
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

/**
 * Method 1
 * --------
 * [Runtime: 91 ms, faster than 93.64% of JavaScript online submissions for Longest Substring Without Repeating Characters.]
 * [Memory Usage: 47.5 MB, less than 61.19% of JavaScript online submissions for Longest Substring Without Repeating Characters.]
 * @param {string} s
 * @returns {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const index = str.indexOf(s.charAt(i));
    if (index >= 0) {
      str = str.slice(index + 1);
      str += s[i];
    } else {
      str += s[i];
      maxLength = Math.max(str.length, maxLength);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('cdd'));
console.log(lengthOfLongestSubstring('dvdf'));
