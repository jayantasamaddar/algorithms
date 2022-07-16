/** Heap */
// Left Child: i * 2
// Right Child: i * 2 + 1
// Parent = i / 2

const minHeap = function () {
  const heap = [null];

  /** Prints the Heap Array */
  this.print = () => heap;

  /** Insert an element into the heap */
  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let indx = heap.length - 1;
      while (heap[indx] < heap[Math.floor(indx / 2)]) {
        if (indx >= 1) {
          // Swap
          [heap[Math.floor(indx / 2)], heap[indx]] = [
            heap[indx],
            heap[Math.floor(indx / 2)],
          ];
          if (Math.floor(indx / 2) > 1) {
            // if Parent Node is greater than Root Node
            indx = Math.floor(indx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  /** Remove the smallest element from the heap */
  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);

      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          // swap
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }

      // When heap.length >= 4
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };

  /** Heap Sort - Ascending Order */
  this.sort = function () {
    const sortedArray = [];
    while (heap.length > 1) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  };
};

/** Max Heap */
const MaxHeap = function () {
  const heap = [null];

  /** Prints the Heap Array */
  this.print = () => heap;

  /** Insert an element into the heap */
  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  /** Removes the smallest element from the heap */
  this.remove = function () {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
};
