/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * ---------
 * 
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * ---------
 * 
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * ----------
 * 
 * Input: x = 120
 * Output: 21
 * 
 * Constraints:

 *  -2^31 <= x <= 2^31 - 1


 */

var reverse = function (x) {
  const isNegative = x < 0 ? -1 : 1;
  const reversedX =
    isNegative * parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (reversedX < -Math.pow(2, 31) || reversedX > Math.pow(2, 31) - 1) return 0;
  return reversedX;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));
