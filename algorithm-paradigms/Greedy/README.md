# Greedy Algorithms and their Use Cases

Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.
It doesn't worry whether the current best result will bring the overall optimal result. The algorithm never reverses the earlier decision even if the choice is wrong.

So the problems where choosing locally optimal also leads to global solution are the best fit for Greedy, i.e. optimization problems.

Let's break down the terms even further.

---

# What is an optimization problem?

A problem which demands either the minimum result or maximum result as an optimal solution is an Optimization problem.

**Example:**

I want to travel from Location A to Location B.

**Constraint:** Journey must be completed within 12 hours.

Multiple possible solutions exist for this problem.

Solution 1: By walking.
Solution 2: By car.
Solution 3: By bike.
Solution 4: By train.
Solution 5: By flight.

In this case, let's say, the solutions satisfying the conditions, i.e. the **Feasible Solutions** are, Solution 4 and 5, i.e. either by train or by flight.

Now let's impose more constraints:

**New Constraints:** The journey must be completed in minimum cost.

Now, this becomes a **minimization problem**. The resulting solution among all possible solutions with the new minimization problem in the picture is now called the **optimal solution**. For any given problem, there can be only one optimal solution.

### How to solve optimization problems

The strategies or algorithmic paradigms used to solve optimization problems are:

1. Greedy Method
2. Dynamic Programming
3. Branch and Bound

Some problems may be solved by either of the strategies, but in some cases, only one or a few strategies will work.

---

# Use Case - Knapsack Problem (One-dimensional)

**Problem:** There is some `objects`. Each object has a `weight` (in kg) and has makes a certain `profit`. There is a bag or a knapsack that can hold a maximum of `15` kg. Among all the objects available (whose total weight exceeds the knapsack capacity), fill the backpack with objects such that the profit is maximized? Find out the objects that fit the knapsack to generate the maximum profit possible and also the maximum possible profit.

**Given array of objects below, calculate the total profit and the total weight while trying to fill a knapsack that can hold weight <= 15 :**

```
const objects = [
  { id: 1, weight: 2, profit: 10 },
  { id: 2, weight: 3, profit: 5 },
  { id: 3, weight: 5, profit: 15 },
  { id: 4, weight: 7, profit: 7 },
  { id: 5, weight: 1, profit: 6 },
  { id: 6, weight: 4, profit: 18 },
  { id: 7, weight: 1, profit: 3 },
];
```

```
/** Knapsack Problem - Objects are Divisible (can be fractions)
 * E.g. Fruits, vegetables, groceries that can be measured by weight in fractions
 */

function findMax(arr, max) {
  const sortedObjects = [];
  const pickedObjects = [];
  let remainingWeight = max;
  let totalProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    const profitByWeight = arr[i].profit / arr[i].weight;
    const currentObj = {
      ...arr[i],
      profitByWeight,
    };

    if (sortedObjects.length === 0) {
      sortedObjects.push(currentObj);
    } else {
      for (let j = 0; j < sortedObjects.length; j++) {
        if (profitByWeight > sortedObjects[j].profitByWeight) {
          sortedObjects.splice(j, 0, currentObj);
          break;
        } else if (j < sortedObjects.length - 1) continue;
        else {
          sortedObjects.push(currentObj);
          break;
        }
      }
    }
  }

  for (let i = 0; i < sortedObjects.length; i++) {
    if (remainingWeight === 0) break;
    const maxWeight = remainingWeight - sortedObjects[i].weight;

    const pickedWeight =
      maxWeight > 0
        ? sortedObjects[i].weight
        : sortedObjects[i].weight + maxWeight;

    remainingWeight -= pickedWeight;
    totalProfit += sortedObjects[i].profitByWeight * pickedWeight;
    pickedObjects.push({ ...sortedObjects[i], weight: pickedWeight });
  }
  return { pickedObjects, totalWeight: max - remainingWeight, totalProfit };
}

console.log(findMax(objects, 15));
/* 
{
  pickedObjects: [
    { id: 5, weight: 1, profit: 6, profitByWeight: 6 },
    { id: 1, weight: 2, profit: 10, profitByWeight: 5 },
    { id: 6, weight: 4, profit: 18, profitByWeight: 4.5 },
    { id: 3, weight: 5, profit: 15, profitByWeight: 3 },
    { id: 7, weight: 1, profit: 3, profitByWeight: 3 },
    { id: 2, weight: 2, profit: 5, profitByWeight: 1.6666666666666667 }
  ],
  totalWeight: 15,
  totalProfit: 55.333333333333336
}
*/
```

---

# Use Case 2 - Job Sequencing with Deadlines

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

```
/**
 * Job Sequencing with Deadlines
 */

const findJobSequence = arr => {
  const n = arr.reduce((acc, job) => Math.max(acc, job.deadline), 0);
  const sortedJobs = [];
  const pickedJobs = Array.from({ length: n }, (e, i) => undefined);
  let totalProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sortedJobs.length === 0) {
      sortedJobs.push(arr[i]);
    } else {
      for (let j = 0; j < sortedJobs.length; j++) {
        if (arr[i].profit > sortedJobs[j].profit) {
          sortedJobs.splice(j, 0, arr[i]);
          break;
        } else if (j < sortedJobs.length - 1) continue;
        else {
          sortedJobs.push(arr[i]);
          break;
        }
      }
    }
  }

  for (let i = 0; i < sortedJobs.length; i++) {
    const indx = sortedJobs[i].deadline - 1;
    if (pickedJobs[indx] === undefined) {
      pickedJobs[indx] = sortedJobs[i];
      totalProfit += sortedJobs[i].profit;
    } else {
      const leftArr = pickedJobs.slice(0, indx);
      for (let j = leftArr.length - 1; j >= 0; j--) {
        if (pickedJobs[j] === undefined) {
          pickedJobs[j] = sortedJobs[i];
          totalProfit += sortedJobs[i].profit;
          break;
        }
      }
    }
  }
  return { pickedJobs, totalProfit };
};

/** Tests */
console.log(findJobSequence(jobs));

/**
 * Result: 
 * -------
 * {
  pickedJobs: [
    { id: 2, profit: 15, deadline: 2 },
    { id: 1, profit: 20, deadline: 2 },
    { id: 4, profit: 5, deadline: 3 }
  ],
  totalProfit: 40
}
*/
```

---

# Use Case 3 - [Optimal Merge Pattern](https://www.youtube.com/watch?v=HHIc5JZyenI)

Merging can be done when there are two or more sorted lists.

For given two sorted lists A, B, the time complexity for merging is `O(A + B)`.

### What if we have more than 2 lists?

Let's say we have four Lists -> A, B, C, D, containing 6, 5, 2, 3 elements respectively.

Using two-way merge, merging two lists at a time :

**Method 1: Largest to Smallest**

Step 1 -> O(A + B) -> O(6 + 5) = O(11)
Step 2 -> O((A + B) + C) -> O(11 + 2) = O(13)
Step 3 -> O((A + B + C) + D ) -> O(13 + 3) = O(16)

Total Time Complexity: O(11 + 13 + 16) = O(40)

**Method 2: Divide and Conquer**

Step 1 -> O(A + B) -> O(6 + 5) = O(11)
Step 2 -> O(C + D) -> O(2 + 3) = O(5)
Step 3 -> O((A + B) + (C + D)) -> O(11 + 5) = O(16)

Total Time Complexity: O(11 + 5 + 16) = O(32)

**Method 3: Smallest List to Largest**

Step 1 -> O(D + C) -> O(2 + 3) = O(5)
Step 2 -> O((D + C) + B) -> O(5 + 5) = O(10)
Step 3 -> O((D + C + B) + A ) -> O(10 + 6) = O(16)

Total Time Complexity: O(5 + 10 + 16) = O(31)


So, we can see from this comparison that the Optimal Merge Pattern when merging using Greedy method, is to merge the smallest sized lists first. The total merge time can be reduced to the minimum possible, when following this method.

```
/**
 * Optimal Merge Pattern
 * ---------------------
 * Given n number of Lists. Merge using Greedy Method to get the quickest merge time possible.
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
```

---

# Use Case 4 - [Huffman Coding](https://www.youtube.com/watch?v=co4_ahEDCho)

Huffman coding is a compression technique that is used to reduce the size of data or a message. We can store data in a compressed form to reduce the size of a file. When data is sent over a network, data can be compressed and sent to reduce the cost of data transmission.

**Let's take an example:**

There is a 20 letter word/string, consisting of only 5 letters A, B, C, D, E that appear multiple times.
Given word: `"BCCABBDDAECCBBAEDDCC"`. The cost (size) of the message is measured in bits. All electronic devices use 8-bit ASCII code for characters or English alphabets. The message has to be sent using ASCII code.

| Alphabet | ASCII Code | Binary Form |
| -------- | ---------- | ----------- |
| A        | 65         | 01000001    |
| B        | 66         | 01000010    |
| C        | 67         | 01000011    |
| D        | 68         | 01000100    |
| E        | 69         | 01000101    |

Length of the message: 20;
Size of each alphabet in bits: 8 bits

Total size of uncompressed message: 20 x 8 = 160 bits

What will be the size of the message after: 
   - Fixed Size Encoding, 
   - Huffman Coding / Variable Size Encoding


## Fixed Size Encoding

- Create a Hash Table with the number of occurrences of each character in the given message.
- The number of keys in the Hash Table = minimum number of combinations of binary numbers required.
  - keys in Hash Table = `5` (i.e. A, B, C, D, E)
  - Number of bits needed for encoding each character = log base 2 of 8 = n, i.e. n = 3
    - Formula for Binary numbers in x bit = 2^x
    - 2^1 = 2, 2 > 5 = false,
    - 2^2 = 4, 4 > 5 = false,
    - 2^3 = 8, 8 > 5 = true.
    - Possible Binary combinations in 3 bit = 8 combinations = 000, 001, 010, 011, 100, 101, 110, 111, 
    out of which, we need only 5 combinations = 000, 001, 010, 011, 100
  -  The size of the raw encoded message = length of the message x Number of bits needed per character = 20 x 3 = **`60`** bits.
  - When we send an encoded message, the receiver has to also be provided a way to decode the message. Thus we also need to provide two more details:
    - ASCII code of the keys (characters or symbols) in Hash Table: 5 * 8 = **`40`** bits (Each ASCII code is 8 bit).
    - 3-bit code for each of the keys for reference: 5 * 3 = **`15`** bits.
  - Therefore Total Encoded Message = Size of Raw encoded Message + Size of ASCII Codes of Hash Table Keys + Size of 3-bit reference for each Key = **`60 + 40 + 15 = 115 bits`**

**Reference Table:**

| Key | Frequency | 3-bit Code | 8-bit ASCII |
| --- | --------- | ---------- | ----------- |
| A   | 3         | 000        | 01000001    |
| B   | 5         | 001        | 01000010    |
| C   | 6         | 010        | 01000011    |
| D   | 4         | 011        | 01000100    |
| E   | 2         | 100        | 01000101    |

```
/**
 * Fixed Size Encoding
 */

const fixedSizeEncoding = str => {
  const hashMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!hashMap.has(str[i])) hashMap.set(str[i], 1);
    else hashMap.set(str[i], hashMap.get(str[i]) + 1);
  }

  // Find out number of bits needed to store Fixed Encoding per character: log of n = requiredBits
  let requiredBits = 0;
  for (let j = 1; j < hashMap.size; j++) {
    if (hashMap.size > Math.pow(2, j)) requiredBits = Math.max(requiredBits, j);
    else {
      requiredBits = Math.max(j, requiredBits);
      break;
    }
  }

  const rawEncodingSize = str.length * requiredBits;
  const ASCIIKeysSize = hashMap.size * 8;
  const referenceSize = hashMap.size * requiredBits;

  return rawEncodingSize + ASCIIKeysSize + referenceSize;
};

console.log(fixedSizeEncoding('BCCABBDDAECCBBAEDDCC'));
```


## Huffman Coding / Variable Size Encoding

Huffman says that we do not have to take Fixed Size codes for every single character as some characters maybe appearing multiple times.

From the above example, we have:

| Key | Frequency | 
| --- | --------- | 
| A   | 3         | 
| B   | 5         | 
| C   | 6         | 
| D   | 4         | 
| E   | 2         |

Huffman code follows Optimal Merge Pattern.

There are two major parts in Huffman Coding: - 

1. Build a Huffman Tree from input characters.
2. Traverse the Huffman Tree and assign codes to characters.

#### Build a Huffman Tree from input Characters

**Steps:**

- The input is an array of unique characters along with their frequency of occurences. We can do this by creating a Hash Table First and then arranging the keys in the Hash Table in the ascending order, based on their count.

  ```
  const huffmanCoding = str => {
    const hashMap = new Map();
    for (let i = 0; i < str.length; i++) {
      if (!hashMap.has(str[i])) hashMap.set(str[i], 1);
      else hashMap.set(str[i], hashMap.get(str[i]) + 1);
    }
    const input = Object.entries(Object.fromEntries(hashMap));
    return input;
  }
  ```

- Create a leaf node for each unique character and build a min heap of all leaf nodes.
- The code is generated in the following way: The left nodes correspond to a single digit binary of `1` and the right nodes correspond to a single digit binary of `0`. The path from the root node to the character node is now traversed and the corresponding code is generated by concatenating the single digit binary values along the way.
- Traverse the tree and add the generated code to the Character Nodes.
- While generating the codes for each character node, also update the Hash Table values with the corresponding code for the key.
- Use this updated Hash Table to generate the encoded message.



```
/*************************************************************************************************/
// (3) Huffman Coding
/*************************************************************************************************/

/**
 * Creating a Node for the Huffman Tree
 * --------------------------------------
*/
class Node {
  constructor(data, left = null, right = null) {
    /**
     * "data" is an array containing all necessary data related to the node.
     * Index 0, i.e. the first element, is either null or contains an unique character of the message.
     *
     * Index 1, i.e. the second element, is the value of the Node.
     * For character nodes, this is number of occurences.
     * For other nodes (i.e. merge nodes), this is the merged value of occurences of it's child nodes.
     *
     * Index 2, i.e. the third element, is only present in character nodes,
     * and is the encoded value of the character
     */
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

/**
 * Huffman Coding
 * --------------
*/
const huffmanCoding = str => {
  /**
   * (1) Create a Hash Table containing the number of occurences of each unique character of the input
   *
   * (2) Once we have built the Tree,
   *  the Hash Table values will be replaced with the variable size binary codes
   */
  const hashMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!hashMap.has(str[i])) hashMap.set(str[i], 1);
    else hashMap.set(str[i], hashMap.get(str[i]) + 1);
  }

  /** Sort hashMap in ascending order based on their count */
  const sortedEntries = Object.entries(Object.fromEntries(hashMap));
  for (let i = 1; i < sortedEntries.length; i++) {
    sortedArr = sortedEntries.slice(0, i);
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedEntries[i][1] < sortedArr[j][1]) {
        const pickedEntry = sortedEntries.splice(i, 1)[0];
        sortedEntries.splice(j, 0, pickedEntry);
        break;
      }
    }
  }

  /** Create Leaf Node for each element in sortedEntries => O(n) */
  for (let k = 0; k < sortedEntries.length; k++) {
    const node = new Node(sortedEntries.splice(k, 1)[0]);
    sortedEntries.splice(k, 0, node);
  }

  /** Build Tree using Optimal Merge Pattern */
  const buildHuffmanTree = arrays => {
    if (arrays.length === 2) {
      const root = new Node([null, arrays[0].data[1] + arrays[1].data[1]]);
      root.left = arrays[0];
      root.right = arrays[1];
      return root;
    }

    const merged = buildHuffmanTree(arrays.splice(0, 2));

    if (
      arrays.length >= 2 &&
      merged.data[1] > arrays[0].data[1] &&
      merged.data[1] > arrays[1].data[1]
    ) {
      return buildHuffmanTree([
        merged,
        buildHuffmanTree(arrays.splice(0, 2)),
        ...arrays,
      ]);
    } else return buildHuffmanTree([merged, ...arrays]);
  };

  /** Traverse the Tree and add Codes to the Character Nodes */
  const addCodes = (root, code) => {
    if (root.left === null && root.right === null && root.data[0] !== null) {
      root.data.push(code);
      // Replace Hash Table values with the generated code
      hashMap.set(root.data[0], code);
    } else {
      addCodes(root.left, code + '0');
      addCodes(root.right, code + '1');
    }
    return root;
  };

  const tree = buildHuffmanTree(sortedEntries);
  addCodes(tree, '');

  /** Generate the Encoded Message */
  const generateEncodedMessage = (root, str) => {
    let encodedMsg = '';
    for (let i = 0; i < str.length; i++) {
      encodedMsg += hashMap.get(str[i]);
    }
    return encodedMsg;
  };

  const encodedMessage = generateEncodedMessage(tree, str);
  const encodedMessageBits = encodedMessage.length;
  const ASCIIKeysSize = hashMap.size * 8;
  const referenceSize = Array.from(hashMap.values()).join('').length;

  return {
    title: 'Huffman Coding / Variable Size Encoding',
    encodedMessage,
    totalBits: encodedMessageBits + ASCIIKeysSize + referenceSize,
  };
};
```

---

# Use Case 5 - [Prims and Kruskals Algorithms](https://www.youtube.com/watch?v=4ZlRH0eK-qQ)

---

# Use Case 6 - [Dijkstra Algorithm](https://www.youtube.com/watch?v=XB4MIexjvY0)