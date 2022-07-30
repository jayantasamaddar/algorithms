/**
 * 890. Find and Replace Pattern
 * ------------------------------
 * Given a list of strings words and a string pattern, return a list of words[i] that match pattern. 
 * You may return the answer in any order.
 * 
 * A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
 * Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
 *
 * Example 1
 * ---------
 * Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
 * Output: ["mee","aqq"]
 * Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
 * "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
 * 
 * Example 2
 * ---------
 * Input: words = ["a","b","c"], pattern = "a"
 * Output: ["a","b","c"]

 */

/**
 * Method 1 - Using Hash Table - Creating two Hash Tables and comparing (using arrays)
 * -----------------------------------------------------------------------------------
 * [Runtime: 105 ms, faster than 50.00% of JavaScript online submissions for Find and Replace Pattern.]
 * [Memory Usage: 46.3 MB, less than 11.67% of JavaScript online submissions for Find and Replace Pattern.]
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let refHash = {};
  for (let i = 0; i < pattern.length; i++) {
    if (refHash[pattern[i]]) {
      refHash[pattern[i]].push(i);
    } else {
      refHash[pattern[i]] = [i];
    }
  }
  refHash = Object.values(refHash);
  const output = [];
  for (let j = 0; j < words.length; j++) {
    if (words[j].length === pattern.length) {
      let wordHash = {};
      for (let k = 0; k < words[j].length; k++) {
        if (wordHash[words[j][k]]) {
          wordHash[words[j][k]].push(k);
        } else {
          wordHash[words[j][k]] = [k];
        }
      }
      wordHash = Object.values(wordHash);
      let match = true;
      for (let l = 0; l < refHash.length; l++) {
        if (refHash[l].join('') !== wordHash[l].join('')) {
          match = false;
          break;
        }
      }
      if (match) output.push(words[j]);
    }
  }
  return output;
};

/**
 * Method 2 - Using Hash Table - Creating two Hash Tables and comparing (using strings)
 * ------------------------------------------------------------------------------------
 * [Runtime: 93 ms, faster than 69.17% of JavaScript online submissions for Find and Replace Pattern.]
 * [Memory Usage: 46.6 MB, less than 5.83% of JavaScript online submissions for Find and Replace Pattern.]
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let refHash = {};
  for (let i = 0; i < pattern.length; i++) {
    if (refHash[pattern[i]]) {
      refHash[pattern[i]] += i;
    } else {
      refHash[pattern[i]] = i;
    }
  }
  refHash = Object.values(refHash);
  const output = [];
  for (let j = 0; j < words.length; j++) {
    if (words[j].length === pattern.length) {
      let wordHash = {};
      for (let k = 0; k < words[j].length; k++) {
        if (wordHash[words[j][k]]) {
          wordHash[words[j][k]] += k;
        } else {
          wordHash[words[j][k]] = k;
        }
      }
      wordHash = Object.values(wordHash);
      let match = true;
      for (let l = 0; l < refHash.length; l++) {
        if (refHash[l] !== wordHash[l]) {
          match = false;
          break;
        }
      }
      if (match) output.push(words[j]);
    }
  }
  return output;
};

/**
 * Method 3 - Using Hash Table (using arrays as values) - Does not return a new array.
 * -----------------------------------------------------------------------------------
 * [Runtime: 74 ms, faster than 87.50% of JavaScript online submissions for Find and Replace Pattern.]
 * [Memory Usage: 46.6 MB, less than 6.67% of JavaScript online submissions for Find and Replace Pattern.]
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let refHash = {};
  for (let i = 0; i < pattern.length; i++) {
    if (refHash[pattern[i]]) {
      refHash[pattern[i]] += i;
    } else {
      refHash[pattern[i]] = i;
    }
  }
  refHash = Object.values(refHash);
  let j = 0;
  while (j < words.length) {
    if (words[j].length === pattern.length) {
      let wordHash = {};
      for (let k = 0; k < words[j].length; k++) {
        if (wordHash[words[j][k]]) {
          wordHash[words[j][k]] += k;
        } else {
          wordHash[words[j][k]] = k;
        }
      }
      wordHash = Object.values(wordHash);
      let match = true;
      for (let l = 0; l < refHash.length; l++) {
        if (refHash[l] !== wordHash[l]) {
          match = false;
          break;
        }
      }
      if (!match) {
        words.splice(j, 1);
      } else j++;
    }
  }
  return words;
};

/**
 * Method 4 - Using Hash Table (using strings as values) - Does not return a new array.
 * ------------------------------------------------------------------------------------
 * [Runtime: 69 ms, faster than 95.00% of JavaScript online submissions for Find and Replace Pattern.]
 * [Memory Usage: 46.2 MB, less than 11.67% of JavaScript online submissions for Find and Replace Pattern.]
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let refHash = {};
  for (let i = 0; i < pattern.length; i++) {
    if (refHash[pattern[i]]) {
      refHash[pattern[i]] += i;
    } else {
      refHash[pattern[i]] = i;
    }
  }
  refHash = Object.values(refHash);
  let j = 0;
  while (j < words.length) {
    if (words[j].length === pattern.length) {
      let wordHash = {};
      for (let k = 0; k < words[j].length; k++) {
        if (wordHash[words[j][k]]) {
          wordHash[words[j][k]] += k;
        } else {
          wordHash[words[j][k]] = k;
        }
      }
      wordHash = Object.values(wordHash);
      let match = true;
      for (let l = 0; l < refHash.length; l++) {
        if (refHash[l] !== wordHash[l]) {
          match = false;
          break;
        }
      }
      if (!match) {
        words.splice(j, 1);
      } else j++;
    }
  }
  return words;
};

console.log(
  findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
); // ["mee","aqq"]

console.log(
  findAndReplacePattern(['badc', 'abab', 'dddd', 'dede', 'yyxx'], 'baba')
); // ["abab","dede"]
