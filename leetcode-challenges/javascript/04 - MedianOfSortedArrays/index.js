/**
 * Method 1 - Merging to a new List - [Time Complexity: O(i + j), Space Complexity: O(i + j)]
 * ------------------------------------------------------------------------------------------
 * [Runtime: 196 ms, faster than 31.06% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * [Memory Usage: 47.7 MB, less than 50.92% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */

var merge = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  const mergedArr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) mergedArr.push(nums1[i++]);
    else mergedArr.push(nums2[j++]);
  }
  return mergedArr.concat(nums1.slice(i), nums2.slice(j));
};

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = merge(nums1, nums2);
  if (merged.length % 2 === 1) return merged[Math.floor(merged.length / 2)];
  else {
    const first = Math.floor(merged.length / 2) - 1;
    return (merged[first] + merged[first + 1]) / 2;
  }
};

/**
 * Method 2 - Iterative Solution - [Time Complexity: O(max(i, j), Space Complexity O(i + j)]
 * -----------------------------------------------------------------------------------------
 * [Runtime: 108 ms, faster than 93.33% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * [Memory Usage: 47 MB, less than 70.67% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const merge = (nums1, nums2) => {
    const mergedArr = [];

    while (nums1.length && nums2.length) {
      if (nums1[0] < nums2[0]) {
        mergedArr.push(nums1.shift());
      } else mergedArr.push(nums2.shift());
    }
    mergedArr.push(...nums1.splice(0), ...nums2.splice(0));
    return mergedArr;
  };

  const merged = merge(nums1, nums2);
  if (merged.length % 2 === 1) return merged[Math.floor(merged.length / 2)];
  else {
    const first = Math.floor(merged.length / 2) - 1;
    return (merged[first] + merged[first + 1]) / 2;
  }
};

/**
 * Method 3 - Recursive Solution with [Time Complexity: O(max(i, j), Space Complexity O(i + j)]
 * --------------------------------------------------------------------------------------------
 * [Runtime: 153 ms, faster than 66.56% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * [Memory Usage: 47.9 MB, less than 45.82% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */

var findMedianSortedArrays = function (nums1, nums2, merged = []) {
  // Exit Condition
  if (nums1.length === 0 || nums2.length === 0) {
    merged.push(...nums1.splice(0), ...nums2.splice(0));
    if (merged.length % 2 === 1) return merged[Math.floor(merged.length / 2)];
    else {
      const first = Math.floor(merged.length / 2) - 1;
      return (merged[first] + merged[first + 1]) / 2;
    }
  }
  // Working
  if (nums1[0] < nums2[0]) {
    merged.push(nums1.shift());
  } else merged.push(nums2.shift());

  return findMedianSortedArrays(nums1, nums2, merged);
};

/*************************************/
/* Testing */
/*************************************/
const nums1 = [35, 44, 59, 99, 101];
const nums2 = [7, 62, 79, 99, 142];

console.log(findMedianSortedArrays(nums1, nums2));
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
