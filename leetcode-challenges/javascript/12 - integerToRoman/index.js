/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].} s 
 */

var intToRoman = function convertToRoman(num) {
  const romanNumbers = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };
  let roman = '';
  const generateRoman = num => {
    if (num === 0) return roman;

    if (num >= 1000 && num < 4000) {
      const limit = Math.floor(num / 1000);
      for (let i = 0; i < limit; i++) {
        roman += romanNumbers[1000];
      }
      return generateRoman(num % 1000);
    }

    if (num >= 500 && num < 900) {
      roman += romanNumbers[500];
      return generateRoman(num % 500);
    }

    if (num >= 100 && num < 400) {
      const limit = Math.floor(num / 100);
      for (let i = 0; i < limit; i++) {
        roman += romanNumbers[100];
      }
      return generateRoman(num % 100);
    }

    if (num >= 50 && num < 90) {
      roman += romanNumbers[50];
      return generateRoman(num % 50);
    }

    if (num >= 10 && num < 40) {
      const limit = Math.floor(num / 10);
      for (let i = 0; i < limit; i++) {
        roman += romanNumbers[10];
      }
      return generateRoman(num % 10);
    }

    if (num >= 5 && num < 9) {
      roman += romanNumbers[5];
      return generateRoman(num % 5);
    }

    if (num >= 1 && num < 4) {
      for (let i = 0; i < num; i++) {
        roman += romanNumbers[1];
      }
      return generateRoman(0);
    }

    /**
     * Handle Exceptions: The number preceding a roman numeral has a special case.
     * E.g. 44 is written as XLIV and not XXXXIIII.
     * This is done by 40 + 4: 40 is XL and 4 is IV.
     */
    const romanKeys = Object.keys(romanNumbers);
    const closeIndx = romanKeys.findIndex(n => n > num);

    if (closeIndx !== -1) {
      const firstIndx = closeIndx % 2 === 0 ? closeIndx : closeIndx + 1;

      roman +=
        romanNumbers[Math.ceil(romanKeys[firstIndx] / 10)] +
        romanNumbers[romanKeys[closeIndx]];

      return generateRoman(num % Math.ceil(romanKeys[firstIndx] / 10));
    }
  };
  return generateRoman(num);
};

console.log(intToRoman(1000));
console.log(intToRoman(44));
