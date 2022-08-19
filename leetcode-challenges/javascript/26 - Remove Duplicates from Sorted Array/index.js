/**
 * 26 - Remove Duplicates from Sorted Array
 * (https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
 * ---------------------------------------------------------------------
 */

/**
 *
 * @param {number} nums
 * @returns {number}
 */

var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) nums.splice(i, 1);
    else i++;
  }
  return nums.length;
};

/** Testing */
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
