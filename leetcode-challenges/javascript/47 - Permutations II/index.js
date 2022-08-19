/**
 * 47 - Permutations II (https://leetcode.com/problems/permutations-ii)
 * --------------------------------------------------------------------
 */

var swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

var permuteUnique = function (nums, index = 0, permutations = []) {
  if (index === nums.length - 1) {
    const combos = permutations.slice(-nums.length);
    // console.log({
    //   nums,
    //   combos,
    //   permutationLength: permutations.length,
    //   index,
    // });
    if (combos.findIndex(combo => combo.join('') === nums.join('')) === -1) {
      permutations.push([...nums]);
    }
  }
  for (let i = index; i < nums.length; i++) {
    swap(nums, index, i);
    permuteUnique(nums, index + 1, permutations);
    swap(nums, index, i);
  }
  return permutations;
};

/** Testing */
console.log(permuteUnique([1, 1, 2])); // [ [ 1, 1, 2 ], [ 1, 2, 1 ], [ 2, 1, 1 ] ]
console.log(permuteUnique([3, 3, 0, 3])); // [ [ 3, 3, 0, 3 ], [ 3, 3, 3, 0 ], [ 3, 0, 3, 3 ], [ 0, 3, 3, 3 ] ]
