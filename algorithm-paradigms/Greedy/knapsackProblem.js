/**
 * Knapsack Problem 1 - Objects are Divisible (can be fractions)
 * E.g. Fruits, vegetables, groceries that can be measured by weight in fractions
 */

function findMax(arr, max) {
  const sortedObjects = [];
  const pickedObjects = [];
  let remainingWeight = max;
  let totalProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    const profitByWeight = arr[i].profit / arr[i].weight;
    const currentObj = {
      ...arr[i],
      profitByWeight,
    };

    if (sortedObjects.length === 0) {
      sortedObjects.push(currentObj);
    } else {
      for (let j = 0; j < sortedObjects.length; j++) {
        if (profitByWeight > sortedObjects[j].profitByWeight) {
          sortedObjects.splice(j, 0, currentObj);
          break;
        } else if (j < sortedObjects.length - 1) continue;
        else {
          sortedObjects.push(currentObj);
          break;
        }
      }
    }
  }

  for (let i = 0; i < sortedObjects.length; i++) {
    if (remainingWeight === 0) break;
    const maxWeight = remainingWeight - sortedObjects[i].weight;

    const pickedWeight =
      maxWeight > 0
        ? sortedObjects[i].weight
        : sortedObjects[i].weight + maxWeight;

    remainingWeight -= pickedWeight;
    totalProfit += sortedObjects[i].profitByWeight * pickedWeight;
    pickedObjects.push({ ...sortedObjects[i], weight: pickedWeight });
  }
  return { pickedObjects, totalWeight: max - remainingWeight, totalProfit };
}

/** Test */

const objects = [
  { id: 1, weight: 2, profit: 10 },
  { id: 2, weight: 3, profit: 5 },
  { id: 3, weight: 5, profit: 15 },
  { id: 4, weight: 7, profit: 7 },
  { id: 5, weight: 1, profit: 6 },
  { id: 6, weight: 4, profit: 18 },
  { id: 7, weight: 1, profit: 3 },
];

const objects2 = [
  { id: 1, weight: 2, profit: 10 },
  { id: 2, weight: 1, profit: 5 },
  { id: 3, weight: 5, profit: 15 },
  { id: 4, weight: 0.5, profit: 7 },
  { id: 5, weight: 1, profit: 6 },
  { id: 6, weight: 4, profit: 18 },
  { id: 7, weight: 1, profit: 3 },
];

console.log(findMax(objects, 15));
console.log(findMax(objects2, 15));
