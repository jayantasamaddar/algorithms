/** Greedy Algorithm Paradigm */

function greedy(arr) {
  const solution = [];
  for (let i = 0; i < arr.length; i++) {
    const x = select(arr);
    if (isFeasible(x)) solution.push(x);
  }
  return solution;
}
