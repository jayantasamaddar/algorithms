/**
 * Method 1 - Merging the sorted Lists to a new List
 * --------------------------------------------------
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
 * Method 2 - Merging the sorted Lists to the first array
 * ------------------------------------------------------
 * [Runtime: 196 ms, faster than 31.06% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * [Memory Usage: 47.7 MB, less than 50.92% of JavaScript online submissions for Median of Two Sorted Arrays.]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */

var merge = (nums1, nums2) => {
  let i = 0;
  let j = 0;

  while (j < nums2.length) {
    const sortedArr = nums1.slice(i);
    console.log;
    const pick = nums2.splice(j, 1)[0];

    for (let k = 0; k < sortedArr.length; k++) {
      if (nums1[k] > pick) {
        nums1.splice(k, 0, pick);
        i = k;
        break;
      } else {
        nums1.push(pick);
        i = nums1.length - 1;
      }
    }
  }
  return nums1.push(...nums2);
};

var findMedianSortedArrays = function (nums1, nums2) {
  merge(nums1, nums2);
  return nums1;
  if (nums1.length % 2 === 1) return nums1[Math.floor(nums1.length / 2)];
  else {
    const first = Math.floor(nums1.length / 2) - 1;
    return (nums1[first] + nums1[first + 1]) / 2;
  }
};

/*************************************/
/* Testing */
/*************************************/
const nums1 = [35, 44, 59, 99, 101];
const nums2 = [7, 62, 79, 99, 142];

// console.log(findMedianSortedArrays(nums1, nums2));
// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
