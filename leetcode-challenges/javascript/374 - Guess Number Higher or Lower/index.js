/**
 * 374 - Guess Number Higher or Lower (https://leetcode.com/problems/guess-number-higher-or-lower)
 * -----------------------------------------------------------------------------------------------
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three possible results:
 *
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 *
 * Return the number that I picked.
 */

/**
 * Method 1 - Using Binary Search
 * ------------------------------
 * [Runtime: 69 ms, faster than 80.43% of JavaScript online submissions for Guess Number Higher or Lower.]
 * [Memory Usage: 42.2 MB, less than 15.63% of JavaScript online submissions for Guess Number Higher or Lower.]
 */

var guess = function (n, pick = 7) {
  if (n === pick) return 0;
  if (n > pick) return -1;
  if (n < pick) return 1;
};

var guessNumber = function (n, start = 1) {
  const mid = Math.floor((n + start) / 2);
  if (guess(mid) === 0) return mid;
  else if (guess(mid) === -1) return guessNumber(mid, 1);
  else return guessNumber(n, mid + 1);
};

/** Testing */
console.log(guessNumber(10));
