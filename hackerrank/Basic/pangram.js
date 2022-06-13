/**
 * Pangram
 * --------
 * A pangram is a string that contains every letter of the alphabet.
 * Given a sentence determine whether it is a pangram in the English alphabet.
 * Ignore case. Return either "pangram" or "not pangram" as appropriate.
 *
 * Example 1
 * ----------
 * s = "The quick brown fox jumped over the lazy dog"
 * The string contains all letters in the English alphabet, so
 *
 * return => pangram
 *
 * Example 2
 * ----------
 * s = "The quick brown fox"
 * The string doesn't contain all letters in the English alphabet, so
 *
 * return => not pangram
 *
 */

function pangrams(s) {
    const alphaArr = "abcdefghijklmnopqrstuvwxyz".split('');
    const parsedString = s.trim();

    for(let j = 0; j < alphaArr.length; j++) {
        let count = 0;
        for(let k = 0; k < parsedString.length; k++) {
            if(parsedString.charAt(k).toLowerCase() === alphaArr[j]) count++;
        }
        if(count === 0) return 'not pangram';
        else if(count > 0 && j === alphaArr.length - 1) return 'pangram';
    }

    return charCountArr;
}

console.log(pangrams("The quick brown fox jumps over the lazy dog"));