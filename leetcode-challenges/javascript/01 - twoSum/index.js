/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * 
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 *  
 * 
 * Constraints:
 * 
     * 2 <= nums.length <= 10^4
     * -10^9 <= nums[i] <= 10^9
     * -10^9 <= target <= 10^9
     * Only one valid answer exists.
 * 
 *  
 * Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

/** Method 1: Using iterative method */
var twoSum = function (nums, target) {
  // Constraints check
  if (
    nums.length < 2 ||
    nums.length > Math.pow(10, 4) ||
    target < -Math.pow(10, 9) ||
    target > Math.pow(10, 9)
  )
    return;
  if (nums.find(num => num < -Math.pow(10, 9) || num > Math.pow(10, 9))) return;

  // Working
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));
