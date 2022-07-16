/** Trie Data Structure */

const Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

const Trie = function () {
  this.root = new Node();

  /** Add a word to the Trie */
  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.slice(1), node.keys.get(input[0]));
    } else {
      return this.add(input.slice(1), node.keys.get(input[0]));
    }
  };

  /** Finds a word is present in the Trie. Returns boolean. */
  this.find = function (input) {
    let node = this.root;
    while (input.length > 1) {
      if (!node.keys.has(input[0])) {
        return false;
      } else {
        node = node.keys.get(input[0]);
        input = input.slice(1);
      }
    }
    return node.keys.has(input) && node.keys.get(input).isEnd() ? true : false;
  };

  /** Print all the words in the Trie */
  this.print = function () {
    const words = [];
    const search = function (node, string) {
      if (node.keys.size !== 0) {
        for (const letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, '');
    return words.length > 0 ? words : null;
  };
};

/** Tests */

const myTrie = new Trie();
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.find('doll')); // true
console.log(myTrie.find('dor')); // false
console.log(myTrie.find('dorf')); // false
console.log(myTrie.print()); // [ 'ball', 'bat', 'doll', 'dork', 'dorm', 'do', 'send', 'sense' ]
