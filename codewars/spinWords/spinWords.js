const spinWords = string => string.split(" ").map(word => word.length < 5 ? word : [...word].reverse().join("")).join(" ")

console.log(spinWords("Hey fellow warriors"));
// returns "Hey wollef sroirraw"

console.log(spinWords("This is a test"));
// returns "This is a test"