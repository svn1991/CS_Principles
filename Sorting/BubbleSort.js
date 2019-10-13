const { performance } = require('perf_hooks');

let count = 0;
let swap = false;

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    count++;
    for (let j = arr.length - 1; j > i; j--) {
      count++;
      if (arr[j] < arr[j-1]) {
        const temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }

  return arr;
}

let startTime = performance.now();
let sortedArray = bubbleSort([9,7,6,6,5,3,2]);
// let sortedArray = bubbleSort([2,3,5,6,6,7,9]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);
