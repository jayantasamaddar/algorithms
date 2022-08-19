/**
 * PERMUTATIONS (Method 1)
 * -----------------------
 * Space Complexity: O(n)
 *
 * Time Complexity: O(n!)
 *
 * [Runtime: 82 ms, faster than 88.27% of JavaScript online submissions for Permutations.]
 * [Memory Usage: 44.9 MB, less than 69.40% of JavaScript online submissions for Permutations.]
 */

const permute = (nums, combo = [], permutations = []) => {
  if (nums.length === 0) {
    permutations.push([...combo]);
  }
  for (let i = 0; i < nums.length; i++) {
    combo.push(nums[i]);
    const choices = [...nums.slice(0, i), ...nums.slice(i + 1)];
    permute(choices, combo, permutations);
    combo.pop();
  }
  return permutations;
};

/**
 * PERMUTATIONS (Method 2)
 * -----------------------
 * Space Complexity: O(1)
 *
 * Time Complexity: O(n!)
 *
 * [Runtime: 111 ms, faster than 47.42% of JavaScript online submissions for Permutations.]
 * [Memory Usage: 45.5 MB, less than 25.44% of JavaScript online submissions for Permutations.]
 */

const permute2 = (nums, index = 0, permutations = []) => {
  if (index === nums.length - 1) {
    permutations.push([...nums]);
  }
  for (let i = index; i < nums.length; i++) {
    swap(nums, index, i);
    permute2(nums, index + 1, permutations);
    swap(nums, index, i);
  }
  return permutations;
};

/**
 * PERMUTATIONS (Method 3)
 * -----------------------
 * Space Complexity: O(1)
 *
 * Time Complexity: O(n!)
 *
 * [Runtime: 145 ms, faster than 10.25% of JavaScript online submissions for Permutations.]
 * [Memory Usage: 45.3 MB, less than 31.27% of JavaScript online submissions for Permutations.]
 */

class Node {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

const permute3 = function (nums) {
  const root = new Node();

  /** Build the Tree */
  const buildTree = (currentRoot, arr, currentIndx = 0) => {
    if (currentIndx === arr.length) return root;

    const node = new Node(arr[currentIndx]);
    currentRoot.children.push(node);

    const rest = [...arr.slice(0, currentIndx), ...arr.slice(currentIndx + 1)];

    if (rest.length > 0) {
      buildTree(node, rest);
    }

    return buildTree(currentRoot, arr, currentIndx + 1);
  };

  /** Print all the permutations */
  const print = (root, combo = [], permutations = []) => {
    const children = root.children;
    if (children.length === 0) {
      permutations.push([...combo]);
    }

    for (let i = 0; i < children.length; i++) {
      combo.push(children[i].data);
      print(children[i], combo, permutations);
      combo.pop();
    }

    return permutations;
  };

  buildTree(root, nums);
  return print(root);
};
