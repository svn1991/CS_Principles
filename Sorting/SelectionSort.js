const { performance } = require('perf_hooks');

let count = 0;

const selectionSort = arr => {
  let smallestIndex;

  for (let i = 0; i < arr.length; i++) {
    count++;
    smallestIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      const temp = arr[smallestIndex];
      arr[smallestIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

let startTime = performance.now();
let sortedArray = selectionSort([9,7,6,6,5,3,2]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);
