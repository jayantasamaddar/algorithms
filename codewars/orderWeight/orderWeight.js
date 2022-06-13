/* Method 1 - A much more readable version */
const orderWeight = strng => {
    const weights = strng.split(" ");
    const sorted = [...new Set(weights.map(n => [...n].reduce((acc, val) => acc + parseInt(val),0)).sort((a,b) => a-b))];

    return sorted.map(n => {
        const filtered = weights.filter(x => [...x].reduce((acc, val) => acc + parseInt(val),0) === n);
        return filtered.length > 0 ? filtered.sort().join(" ") : filtered[0];
    }).join(" ");
}

/* Method 2 - Minified Version */
const orderWeight2 = strng => {
    const weights = strng.split(" ");
    return [...new Set(weights.map(n => [...n].reduce((acc, val) => acc + parseInt(val),0)).sort((a,b) => a-b))]
    .map(n => {
        const filtered = weights.filter(x => [...x].reduce((acc, val) => acc + parseInt(val),0) === n);
        return filtered.length > 0 ? filtered.sort().join(" ") : filtered[0];
    }).join(" ");      
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
console.log(orderWeight2("56 65 74 100 99 68 86 180 90"));
// idealResult "100 180 90 56 65 74 68 86 99"

console.log(orderWeight("2000 11 11 10003 22 123 1234000 44444444 9999"));
console.log(orderWeight2("2000 11 11 10003 22 123 1234000 44444444 9999"));
// idealResult "11 11 2000 10003 22 123 1234000 44444444 9999"
