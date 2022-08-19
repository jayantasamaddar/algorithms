class XArray {
  constructor(...elements) {
    Object.defineProperties(this, {
      length: {
        writable: true,
        enumerable: false,
        configurable: false,
        value: 0,
      },
    });

    for (const element of elements) {
      this[this.length] = element;
      this.length++;
    }

    /** Configure the output of the Array object to return only values */
    const runtimeConsole = console;
    console = {
      ...console,
      log: function (data) {
        if (XArray.isArray(data)) {
          runtimeConsole.log(Object.values(data));
        } else runtimeConsole.log(data);
      },
    };
  }

  /**
   * Adds element(s) to the end of the array.
   *
   * Time Complexity: O(n)
   * @param  {...any} elements
   */
  push(...elements) {
    for (const element of elements) {
      this[this.length] = XArray.isArray(element)
        ? Object.values(element)
        : element;
      this.length++;
    }
    return this.length;
  }

  /**
   * Removes the last element of the array and returns it.
   *
   * Time Complexity: O(1)
   * @returns `any`
   */
  pop() {
    const element = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return element;
  }

  /**
   * Adds elements to the beginning of the array.
   *
   * Time Complexity: O(m + n)
   *
   * @param  {...any} elements
   */
  unshift(...elements) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + elements.length] = this[i];
    }
    for (const index in elements) {
      this[index] = elements[index];
      this.length++;
    }
    this.length;
  }

  /**
   * Removes the first element of the array and returns it.
   *
   * Time Complexity: O(n)
   * @returns `any`
   */
  shift() {
    const element = this[0];
    this.length--;

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length];
    return element;
  }

  /**
   * Creates a new array with all sub-array elements concatenated into it recursively up to the
   * specified depth
   * @param {number} depth
   */
  //   flat(depth = 1) {
  //     const xArr = new XArray();
  //     const flatten = function (this, depth, i = 0) {
  //         if(i === this.length - 1) return xArr;

  //         for(let j = depth; j < )
  //         if(XArray.isArray(this[i])) {
  //             flatten(this[i], depth, )
  //         }
  //     }
  //     return flatten(this, depth)
  //   }

  /**
   * The join() method creates and returns a new string by concatenating all of the elements in an array
   * (or an array-like object), separated by commas or a specified separator string.
   * If the array has only one item, then that item will be returned without using the separator.
   *
   * Time Complexity: O(n)
   * @param {string} separator
   * @returns `string`
   */
  join(separator = ',') {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += separator + this[i] ?? '';
    }
    return s.replace(separator, '');
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += this[i];
    }
    return s.toString();
  }

  /**
   * Concatenates multiple arrays to the first array and returns it.
   *
   * Time Complexity: O(m * n)
   * @param  {...any} arrays
   * @returns xArray
   */
  concat(...arrays) {
    for (const array of arrays) {
      if (!XArray.isArray(array)) {
        throw new Error('forEach.forEach(cb), expects elements of type XArray');
      }
      for (let i = 0; i < array.length; i++) {
        this.push(array[i]);
      }
    }
    return this;
  }

  /**
   * Traverse the array from start to end
   * @param {void} cb
   */
  forEach(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    let i = 0;
    while (i < this.length) {
      cb(this[i], i);
      i++;
    }
  }

  /**
   * Returns a new array populated with the results of the callback function on every element.
   *
   * Time Complexity: O(n)
   * @param {any} cb
   * @returns `XArray`
   */
  map(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    const xArr = new XArray();
    for (let i = 0; i < this.length; i++) {
      xArr.push(cb(this[i], i));
    }
    return xArr;
  }

  /**
   * Returns a new array with the filtered values
   *
   * Time Complexity: O(n)
   * @param {function} cb
   * @returns
   */
  filter(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    const xArr = new XArray();
    this.forEach((element, index) => {
      if (!cb(element, index)) return;
      newXArray.push(element);
    });
    return xArr;
  }

  /**
   * Returns whether at least one element in the array pass the test implemented by the callback
   * function.
   *
   * Time Complexity: O(n)
   * @param {boolean} cb
   * @returns `boolean`
   */
  some(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) return true;
    }
    return false;
  }

  /**
   * Returns whether all elements in the array pass the test implemented by the callback function.
   *
   * Time Complexity: O(n)
   * @param {boolean} cb
   * @returns `boolean`
   */
  every(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    for (let i = 0; i < this.length; i++) {
      if (!cb(this[i], i)) return false;
    }
    return true;
  }

  /**
   * Returns the first element that satisfies the testing function.
   * If no values are found that satisfy the testing function, `undefined` is returned.
   * @param {boolean} cb
   * @returns `any`
   */
  find(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) return this[i];
    }
  }

  /**
   * Returns the index of the first element of the array that satisfies the testing function.
   * If no values are found that satisfy the testing function, `-1` is returned.
   * @param {boolean} cb
   * @returns `number`
   */
  findIndex(cb) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) return i;
    }
    return -1;
  }

  /**
   * Executes a user-supplied "reducer" callback function on each element of the array, in order,
   * passing in the return value from the calculation on the preceding element.
   * The final result of running the reducer across all elements of the array is a single value.
   *
   * The first time that the callback is run there is no "return value of the previous calculation".
   * If supplied, an initial value may be used in its place.
   * Otherwise the array element at index 0 is used as the initial value and iteration starts from
   * the next element (index 1 instead of index 0).
   *
   * Time Complexity: O(n)
   * @param {any} cb
   * @param {any} initialValue
   * @returns `any`
   */
  reduce(cb, initialValue) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    const noInitialValue =
      initialValue === null ||
      initialValue === undefined ||
      initialValue === NaN;

    let accumulator;
    let i = 0;

    if (
      initialValue === null ||
      initialValue === undefined ||
      initialValue === NaN
    ) {
      if (this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = this[0];
      i++;
    } else {
      accumulator = initialValue;
    }

    while (i < this.length) {
      accumulator = cb(accumulator, this[i], i, this);
      i++;
    }
    return accumulator;
  }

  /**
   * Executes a user-supplied "reducer" callback function on each element of the array, in reverse,
   * order, passing in the return value from the calculation on the preceding element.
   * The final result of running the reducer across all elements of the array is a single value.
   *
   * The first time that the callback is run there is no "return value of the previous calculation".
   * If supplied, an initial value may be used in its place.
   * Otherwise the array element at last index is used as the initial value and iteration starts from
   * the second-last element.
   *
   * Time Complexity: O(n)
   * @param {any} cb
   * @param {any} initialValue
   * @returns `any`
   */
  reduceRight(cb, initialValue) {
    if (typeof cb !== 'function') {
      throw new TypeError(`${cb} is not a function`);
    }
    const noInitialValue =
      initialValue === null ||
      initialValue === undefined ||
      initialValue === NaN;

    let accumulator;
    let i = this.length - 1;

    if (
      initialValue === null ||
      initialValue === undefined ||
      initialValue === NaN
    ) {
      if (this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = this[this.length - 1];
      i--;
    } else {
      accumulator = initialValue;
    }

    while (i >= 0) {
      accumulator = cb(accumulator, this[i], i, this);
      i--;
    }
    return accumulator;
  }

  /**
   * Returns whether input is an instance of the XArray constructor.
   */
  static isArray(array) {
    return array instanceof XArray;
  }

  //   static [Symbol.iterator]() {
  //     let i = 0;
  //     let done = false;
  //     return {
  //       next() {
  //         if (done === this.length - 1) done = true;
  //         return { value: this[i++], done };
  //       },
  //     };
  //   }
}

export default XArray;

/*
[
  'constructor',       'copyWithin',
  'fill',
  'lastIndexOf',    
  'reverse',         
  'slice',          'sort',     'splice',
  'includes',       'indexOf',  'join',
  'keys',           'entries',  'values',
     'flat',
  'flatMap',         
  'toLocaleString', 'toString', 'at'
]
*/
