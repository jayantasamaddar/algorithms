/** O(n^2) */
const square = n => {
  const squares = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      squares.push([i, j]);
    }
  }
  return squares;
};

console.log(square(4));
console.log(square(4).length); // 16 => 4^2 => O(n^2)

/** O(n^3) */
const cube = n => {
  const cubes = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        cubes.push([i, j, k]);
      }
    }
  }
  return cubes;
};

console.log(cube(4));
console.log(cube(4).length); // 64 => 4^3 => O(n^3)

/** O(log n) - Recursive */

const logFunc = n => {
  if (n <= 1) return 'Done';
  n = Math.floor(n / 2);
  console.log(n);
  return logFunc(n);
};

console.log(logFunc(8)); // Log base 2 of 4 x 2 x 1 = 3 => Log base 2 of 8 = 3 (3 levels deep)

/** O(log n) - Iterative / Non-Recursive */
const logn = n => {
  while (n > 1) {
    n = Math.floor(n / 2);
    console.log(n);
    if (n <= 1) return 'Done';
  }
};

console.log(logn(8)); // Log base 2 of 4 x 2 x 1 = 3 => Log base 2 of 8 = 3 (3 levels deep)

/** O(log n) - Use Binary Search to find, if number exists in array. */
const binarySearch = (arr, n) => {
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === n) return true;
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid + 1);

  if (n > arr[mid]) {
    return binarySearch(rightArr, n);
  } else if (n < arr[mid]) {
    return binarySearch(leftArr, n);
  } else return false;
};

console.log(binarySearch([1, 2, 7, 12, 43, 44, 54, 100, 124], 100)); // true

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

console.log(nLogNFunc(4));

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

console.log(mergeSort([35, 44, 59, 99, 101, 7, 62, 79, 99, 142]));

/** O(2^n) - Recursive implementation of Fibonacci */

const fibonacci = n => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(4));

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

console.log(f(3));
