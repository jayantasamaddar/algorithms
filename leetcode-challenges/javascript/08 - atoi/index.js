/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

 * The algorithm for myAtoi(string s) is as follows:
 * ---------------------------------------------------
 * (1) Read in and ignore any leading whitespace.
 * 
 * (2) Check if the next character (if not already at the end of the string) is '-' or '+'. 
 * Read this character in if it is either. 
 * This determines if the final result is negative or positive respectively. 
 * Assume the result is positive if neither is present.
 * 
 * (3) Read in next the characters until the next non-digit character or the end of the input is reached. 
 * The rest of the string is ignored.
 * 
 * (4) Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). 
 * If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * 
 * (5) If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. 
 * Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
 * 
 * (6) Return the integer as the final result.
 * 
 */

/** Method 1 */
var myAtoi = function (s) {
  const num = parseInt(s);

  if (isNaN(num)) return 0;
  else if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
  else if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  else return num;
};

/** Method 2 - Without using parseInt */
var myAtoi2 = function (s) {
  const t = s.trim();
  const isNegative = t.charAt(0) === '-' ? -1 : 1;
  const i = t.split('').findIndex(x => x.match(/^[A-Za-z]+$/));
  const num =
    (['-', '+'].includes(t.charAt(0))
      ? t.slice(1, i >= 0 ? i : t.length)
      : t.slice(0, i >= 0 ? i : t.length)) * isNegative;

  if (isNaN(num)) return 0;
  else if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
  else if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  else return num;
};

console.log(myAtoi('42'));
console.log(myAtoi('      -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));

console.log(myAtoi2('42'));
console.log(myAtoi2('      -42'));
console.log(myAtoi2('4193 with words'));
console.log(myAtoi2('words and 987'));
console.log(myAtoi2('-91283472332'));
