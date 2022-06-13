/* Method 1 - One line solution */
const anagrams = (word, words) => words.filter((w,ind) => [...w].sort().join("") === [...word].sort().join(""));

/* Method 2 - Better performance, "word" doesn't need sorting more than once */
const anagrams2 = (word, words) => {
    const sortedWord = [...word].sort().join("");
    return words.filter((w,ind) => [...w].sort().join("") === sortedWord);
}

/* Testing */
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer','racer']

console.log(anagrams2('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(anagrams2('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer','racer']