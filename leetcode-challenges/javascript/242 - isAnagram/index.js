/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * ----------
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * ----------
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Constraints:
 * ------------
 * 
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 * 
 * Follow up:
 * ----------
 * What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 * 
 */

/** Method 1 - Using Hash Table (JavaScript Maps) - Better when the length of the strings can be huge.
 * [Runtime: 131 ms, faster than 41.08% of JavaScript online submissions for Valid Anagram.] = O(n)
 * [Memory Usage: 43.6 MB, less than 65.32% of JavaScript online submissions for Valid Anagram.] = O(n)
 *
 */
var isAnagram = function (s, t) {
  if (s.length < 1 || t.length > 5 * Math.pow(10, 4) || s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  for (const [key, val] of sMap) {
    if (val !== tMap.get(key)) return false;
  }
  return true;
};

/** Method 2 - Using sorting of strings.
 * [Runtime: 188 ms, faster than 8.96% of JavaScript online submissions for Valid Anagram.]
 * [Memory Usage: 49.3 MB, less than 9.23% of JavaScript online submissions for Valid Anagram.]
 */

var isAnagram = function (s, t) {
  if (s.length < 1 || t.length > 5 * Math.pow(10, 4) || s.length !== t.length) {
    return false;
  }
  return s.split('').sort().join('') === t.split('').sort().join('');
};

/** Testing */

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('danger', 'gander')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('nameless', 'salesman')); // false
console.log(isAnagram('danger', 'garden')); // true

/** Test Analysis
 * ---------------
 * A Hash Table is faster!
 */
