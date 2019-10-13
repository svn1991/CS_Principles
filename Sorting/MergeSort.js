const { performance } = require('perf_hooks');

let count = 0;

const merge = (left, right) => {
  let newArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // comparing each corresponding index values between left and right arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    count++;
    if (left[leftIndex] < right[rightIndex]) {
      newArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      newArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [
    ...newArray,
    ...left.slice(leftIndex),
    ...right.slice(rightIndex),
  ];
}

const mergeSort = arr => {
  count++;
  if (arr.length < 2) {
    return arr;
  }

  const medianIndex = Math.floor(arr.length/2);
  const leftArr = arr.slice(0, medianIndex);
  const rightArr = arr.slice(medianIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let startTime = performance.now();
let sortedArray = mergeSort([9,7,6,6,5,3,2]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);
