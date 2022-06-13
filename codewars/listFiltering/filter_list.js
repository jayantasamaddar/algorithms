/* Method 1 - Single Line Arrow Function with Array Filter method - PREFERRED */
const filter_list = l => l.filter(n => typeof n === "number");


/* Method 2 - Using function expression with Array Filter method */
function filter_list2(l) {
    return l.filter(function (n) {
        return typeof n === "number"
    });
}

/* Method 3 - Using for-of loop */
const filter_list3 = l => {
    const arr = [];
    for(const n of l) if(typeof n === "number") arr.push(n)
    return arr;
}

/* Method 4 - Using C-style for loop */
const filter_list4 = l => {
    const arr = [];
    for(let i = 0; i < l.length; i++) typeof l[i] === "number" && arr.push(l[i]);
    return arr;
}

/* Method 5 - Using for-each loop */
const filter_list5 = l => {
    const arr = [];
    l.forEach(n => typeof n === "number" && arr.push(n));
    return arr;
}

/* Method 6 - Using while Loop */
const filter_list6 = l => {
    let i = 0;
    const arr = [];
    while(i < l.length) {
        typeof l[i] === "number" && arr.push(l[i]);
        i++;
    }
    return arr;
}

console.log(filter_list([1,2,'aasf','1','123',123]),[1,2,123]);
console.log(filter_list2([1,2,'aasf','1','123',123]),[1,2,123]);
console.log(filter_list3([1,2,'aasf','1','123',123]),[1,2,123]);
console.log(filter_list4([1,2,'aasf','1','123',123]),[1,2,123]);
console.log(filter_list5([1,2,'aasf','1','123',123]),[1,2,123]);
console.log(filter_list6([1,2,'aasf','1','123',123]),[1,2,123]);
