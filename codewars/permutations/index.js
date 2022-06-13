/**
 * With input 'a'
 * Your function should return: ['a']
 * With input 'ab'
 * Your function should return ['ab', 'ba']
 * With input 'aabb'
 * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 * Remove the duplicates.
 */

const permutations = str => {
  console.time('permutations');
  const arr = str.split('');

    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const permutations = [];

    for(let i = 0; i < arr.length; i++) {
      if(arr.length === 1) return arr;
      else if(arr.length === 2) {
        permutations[0] = arr.join('');
        swap(arr, 0, 1)
        permutations[1] = arr.join('');
        return Array.from(new Set(permutations));
      }
        const recurse = (arr, indx) => {
          if(indx === 0) return;
          for(let j = 1; j < arr.length - 1; j++) {
            swap(arr, j, j+1);
            permutations[permutations.length] = arr.slice().join('');
          }
          indx --;
          return recurse(arr.slice(), indx);
        }
        recurse(arr, arr.length - 1);
        
        swap(arr, 0, 1);
    }

    const uniquePermutations = Array.from(new Set(permutations));

    console.timeEnd('permutations');

    return uniquePermutations;
}


/** Codewars code */
function permutations2(str) {
  console.time('permutations2');
  const uniquePermutations = (str.length <= 1) ? [str] :
          Array.from(new Set(
            str.split('')
               .map((char, i) => permutations2(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
               .reduce((r, x) => r.concat(x), [])
          ));
  console.timeEnd('permutations2');

  return uniquePermutations;
}

function permutations3(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations3(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}


console.log(permutations('abcd'));
// console.log(permutations2('abcd'));
// console.log(permutations3('abcd'));