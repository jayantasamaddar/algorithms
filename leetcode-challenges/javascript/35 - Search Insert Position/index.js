/**
 * 35 - Search Insert Postion (https://leetcode.com/problems/search-insert-position/)
 * ----------------------------------------------------------------------------------
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 *
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1
 * ---------
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 *
 * Example 2
 * ---------
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 *
 * Example 3
 * ---------
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, index = 0) {
  if (nums.length === 0) return -1;
  const mid = Math.floor(nums.length / 2);
  if (target === mid) return index + mid - 1;
  const left = nums.slice(0, mid);
  const right = nums.splice(mid + 1);
  if (target < left[0]) return index;
  else if (target > right[right.length - 1]) return index + right.length - 1;
  else {
    const result = Math.max(
      searchInsert(left, target, index),
      searchInsert(right, target, index + mid + 1)
    );
    return result;
  }
};

/** Testing */
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
