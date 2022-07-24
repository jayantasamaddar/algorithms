/*************************************************************************************************/
// (1) Unencoded Message
/*************************************************************************************************/

/**
 * Unencoded Message
 * -----------------
 * This is how message is sent via network or saved in bits to a file.
 *
 * [Note: ASCII Codes are 8-bit Binary]
 */
const unencodedMessage = str => {
  const generate = str => {
    let encodedMsg = '';
    for (let i = 0; i < str.length; i++) {
      const bin = str[i].charCodeAt().toString(2);
      const difference = 8 - bin.length;
      const binaryBits = difference > 0 ? bin.padStart(8, 0) : bin;
      encodedMsg += binaryBits;
    }
    return encodedMsg;
  };

  const encodedMessage = generate(str);

  return {
    title: 'Unencoded Message',
    encodedMessage,
    totalBits: encodedMessage.length,
  };
};

/*************************************************************************************************/
// (2) Fixed Size Encoding
/*************************************************************************************************/

/**
 * Fixed Size Encoding
 * -------------------
 */
const fixedSizeEncoding = str => {
  const hashMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!hashMap.has(str[i])) hashMap.set(str[i], 1);
    else hashMap.set(str[i], hashMap.get(str[i]) + 1);
  }

  let requiredBits = 0;
  for (let j = 1; j < hashMap.size; j++) {
    if (hashMap.size > Math.pow(2, j)) requiredBits = Math.max(requiredBits, j);
    else {
      requiredBits = Math.max(j, requiredBits);
      break;
    }
  }

  // Generate fixed size binary codes for each key in the hashMap
  const generateBits = (limit, max) => {
    const hashKeys = Array.from(hashMap.keys()).sort();
    const binaryMap = new Map();
    for (let i = 0; i < max; i++) {
      const difference = limit - i.toString(2).length;
      const binaryNum =
        difference > 0 ? i.toString(2).padStart(limit, 0) : i.toString(2);
      binaryMap.set(hashKeys[i], binaryNum);
    }
    return binaryMap;
  };

  // Generate the Encoded Message
  const generateEncodedMessage = str => {
    const binaryMap = generateBits(requiredBits, hashMap.size);
    let encodedMsg = '';
    for (let i = 0; i < str.length; i++) {
      encodedMsg += binaryMap.get(str[i]);
    }
    return encodedMsg;
  };

  const encodedMessage = generateEncodedMessage(str);
  const rawEncodingSize = str.length * requiredBits;
  const ASCIIKeysSize = hashMap.size * 8;
  const referenceSize = hashMap.size * requiredBits;

  return {
    title: 'Fixed Size Encoding',
    encodedMessage,
    totalBits: rawEncodingSize + ASCIIKeysSize + referenceSize,
  };
};

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

/*************************************************************************************************/
// Tests
/*************************************************************************************************/

console.log(unencodedMessage('BCCABBDDAECCBBAEDDCC'));
console.log(fixedSizeEncoding('BCCABBDDAECCBBAEDDCC'));
console.log(huffmanCoding('BCCABBDDAECCBBAEDDCC'));
