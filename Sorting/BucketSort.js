/**
 * Bucket sort might need to be combined with another sort based on 
 * how fine the buckets are
 */

const { performance } = require('perf_hooks');
// TODO: module.export insertion sort out

let count = 0;

const bucketSort = arr => {
  const buckets = {};
  for (let i = 0; i < arr.length; i++) {
    count++;
    const item = arr[i];
    if (buckets[item]) {
      buckets[item].push(item);
    } else {
      buckets[item] = [item];
    }    
  }
  arr = [];
  Object.keys(buckets).forEach(key => {
    count++;
    arr = [
      ...arr,
      ...buckets[key],
    ];
  });

  return arr;
}

let startTime = performance.now();
let sortedArray = bucketSort([9,7,6,6,5,3,2]);
//let sortedArray = heapSort([4,6,5,7,1,10]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);

//--------------------------------------------------------------------------------
console.log('--------------------------------------------');

count = 0;

const insertionSort = arr => {
  if (arr.length < 2) return arr;
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

// each bucket will be in max from 0 - 9
const bucketSortWithDecimalRange = arr => {
  const buckets = {};
  for (let i = 0; i < arr.length; i++) {
    count++;
    const item = Math.floor(arr[i] * 10);
    if (buckets[item]) {
      buckets[item].push(arr[i]);
    } else {
      buckets[item] = [arr[i]];
    }    
  }
  arr = [];

  Object.keys(buckets).forEach(key => {
    count++;
    arr = [
      ...arr,
      ...insertionSort(buckets[key]),
    ];
  });

  return arr;
}

startTime = performance.now();
sortedArray = bucketSortWithDecimalRange([0.9,0.7,0.65,0.61,0.51,0.35,0.02]);
stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);
