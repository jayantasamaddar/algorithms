/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * 
 * Given n, calculate F(n).
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * Example 2:
 * 
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * Example 3:
 * 
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 *  
 * 
 * Constraints:
 * 
     * 0 <= n <= 30
 * 
 * 
 */

var fib = function (n) {
  if (n < 0 || n > 30) return;

  const generateFn = function (i, sum) {
    if (i === 0) return sum;
    else if (i === 1) return sum + 1;
    else {
      return generateFn(i - 1, sum + generateFn(i - 2, 0));
    }
  };

  return generateFn(n, 0);
};

console.log(fib(9));
//fib(3) = f(2) + f(1) = 1 + 1 = 2
//fib(5) = f(4) + f(3) = 3 + 2 = 5
//fib(6) = f(5) + f(4) = 5 + 3 = 8
//fib(7) = f(6) + f(5) = 8 + 5 = 13
//fib(8) = f(7) + f(6) = 13 + 8 = 21
//fib(9) = f(8) + f(7) = 21 + 13 = 34
