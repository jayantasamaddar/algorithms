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

var romanToInt = function (s) {
  let roman = '';
  const romanNum = n => {
    switch (n) {
      case 1:
        roman += 'I';
        break;
      case 5:
        roman += 'V';
        break;
      case 10:
        roman += 'X';
        break;
      case 50:
        roman += 'L';
        break;
      case 100:
        roman += 'C';
        break;
      case 500:
        roman += 'D';
        break;
      case 1000:
        roman += 'M';
        break;
      default:
        if (n % 1000 > 0) {
          romanNum(1000);
          romanNum(n % 1000);
        } else if (n % 500 > 0) {
          romanNum(500);
          romanNum(n % 500);
        } else if (n % 100 > 0) {
          romanNum(100);
          romanNum(n % 100);
        } else if (n % 50 > 0) {
          romanNum(50);
          romanNum(n % 50);
        } else if (n % 10 > 0) {
          romanNum(10);
          romanNum(n % 10);
        } else if (n % 5 > 0) {
          romanNum(5);
          romanNum(n % 5);
        } else {
          for (let i = 0; i < n; i++) {
            romanNum += 'I';
          }
        }
        break;
    }
  };
  romanNum(s);

  return roman;
};

console.log(romanToInt(51));
