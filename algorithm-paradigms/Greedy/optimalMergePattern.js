/**
 * Optimal Merge Pattern
 * ---------------------
 * Given 4 Lists. Merge using Greedy Method to get the quickest merge time possible.
 */

const optimalMerge = arrays => {
  const sortedArrays = arrays.slice();
  for (let i = 1; i < arrays.length; i++) {
    const sortedArr = sortedArrays.slice(0, i);
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArrays[i].length < sortedArr[j].length) {
        const pick = sortedArrays.splice(i, 1)[0];
        sortedArrays.splice(j, 0, pick);
        break;
      }
    }
  }

  const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) mergedArr.push(arr1[i++]);
      else mergedArr.push(arr2[j++]);
    }

    return mergedArr.concat(arr1.slice(i), arr2.slice(j));
  };

  const recursiveMergeSort = arrays => {
    if (arrays.length === 2) return merge(arrays[0], arrays[1]);

    const merged = merge(...arrays.splice(0, 2));

    if (
      arrays.length >= 2 &&
      merged.length > arrays[0].length &&
      merged.length > arrays[1].length
    ) {
      return recursiveMergeSort([
        merged,
        merge(...arrays.splice(0, 2)),
        ...arrays,
      ]);
    } else return recursiveMergeSort([merged, ...arrays]);
  };

  return recursiveMergeSort(sortedArrays);
};

/** Testing */
console.log(
  optimalMerge([
    [1, 3, 5, 7],
    [11, 22, 33, 44, 55, 66, 77],
    [12, 24, 36],
    [10, 20, 30, 40, 50],
  ])
);

/** Working
 * --------
 * A = [ 12, 24, 36 ],
 * B = [ 1, 3, 5, 7 ],
 * C = [ 10, 20, 30, 40, 50 ],
 * D = [ 11, 22, 33, 44, 55, 66, 77 ]
 *
 * A + B => 7
 * Is 7 <= C's length or is C the last element ? No. Is 7 <= D's length ? Yes.
 * Merge A + B and C = 12
 * Is 12 <= D's length or is C the last element ? Yes. Merge A + B + C with D.
 */

/**
 * Result
 * ------
 * [ 1, 3, 5, 7, 10, 11, 12, 20, 22, 24, 30, 33, 36, 40, 44, 50, 55, 66, 77 ]
 */
