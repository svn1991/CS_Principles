/**
 * Left child of node = 2 * I + 1 
 * Right child of node = 2 * I + 2 (assuming the indexing starts at 0).
 */

const { performance } = require('perf_hooks');

let count = 0;

const swapIndexValues = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

const getMaxHeap = (arr, ignoreLastIndexes) => {
  const length = Math.floor((arr.length - ignoreLastIndexes)/2);
  const ignoreIndexFrom = arr.length - ignoreLastIndexes;

  for (let i = 0; i < length; i++) {
    count++;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    
    let maxValueIndex = i

    if (leftChild < ignoreIndexFrom && arr[leftChild] > arr[maxValueIndex]) {
      maxValueIndex = leftChild;
    }

    if (rightChild < ignoreIndexFrom && arr[rightChild] > arr[maxValueIndex]) {
      maxValueIndex = rightChild;
    }

    if (maxValueIndex !== i) {
      arr = swapIndexValues(arr, i, maxValueIndex);
      return getMaxHeap(arr, ignoreLastIndexes);
    }
  }
  return arr;
}

const heapSort = arr => {
  arr = getMaxHeap(arr, 0);
  let startSort = 0;
  let arrLength = arr.length;
  while (startSort < arr.length) {
    count++;
    arr = swapIndexValues(arr, 0, arrLength - 1 - startSort);
    startSort++;
    arr = getMaxHeap(arr, startSort);
  }

  return arr;
}

let startTime = performance.now();
let sortedArray = heapSort([9,7,6,6,5,3,2]);
//let sortedArray = heapSort([4,6,5,7,1,10]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);
