/**
 * 704 - Binary Search (https://leetcode.com/problems/binary-search/)
 * ------------------------------------------------------------------
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index.
 * Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/** Method 1
 * [Runtime: 93 ms, faster than 56.58% of JavaScript online submissions for Binary Search.]
 * [Memory Usage: 46.8 MB, less than 6.37% of JavaScript online submissions for Binary Search.]
 */
var search = function (nums, target, index = 0) {
  const mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) return index + mid;
  const right = nums.splice(mid + 1);
  const left = nums.slice(0, mid);

  if (target > nums[mid]) return search(right, target, index + mid + 1);
  else if (target < nums[mid]) return search(left, target, index);
  else return -1;
};

/** Testing */
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 100)); // -1
