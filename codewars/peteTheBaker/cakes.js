/* Method 1 */

const cakes = (recipe, available) => {
    const quantity = {};
    for(key of Object.keys(recipe)) {
        quantity[key] = !!available[key] ? Math.floor(available[key]/recipe[key]) : 0;
    }
    return Object.values(quantity).sort((a,b) => a-b)[0]
}

/* Method 2 - Using the || Operator */

const cakes2 = (recipe, available) => {
    const quantity = {};
    for(key of Object.keys(recipe)) {
        quantity[key] = Math.floor(available[key]/recipe[key]) || 0;
    }
    return Object.values(quantity).sort((a,b) => a-b)[0]
}

/* Method 3 - Use Reduce array method */

const cakes3 = (recipe, available) => Object.keys(recipe).reduce((qty, key) => {
    return Math.min(Math.floor(available[key]/recipe[key] || 0),qty)
},Infinity)

/* Testing */

// must return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes2({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes3({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
console.log(cakes2({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
console.log(cakes3({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));