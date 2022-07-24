# Backtracking and their Use Cases

Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time (by time, here, is referred to the time elapsed till reaching any level of the search tree).

Backtracking is not to solve optimization problems which are solved using Greedy and/or Dynamic Programming strategies. Backtracking is used when there are multiple solutions and we want all those solutions.

The characteristics can be summarized as the following:

- Solve problems recursively,
- Try to build the solution incrementally,
- Remove those solutions that fail to satisfy constraints.

For example, consider the Sudoku solving Problem, we try filling digits one by one. Whenever we find that current digit cannot lead to a solution, we remove it (backtrack) and try next digit. This is better than naive approach (generating all possible combinations of digits and then trying every combination one by one) as it drops a set of permutations whenever it backtracks.

![Sudoku](https://media.geeksforgeeks.org/wp-content/uploads/sudoku.jpg)

---

# Use Case 1 - [Brute Force Approach](bruteForce.js)

Brute Force approach says that for any given problem, we try out all possible solutions and pick up desired solutions.

### [Permutations](permutations.js)

E.g. There are three children, Jack, Jill and Tom. We need to find all possible seating arrangements for them.

The number of possible arrangements = 3! = 3 x 2 x 1 = **6**.

#### Method 1 - [Space Complexity: O(n), Time Complexity: O(n!)]
```
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
```

### Method 2 - [Space Complexity: O(1), Time Complexity: O(n!)]
```
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

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
```

### Method 3 - Building a State-Space Tree

The different solutions can also be represented in the form of a solution tree, also called as a **State-Space Tree**.

```
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
```

### All Possible Solutions while satisfying Constraints

The problems we solve using backtracking usually will have some constraints. We will try to check those constraints and get solutions that satisfy those constraints. A function that checks for these constraints is called a Bounding Function.

E.g.: There are three students, Boy 1, Boy 2 and Girl 1 seated in an order. Find all possible seating arrangements possible for `[B1, B2, G1]` such that `G1` is never seated in the middle.


#### Method 1 - [Space Complexity: O(n), Time Complexity: O(n!)]

```
const permute = (nums, combo = [], permutations = []) => {
  if (combo[1] === 'G1') return;
  else if (nums.length === 0) {
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
```

#### Method 2 - [Space Complexity: O(1), Time Complexity: O(n!)]

```
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
```

---

# Use Case 2 - N-Queens Problem

The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other. For example, the following is a solution for the 4 Queen problem.

For e.g. in a 4 x 4 chessboard, 4 Queens will be placed. The Queens can attack each other if any two are placed on the same row, same column or same diagonal.

**Example of a solution:**

![N-Queens Solution](https://media.geeksforgeeks.org/wp-content/uploads/N_Queen_Problem.jpg)

The expected output is a binary matrix that has 1s for the blocks where queens are placed. For example, the following is the output matrix for the above 4 queen solution.

```
[
    [ 0,  1,  0,  0 ],
    [ 0,  0,  0,  1 ],
    [ 1,  0,  0,  0 ],
    [ 0,  0,  1,  0 ],
]
```

### Pseudo-Code 
Generate all possible configurations of queens on board and print a configuration that satisfies the given constraints.

```
while there are untried configurations
{
   generate the next configuration
   if queens don't attack in this configuration then
   {
      return this configuration;
   }
}
```

### Algorithm Logic

The idea is to place queens one by one in different columns, starting from the leftmost column. When we place a queen in a column, we check for clashes with already placed queens. In the current column, if we find a row for which there is no clash, we mark this row and column as part of the solution. If we do not find such a row due to clashes, then we backtrack and return false.

1. Start in the leftmost column
2. If all queens are placed
    return true
3. Try all rows in the current column. 
   Do following for every tried row.
    - If the queen can be placed safely in this row 
       then mark this [row, column] as part of the 
       solution and recursively check if placing
       queen here leads to a solution.
    - If placing the queen in [row, column] leads to
       a solution then return true.
    - If placing queen doesn't lead to a solution then
       unmark this [row, column] (Backtrack) and go to 
       step (a) to try other rows.
4. If all rows have been tried and nothing worked,
   return false to trigger backtracking.

### Solution

[N-Queens Solution](nQueens.js)

---

# References

- [Leetcode 46 - All permutations](https://www.youtube.com/watch?v=vh0lkmVdRuc)
- [Leetcode 51 - N-Queens](https://leetcode.com/problems/n-queens)


