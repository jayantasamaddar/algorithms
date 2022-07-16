# What is Big O' Notation?

Big O' Notation is used to analyze the efficiency of an algorithm as its input approaches infinity - which means, as the size of the input to the algorithm grows, how drastically do the space or time requirements grow with it. 

**For example:** 
Let's say we have a dentist and she takes 30 mins to treat one patient. As her line of patients increases, the time that it takes for her to treat all the patients will scale linearly, with the number of patients waiting in line. This is because, it takes her a constant amount of time to treat each individual patient, i.e. 30 minutes. This gives us a general understanding of how long it would take our dentist in this example, to treat 10, 20 or 10,000 patients. This is because, we know that it takes the dentist a constant amount of time, i.e. 30 minutes, to treat each patient, we can always calculate how much time it would take her to treat any number of patients by simply multiplying number of patients times 30 minutes. With this in mind, we can categorize her efficiency as being **linear**. Or as we would say in Big O' terms, **`O(n)`**, where **`n`** is equal to the number of patients. The time that it takes for her to finish treating all patients scales linearly or proportionally with the number of patients.

We use this same technique to determine the efficiency of algorithms.

Function with `O(n)` complexity example:

```
function linearFunc(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(i);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
linearfunc(arr);
```

A constant is any step in the function that doesn't scale with the input to the function.

The constant bits of the function, in this example. `console.log(i)` have negligible effect on the function, i.e. even if the constant bits were different, say `console.log(1000 * 3000)`, the complexity would be unaffected. So if the length of the array, `arr` was some crazy number like 200,000, we would still need to iterate the entire array length, i.e. the scale of the algorithm still remains linear.

Similarly, if we refer to the dentist example, even if our dentist took 3 hours instead of 30 minutes to treat each patient, the time needed to treat all patients would still scale linearly, i.e. `O(n)`.

Hence, we ignore all the constants.

Just like we use Big `O(n)` to describe linear functions, we also have a Big O name for constant algorithms, which is Big `O(1)`. 


# Orders of Growth

An algorithm is categorized from best to worst in the following order:

| Notation      | Description   |
| --------      | -----------   |
| O(1)          | Constant      |
| O(log n)      | Logarithmic   |
| O(n)          | Linear        |
| O(n log n)    | Linearithmic  |
| O(n^2)        | Quadratic     |
| O(n^3)        | Cubic         |
| O(2^n)        | Exponential   |
| O(n!)         | Factorial     |

In Big O Notation, when determining the efficiency of an algorithm, we only care about the worst case.

```
function linearFunc(arr) {
    for(let i = 0; i < arr.length; i++) { // O(n)
        console.log(1000 * 100000); // O(1)
        let something = (2000000000 * 200000000); // O(1)
        console.log(something) // O(1)
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
linearfunc(arr);
```

So that means that the worst case, where the highest order operation trumps the operations that have better performance.
So if we add the performance of all the lines of the function like so,
`O(n) + O(1) + O(1) + O(1) = O(n)`, because all the `O(1)` get cancelled out as `O(n)` is the worst performing or highest order part of the function. And this, is why we ignore constants which are `O(1)`.

So to recap, how we calculate the efficiency of an algorithm:

1. Take into consideration the efficiency of each step within the algorithm.
2. Find the highest order step or the step that has the worst performance and prioritize it over the other steps.
3. The highest order step is what the Big O Notation of the function is.

---

## O(n^2)

To understand the `O(n^2)`, we're going to take a function into consideration that has a nested loop.

```
const bubbleSort = array => {
  const arr = array.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
```

---

## O(n^3)

To understand the `O(n^3)`, let's take a function that creates a cube into consideration. This function has a nested loop, nested inside the first loop.

```
const cube = n => {
    const cubes = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                cubes.push([i, j, k]);
            }
        }
    }
    return cubes;
}
```

---

## O(log n)

To understand `O(log n)` we need to first understand what a logarithm is.

### What is a Logarithm

A quantity representing the power to which a fixed number (the base) must be raised to produce a given number. In computer science if the base is not specified, it is always 2.

E.g. Log base 2 of 8 = 3

To demonstrate O(log n), we will be using a barebones recursive function:

```
/** O(log n) - Recursive */

const logFunc = n => {
  if (n <= 1) return 'Done';
  n = Math.floor(n / 2);
  console.log(n);
  return logFunc(n);
};

/** O(log n) - Iterative / Non-Recursive */
const logn = n => {
  while (n > 1) {
    n = Math.floor(n / 2);
    console.log(n);
    if (n <= 1) return 'Done';
  }
};
```

### Binary Search and O(log n)

In order for Binary Search to work, the array that you are searching must be an ordered array - either ascending or descending arrays will work.

Given Array: [ 1, 2, 7, 12, 43, 44, 54, 100, 124 ]
Check if the number: 100, exists in the array.

The naive solution is to iterate through each element in the array until we find the element that we are looking for. What if we have to do this for an array containing thousands or millions of items?

This is where something like Binary Search can be useful.

**Steps to search in an array ordered in the ascending order:**

- Find the mid-point of the array. (i.e. `const mid = Math.floor(array.length / 2)`)
- The right side of the mid-point contains elements greater than the mid point, and the left side of the mid-point contains elements lesser than the mid point. We can store them in two variables: `leftArr` and `rightArr`. This is why Binary Search will only work on sorted arrays, otherwise this categorization is not possible.
- We run a conditional to check if the number we are searching for is greater than the mid point, if it is greater, then we will recursively run the Binary Search function again passing the `rightArr` as the new array OR else, run the Binary Search function again passing the `leftArr` as the new array.
- If the mid equals to the `n` then we have found the number and return true, else we return false.

**Solution:**
```
/** O(log n) - Use Binary Search to find, if number exists in array. */
const binarySearch = (arr, n) => {
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid + 1);

  if (arr[mid] === n) return true;
  else if (n > arr[mid]) {
    return binarySearch(rightArr, n);
  } else if (n < arr[mid]) {
    return binarySearch(leftArr, n);
  } else return false;
};
```

---

## O(n log n)

To understand `O(n log n)` we will take this function into consideration.

```
/** O(n log n) */
const nLogNFunc = n => {
  const y = n;
  const arr = [];
  while (n > 1) {
    for (let i = 1; i <= y; i++) {
      arr.push(i);
    }
    n = Math.floor(n / 2);
  }
  return arr;
};
```

**Explanation:**
- The while loop is iterating at `O(log n)` as `n` gets divided by 2 every iteration.
- The for loop is iterating at `O(n)` like any standard for-loop.
- The for loop however is iterating for every `O(log n)` therefore, the complexity of the algorithm can be written as `O(n * log n) => O(n log n)`.


### Merge Sort and `O(n log n)`

```
/** O(n log n) - Merge Sort (ascending order) */
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const mergedArr = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) mergedArr.push(arr1[i++]);
    else mergedArr.push(arr2[j++]);
  }

  return mergedArr.concat(arr1.slice(i), arr2.slice(j));
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, midIndex);
  const arr2 = arr.slice(midIndex);

  return merge(mergeSort(arr1), mergeSort(arr2));
};
```

**Explanation:**
- We are dividing the array recursively by 2, which makes the recursive part of the function `O(log n)`, i.e. there are `log n` levels. In other words if array length is 4, then log base 2 of 4 = 2 levels.
- The merge function is `O(n)` because it needs to traverse through every element of the array.
- The resulting complexity for the entire mergeSort function, thus, is: `O(n * log n) => O(n log n)`.

---

## O(2^n)

### Recursive Implementation of Fibonacci and O(2^n)

To understand `O(2^n)` we will take this recursive implementation of Fibonacci into consideration.

```
const fibonacci = n => {
    if(n === 0) return 0;
    else if(n === 1) return 1;

    else return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**Explanation:**
- Let's assume we are passing the number `4` as the function argument, i.e. `fibonacci(4)`
- We add the exit conditions, `if(n === 0) return 0` AND `if(n === 1) return 1`
- If the exit conditions do not match we recursively call the function twice for each level.
- In the diagram below, we can see how for the function argument of `4` we actually have 3 levels. So technically this function has a complexity of `O(2^(n - 1))`. However we ignore constants, therefore the complexity of the function can be defined as `O(2^n)`.

> Note: For this particular function, the right side of the tree will be shorter than the left side of the tree because we are returning `fibonacci(n - 1)` for the left side and `fibonacci(n - 2)` for the right side. However, in Big O, we are doing an estimation for the worst case scenario and do not need to worry about this, as we are looking for an upper bound.

![O(2^n) Complexity](images/O(2^n).png)

---

## O(n!)

Let's take a function into consideration:

```
/** O(n!) */

const f = n => {
  if (n === 0) {
    console.log('*********');
    return;
  }
  for (let i = 0; i < n; i++) {
    f(n - 1);
  }
};
```

**Explanation:**

- For n = 3, the main operation of the function, i.e. `console.log('*********')` will be recursively called 3 * 2 * 1 time = 6 times = Factorial of 3 OR 3!. Hence Time complexity will be `O(n!)`.

![0(n!) Complexity](images/O(n!).png)

---

## Space Complexity

The term Space Complexity is misused for Auxiliary Space at many places. Following are the correct definitions of Auxiliary Space and Space Complexity. 

**Auxiliary Space** is the extra space or temporary space used by an algorithm. 

**Space Complexity** of an algorithm is the total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input.

To understand Space Complexity, let's take a recursive function into consideration:

```
const countdown = n => {
    if(n === 0) return;

    return countdown(n - 1);
}
```

**Explanation:**

- The function will recursively call itself until `n === 0`. 
- So if we pass `n = 5` as `countdown(5)`, there will be 5 function calls added to the call stack.
  1.  countdown(5)
  2.    -> countdown(4)
  3.      -> countdown(3)
  4.        -> countdown(2)
  5.          -> countdown(1) 
   
- All of these calls exist simultaneously on the call stack and each one takes up memory as shown in the diagram below. Thus the space complexity of the function is `O(n)`.

![Space Complexity of O(n)](images/SpaceComplexity-O(n).png)

---

# References

- [Big O Notation - Course - Freecodecamp](https://www.youtube.com/watch?v=Mo4vesaut8g)