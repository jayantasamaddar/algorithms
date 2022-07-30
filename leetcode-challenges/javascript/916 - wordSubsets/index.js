/**
 * Method 1 - Create two hash tables and compare - Too Slow (not complete)
 * --------------------------------------------------------
 * @param {*} words1
 * @param {*} words2
 * @returns
 */

var wordSubsets = function (words1, words2) {
  const result = [];
  /** Create Hash Table */
  const wordsHash = {};
  for (let i = 0; i < words1.length; i++) {
    const word = words1[i];
    for (let j = 0; j < word.length; j++) {
      // if word exists in Hash Table
      if (wordsHash[word]) {
        // if character in the word exists in Hash Table
        if (wordsHash[word][word[j]]) {
          wordsHash[word][word[j]] += 1;
        } else wordsHash[word][word[j]] = 1;
      } else {
        wordsHash[word] = {
          [word[j]]: 1,
        };
      }
    }
  }

  for (let i = 0; i < words1.length; i++) {
    let isValid = true;
    const hash = wordsHash[words1[i]];
    for (let k = 0; k < words2.length; k++) {
      const searchWordHash = new Map();
      const searchWord = words2[k];
      for (let l = 0; l < searchWord.length; l++) {
        if (searchWordHash.has(searchWord[l])) {
          searchWordHash.set(
            searchWord[l],
            searchWordHash.get(searchWord[l]) + 1
          );
        } else searchWordHash.set(searchWord[l], 1);
      }
      for (const [key, val] of searchWordHash) {
        if (hash[key] === undefined || hash[key] < val) {
          isValid = false;
          break;
        }
        // console.log({ [words1[i]]: hash, key, hashVal: hash[key], val });
      }
    }
    if (isValid) result.push(words1[i]);
  }
  return result;
};

/** Testing */

console.log(
  wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])
); // [ 'facebook', 'google', 'leetcode' ]

console.log(
  wordSubsets(
    ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    ['lo', 'eo']
  ) // [ 'google', 'leetcode' ]
);

console.log(
  wordSubsets(
    ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
    ['e', 'oo']
  )
); // [ 'facebook', 'google' ]

console.log(
  wordSubsets(
    [
      'bcedecccdb',
      'daeeddecbc',
      'ecceededdc',
      'edadadccea',
      'ebacdedcea',
      'eddabdacec',
      'cddbecbeca',
      'eeababedcc',
      'bcaddcdbad',
      'aeeeeabeea',
    ],
    ['cb', 'aae', 'ccc', 'ab', 'adc']
  ) // []
);

/**
 * {
  amazon: { a: 2, m: 1, z: 1, o: 1, n: 1 },
  apple: { a: 1, p: 2, l: 1, e: 1 },
  facebook: { f: 1, a: 1, c: 1, e: 1, b: 1, o: 2, k: 1 },
  google: { g: 2, o: 2, l: 1, e: 1 },
  leetcode: { l: 1, e: 3, t: 1, c: 1, o: 1, d: 1 }
}
 */
