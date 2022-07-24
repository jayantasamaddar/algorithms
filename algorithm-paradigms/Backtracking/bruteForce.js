/**
 * Brute Force Method
 * ------------------
 * Generate all permutations of [B1, B2, G1] such that G1 is never in the middle.
 */

class Node {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

/**
 * All permutations
 * ----------------
 */
const permutations = array => {
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

  /** Bounding Function */
  const isSafe = combo => {
    if (combo[1] === 'G1') return false;
    else return true;
  };

  /** Print all the possible permutations */
  const print = (root, combo = [], permutations = []) => {
    const children = root.children;

    /** Check constraints */
    if (!isSafe(combo)) return;

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
console.log(permutations(['B1', 'B2', 'G1']));

/** Result */
/*
[
  [ 'B1', 'B2', 'G1' ],
  [ 'B2', 'B1', 'G1' ],
  [ 'G1', 'B1', 'B2' ],
  [ 'G1', 'B2', 'B1' ]
]
*/
