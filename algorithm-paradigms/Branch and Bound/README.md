# Table of Contents

- [Table of Contents](#table-of-contents)
- [Branch and Bound Algorithms and their Use Cases](#branch-and-bound-algorithms-and-their-use-cases)
- [Methods for generating the State-Space Tree](#methods-for-generating-the-state-space-tree)
    - [Fixed Size Solution - FIFO Branch and Bound](#fixed-size-solution---fifo-branch-and-bound)
    - [Variable Size Solution - LIFO Branch and Bound](#variable-size-solution---lifo-branch-and-bound)
- [Use Cases](#use-cases)
  - [Use Case 1 - Job Sequencing with Deadlines](#use-case-1---job-sequencing-with-deadlines)

---

# Branch and Bound Algorithms and their Use Cases

Branch and bound is an algorithm design paradigm which is generally used for solving combinatorial optimization problems, specifically minimization problems (a maximization problem may be converted into a minimization problem). These problems are typically exponential in terms of time complexity and may require exploring all possible permutations in worst case.

This is similar to backtracking, in the sense, it also utilizes the State-Space Tree for solving a problem. The difference between **[Backtracking](../Backtracking/README.md)** and **Branch and Bound** is Backtracking is **Depth-First Search (DFS)** while Branch and Bound is **Breadth-First Search (BFS)**.

The Branch and Bound Algorithm technique solves these problems relatively quickly.

---

# Methods for generating the State-Space Tree

There are two methods for generating a State-Space Tree, which depends on how you want the solution.

- **Variable Size Solution:** Chooses only the expected solutions.
  E.g.: [1, 2, 4]
- **Fixed Size Solution:** Returns 1 for the solutions we want and 0 for solutions we don't want. Total length of the Fixed Size Solution is the length of the input array. O(n) space complexity.
  E.g.: [1, 1, 0, 1, 0]
- **Least Cost Branch and Bound (LCBB):**

### Fixed Size Solution - FIFO Branch and Bound

We create a State-Space Tree that looks like this and branches out:

```
                                1
                           /   /|\   \
                          /   / | \   \
                         /   /  |  \   \
                        /   /   |   \   \
                       2   3    4    5   6
```

We use Queue for next node exploration. (First In-First Out)

### Variable Size Solution - LIFO Branch and Bound

We create a State-Space Tree that looks like this:

```
                                1
                           /   /|\   \
                          /   / | \   \
                         /   /  |  \   \
                        /   /   |   \   \
                       2   3    4    5   6
```

We use Stack for next node exploration. (Last In-First Out)

---

# Use Cases

## Use Case 1 - Job Sequencing with Deadlines

**Problem:** There are `5` jobs. Associated with each job, is a profit which is attained after completion of the job. Each job must also be finished within its `deadline` (in hours).
Assume, there is a machine that completes 1 job in 1 hour, what is the job sequencing that must be done so as to generate the maximize profit.

**Given array of jobs below, calculate the total profit and the sequence of jobs that have to be undertaken for the maximum profit possible :**

```
const jobs = [
  { id: 1, profit: 20, deadline: 2 },
  { id: 2, profit: 15, deadline: 2 },
  { id: 3, profit: 10, deadline: 1 },
  { id: 4, profit: 5, deadline: 3 },
  { id: 5, profit: 1, deadline: 3 },
];
```

---
