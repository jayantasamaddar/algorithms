/**
 * PERMUTATIONS (Method 1)
 * -----------------------
 * Space Complexity: O(n)
 *
 * Time Complexity: O(n!)
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

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

/**
 * PERMUTATIONS (Method 2)
 * -----------------------
 * Space Complexity: O(1)
 *
 * Time Complexity: O(n!)
 */

const permute2 = (nums, index = 0, permutations = []) => {
  if (nums[1] === 'G1') return;
  else if (index === nums.length - 1) {
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
 * -----------------------------------------------------------------------
 * Space Complexity: O(n)
 *
 * Time Complexity: O(n!)
 */

class Node {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

/**
 * Method 3A - Using ES5 Class to create a Permutation Tree
 * ---------------------------------------------------------
 */

class PermutationTree {
  constructor(array) {
    this.root = null;
    if (Array.isArray(array)) {
      this.create(array);
    }
  }

  /** Create Permutation Tree */
  create(array) {
    if (!Array.isArray(array)) console.error('Input must be an array');
    if (this.root !== null) console.error('Permutation Tree already exists');
    else {
      this.root = new Node();
      const buildTree = (currentRoot, arr, currentIndx = 0) => {
        if (currentIndx === arr.length) return this.root;

        const node = new Node(arr[currentIndx]);
        currentRoot.children.push(node);

        const rest = [
          ...arr.slice(0, currentIndx),
          ...arr.slice(currentIndx + 1),
        ];

        if (rest.length > 0) {
          buildTree(node, rest);
        }

        return buildTree(currentRoot, arr, currentIndx + 1);
      };
      buildTree(this.root, array);
    }
    return this.root;
  }

  /** Print the root node */
  print() {
    console.log(this.root);
  }

  /** Generate all the permutations */
  getPermutations() {
    if (this.root === null) console.error('Permutations not created');
    else {
      const generate = (root = this.root, combo = [], permutations = []) => {
        const children = root.children;
        if (children.length === 0) {
          permutations.push([...combo]);
        }

        for (let i = 0; i < children.length; i++) {
          combo.push(children[i].data);
          generate(children[i], combo, permutations);
          combo.pop();
        }

        return permutations;
      };
      return generate();
    }
  }
}

/**
 * Method 3B - Using a Node class to generate a Tree using Functions
 * -----------------------------------------------------------------
 */
const permute3 = array => {
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

  buildTree(root, array);
  return print(root);
};

/** Testing */
// console.log(permute(['B1', 'B2', 'G1']));
console.log(permute2(['B1', 'B2', 'G1']));
// console.log(permute3([1, 2, 3]));
// const tree = new PermutationTree([1, 2, 3]);
// console.log(tree.getPermutations());

/**
 * Working (Method 1)
 * ------------------
 *
 * { choices: [ 2, 3 ], combo: [ 1 ], permutations: [] }
 * { choices: [ 3 ], combo: [ 1, 2 ], permutations: [] }
 * { choices: [], combo: [ 1, 2, 3 ], permutations: [] }
 * { choices: [ 2 ], combo: [ 1, 3 ], permutations: [ [ 1, 2, 3 ] ] }
 * { choices: [], combo: [ 1, 3, 2 ], permutations: [ [ 1, 2, 3 ] ] }
 * {
 * choices: [ 1, 3 ],
 * combo: [ 2 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ] ]
 * }
 * {
 * choices: [ 3 ],
 * combo: [ 2, 1 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ] ]
 * }
 * {
 * choices: [],
 * combo: [ 2, 1, 3 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ] ]
 * }
 * {
 * choices: [ 1 ],
 * combo: [ 2, 3 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ] ]
 * }
 * {
 * choices: [],
 * combo: [ 2, 3, 1 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ] ]
 * }
 * {
 * choices: [ 1, 2 ],
 * combo: [ 3 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ] ]
 * }
 * {
 * choices: [ 2 ],
 * combo: [ 3, 1 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ] ]
 * }
 * {
 * choices: [],
 * combo: [ 3, 1, 2 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ] ]
 * }
 * {
 * choices: [ 1 ],
 * combo: [ 3, 2 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ] ]
 * }
 * {
 * choices: [],
 * combo: [ 3, 2, 1 ],
 * permutations: [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ] ]
 * }
 *
 */

/**
 * Result
 * ------
 * [
    [ 1, 2, 3 ],
    [ 1, 3, 2 ],
    [ 2, 1, 3 ],
    [ 2, 3, 1 ],
    [ 3, 1, 2 ],
    [ 3, 2, 1 ]
  ]
 */

/** Tree */
/*
{
   "data":null,
   "children":[
      {
         "data":"B1",
         "children":[
            {
               "data":"B2",
               "children":[
                  {
                     "data":"G1",
                     "children":[
                        
                     ]
                  }
               ]
            },
            {
               "data":"G1",
               "children":[
                  {
                     "data":"B2",
                     "children":[
                        
                     ]
                  }
               ]
            }
         ]
      },
      {
         "data":"B2",
         "children":[
            {
               "data":"B1",
               "children":[
                  {
                     "data":"G1",
                     "children":[
                        
                     ]
                  }
               ]
            },
            {
               "data":"G1",
               "children":[
                  {
                     "data":"B1",
                     "children":[
                        
                     ]
                  }
               ]
            }
         ]
      },
      {
         "data":"G1",
         "children":[
            {
               "data":"B1",
               "children":[
                  {
                     "data":"B2",
                     "children":[
                        
                     ]
                  }
               ]
            },
            {
               "data":"B2",
               "children":[
                  {
                     "data":"B1",
                     "children":[
                        
                     ]
                  }
               ]
            }
         ]
      }
   ]
}

*/
