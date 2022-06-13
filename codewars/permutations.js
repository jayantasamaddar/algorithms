/**
 * 
 * Permutations
 * 
 */

const permutations = arr => {
    console.time('permutations');
  
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const permutations = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr.length === 1) return arr;
        else if(arr.length === 2) {
            permutations[0] = arr;
            swap(arr, 0, 1)
            permutations[1] = arr;
            return Array.from(new Set(permutations));
        }
        const recurse = (arr, indx) => {
        if(indx === 0) return;
        for(let j = 1; j < arr.length - 1; j++) {
            swap(arr, j, j+1);
            permutations[permutations.length] = arr.slice();
        }
        return recurse(arr.slice(), indx - 1);
        }
        recurse(arr, arr.length - 1);
        
        swap(arr, 0, 1);
    }
  
    // const uniquePermutations = Array.from(new Set(permutations));
  
    console.timeEnd('permutations');

    console.log(permutations.length)
    return permutations;
}

console.log(permutations([2, 1, 3]));