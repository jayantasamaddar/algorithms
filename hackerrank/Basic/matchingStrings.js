/**
 * There is a collection of input strings and a collection of query strings. 
 * For each query string, determine how many times it occurs in the list of input strings. 
 * Return an array of the results.
 * 
 * Example
 * --------
 * strings = ['ab', 'ab', 'abc']
 * queries = ['ab', 'abc', 'bc']
 * 
 * There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. 
 * For each query, add an element to the return array, 
 * 
 * Result
 * -------
 * [2, 1, 0]
 * 
 */

function matchingStrings(strings, queries) {
    const result = [];
    for(let i = 0; i < queries.length; i++) {
        let count = 0;
        for(let j = 0; j < strings.length; j++) {
            if(queries[i] === strings[j]) count++
        }
        result[result.length] = count;
    }
    return result;
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));