/** Hash Table */

const hash = (string, max) => {
  let key = 0;
  for (let i = 0; i < string.length; i++) {
    key += string.charCodeAt(i);
  }
  return key % max;
};

const HashTable = function () {
  const storage = [];

  const storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  /** Add Element to Hash Table */
  this.add = function (key, value) {
    var index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] === value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  /** Remove Element from Hash Table */
  this.remove = function (key) {
    var index = hash(key, storageLimit);

    if (storage[index].length && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  /** Lookup Element in Hash Table */
  this.lookup = function (key) {
    var index = hash(key, storageLimit);

    if (storage[index] === undefined) return;
    else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash('Jayanta', 10));

const ht = new HashTable();
ht.add('beau', 'person');
