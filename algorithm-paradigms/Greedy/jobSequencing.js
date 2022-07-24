/**
 * Job Sequencing with Deadlines
 * -----------------------------
 * (i) Sort the Jobs in the order of the highest profit to lowest.
 * (ii) Place the jobs from the start of the list in the position of the deadline.
 * i.e. job with { deadline: 4 }, is placed on the 4th slot, i.e. index 3.
 * (iii) If there is already a job in that position, iterate the job slots prior to the position,
 * in the reverse order and find the first empty slot.
 * (iv) If there is no such slot available, then skip the job.
 *
 * [Note: The maximum number of possible jobs is equal to the maximum deadline of a job in the job list.]
 */

const findJobSequence = arr => {
  const n = arr.reduce((acc, job) => Math.max(acc, job.deadline), 0);
  const sortedJobs = [];
  const pickedJobs = Array.from({ length: n }, (e, i) => undefined);
  let totalProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sortedJobs.length === 0) {
      sortedJobs.push(arr[i]);
    } else {
      for (let j = 0; j < sortedJobs.length; j++) {
        if (arr[i].profit > sortedJobs[j].profit) {
          sortedJobs.splice(j, 0, arr[i]);
          break;
        } else if (j < sortedJobs.length - 1) continue;
        else {
          sortedJobs.push(arr[i]);
          break;
        }
      }
    }
  }

  for (let i = 0; i < sortedJobs.length; i++) {
    const indx = sortedJobs[i].deadline - 1;
    if (pickedJobs[indx] === undefined) {
      pickedJobs[indx] = sortedJobs[i];
      totalProfit += sortedJobs[i].profit;
    } else {
      const leftArr = pickedJobs.slice(0, indx);
      for (let j = leftArr.length - 1; j >= 0; j--) {
        if (pickedJobs[j] === undefined) {
          pickedJobs[j] = sortedJobs[i];
          totalProfit += sortedJobs[i].profit;
          break;
        }
      }
    }
  }
  return { pickedJobs, totalProfit };
};

/** Test */
const jobs = [
  { id: 1, profit: 20, deadline: 2 },
  { id: 2, profit: 15, deadline: 2 },
  { id: 3, profit: 10, deadline: 1 },
  { id: 4, profit: 5, deadline: 3 },
  { id: 5, profit: 1, deadline: 3 },
];

const jobs2 = [
  { id: 1, profit: 35, deadline: 3 },
  { id: 2, profit: 30, deadline: 4 },
  { id: 3, profit: 25, deadline: 4 },
  { id: 4, profit: 20, deadline: 2 },
  { id: 5, profit: 15, deadline: 3 },
  { id: 6, profit: 12, deadline: 1 },
  { id: 7, profit: 5, deadline: 2 },
];

console.log(findJobSequence(jobs));
console.log(findJobSequence(jobs2));
