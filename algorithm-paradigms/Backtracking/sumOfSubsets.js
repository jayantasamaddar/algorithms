/**
 * Method 1
 * --------
 */

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const subOfSubsets = (arr, target, sum = 0, subset = [], permutations = []) => {
  if (sum > target) return;
  else if (sum === target) permutations.push([...subset]);
  else {
    for (let i = 0; i < arr.length; i++) {
      subset.push(arr[i]);
      const sum = subset.reduce((acc, n) => acc + n, 0);
      subOfSubsets(arr, target, sum, subset, permutations);
      subset.pop();
    }
  }
  return permutations;
};

// console.log(subOfSubsets([5, 10, 12, 13, 15, 18], 30));

/**
 * Method 2 - Using State Space Tree
 * ----------------------------------
 */

class Node {
  constructor(data = null, max = 0, subset = []) {
    this.data = data;
    this.subset = subset;
    this.max = max;
    this.children = [];
  }
}

/** Bounding Function */
const isSafe = (sum, arr, currentIndex, target, max) => {
  if (
    sum + arr[currentIndex + 1] <= target &&
    sum + arr.slice(currentIndex + 1).reduce((acc, n) + acc + n, 0) > max
  ) {
    return true;
  }
  return false;
};

const sumOfSubsets2 = (arr, target) => {
  const sum = arr.reduce((acc, n) => acc + n, 0);

  /** Build the Tree */
};
