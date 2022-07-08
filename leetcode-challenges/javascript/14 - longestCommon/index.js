/**
 * Write a function to find the longest common prefix string amongst an array of strings.

 * If there is no common prefix, return an empty string "".
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 *  
 * 
 * Constraints:
 * 
     * 1 <= strs.length <= 200
     * 0 <= strs[i].length <= 200
     * strs[i] consists of only lowercase English letters.
 * 
 * 
 */

var longestCommonPrefix = function (strs) {
  if (strs.length < 1 || strs.length > 200) return;

  const smallestWordLength = strs.sort((a, b) => a.length - b.length)[0].length;
  let prefix = '';

  for (let i = 0; i < smallestWordLength; i++) {
    const arr = [];
    for (let j = 0; j < strs.length; j++) {
      const letter = strs[j][i];
      if (letter.length > 200 || !letter.match(/^[a-z]+$/)) return;
      if (!arr.length) arr[0] = letter;
      if (arr.length && arr[0] !== letter) {
        arr.splice(0);
        break;
      }
    }
    if (arr.length === 1) prefix += arr[0];
    else return prefix;
  }
  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['cir', 'car']));
