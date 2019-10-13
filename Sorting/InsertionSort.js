const { performance } = require('perf_hooks');

let count = 0;

const insertionSort = arr => {
  for (let i=0; i < arr.length; i++) {
    count++;
    if (i === 0) continue;
    if (arr[i] < arr[i-1]) {
      const temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      i -= 2;
    }
  }
  return arr;
} 

const startTime = performance.now();
const sortedArray = insertionSort([9,7,6,6,5,3,2]);
const stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);