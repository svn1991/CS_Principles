const { performance } = require('perf_hooks');

let count = 0;

const quickSortWithFirstAsPivot = arr => {
  if (arr.length < 2) {
    count++;
    return arr;
  }

  const lesserArr = [];
  const moreArr = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    count++;
    if (item > pivot) {
        moreArr.push(item);
    } else {
        lesserArr.push(item);
    }
  }  
  return [...quickSortWithFirstAsPivot(lesserArr), pivot, ...quickSortWithFirstAsPivot(moreArr)];
}

let startTime = performance.now();
let sortedArray = quickSortWithFirstAsPivot([9,7,6,6,5,3,2]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);


////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('------------------------------------------');


count = 0;

const quickSortWithLastAsPivot = arr => {
  if (arr.length < 2) {
    count++;
    return arr;
  }

  const lesserArr = [];
  const moreArr = [];
  const pivot = arr[arr.length-1];

  for (let i = 0; i < arr.length-1; i++) {
    const item = arr[i];
    count++;
    if (item > pivot) {
        moreArr.push(item);
    } else {
        lesserArr.push(item);
    }
  }  
  return [...quickSortWithLastAsPivot(lesserArr), pivot, ...quickSortWithLastAsPivot(moreArr)];
}

startTime = performance.now();
sortedArray = quickSortWithLastAsPivot([9,7,6,6,5,3,2]);
stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);

////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('------------------------------------------');


count = 0;

const quickSortWithRandomPivot = arr => {
  if (arr.length < 2) {
    count++;
    return arr;
  }

  const randomIndex = Math.floor((Math.random() * arr.length));

  const lesserArr = [];
  const moreArr = [];
  const pivot = arr[randomIndex];

  for (let i = 0; i < arr.length; i++) {
    count++;
    if (i === randomIndex) {
      continue;
    }
    const item = arr[i];
    if (item > pivot) {
        moreArr.push(item);
    } else {
        lesserArr.push(item);
    }
  }  
  return [...quickSortWithRandomPivot(lesserArr), pivot, ...quickSortWithRandomPivot(moreArr)];
}

startTime = performance.now();
sortedArray = quickSortWithRandomPivot([9,7,6,6,5,3,2]);
stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);