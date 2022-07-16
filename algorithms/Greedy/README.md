# Greedy Algorithms and their Use Cases

Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.
It doesn't worry whether the current best result will bring the overall optimal result. The algorithm never reverses the earlier decision even if the choice is wrong.

So the problems where choosing locally optimal also leads to global solution are the best fit for Greedy, i.e. optimization problems.

Let's break down the terms even further.

---

# What is an optimization problem?

A problem which demands either the minimum result or maximum result as an optimal solution is an Optimization problem.

**Example:**

I want to travel from Location A to Location B.

**Constraint:** Journey must be completed within 12 hours.

Multiple possible solutions exist for this problem.

Solution 1: By walking.
Solution 2: By car.
Solution 3: By bike.
Solution 4: By train.
Solution 5: By flight.

In this case, let's say, the solutions satisfying the conditions, i.e. the **Feasible Solutions** are, Solution 4 and 5, i.e. either by train or by flight.

Now let's impose more constraints:

**New Constraints:** The journey must be completed in minimum cost.

Now, this becomes a **minimization problem**. The resulting solution among all possible solutions with the new minimization problem in the picture is now called the **optimal solution**. For any given problem, there can be only one optimal solution.

### How to solve optimization problems

The strategies or algorithmic paradigms used to solve optimization problems are:

1. Greedy Method
2. Dynamic Programming
3. Branch and Bound

Some problems may be solved by either of the strategies, but in some cases, only one or a few strategies will work.

---

# Use Case - Knapsack Problem (One-dimensional)

**Problem:** There is some `objects`. Each object has a `weight` (in kg) and has makes a certain `profit`. There is a bag or a knapsack that can hold a maximum of `15` kg. Among all the objects available (whose total weight exceeds the knapsack capacity), fill the backpack with objects such that the profit is maximized? Find out the objects that fit the knapsack to generate the maximum profit possible and also the maximum possible profit.

**Given array of objects below, calculate the total profit and the total weight while trying to fill a knapsack that can hold weight <= 15 :**

```
const objects = [
  { id: 1, weight: 2, profit: 10 },
  { id: 2, weight: 3, profit: 5 },
  { id: 3, weight: 5, profit: 15 },
  { id: 4, weight: 7, profit: 7 },
  { id: 5, weight: 1, profit: 6 },
  { id: 6, weight: 4, profit: 18 },
  { id: 7, weight: 1, profit: 3 },
];
```

```
/** Knapsack Problem - Objects are Divisible (can be fractions)
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

console.log(findMax(objects, 15));
/* 
{
  pickedObjects: [
    { id: 5, weight: 1, profit: 6, profitByWeight: 6 },
    { id: 1, weight: 2, profit: 10, profitByWeight: 5 },
    { id: 6, weight: 4, profit: 18, profitByWeight: 4.5 },
    { id: 3, weight: 5, profit: 15, profitByWeight: 3 },
    { id: 7, weight: 1, profit: 3, profitByWeight: 3 },
    { id: 2, weight: 2, profit: 5, profitByWeight: 1.6666666666666667 }
  ],
  totalWeight: 15,
  totalProfit: 55.333333333333336
}
*/
```

---
