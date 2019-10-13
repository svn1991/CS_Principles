/**
 * Radix sort can be applied to data that can be sorted lexicographically, 
 * be they integers, words, punch cards, playing cards, or the mail.
 */

const { performance } = require('perf_hooks');

let count = 0;

const radixSort = arr => {
  let max = arr[0];
  let buckets;

  // get max value
  arr.forEach((item, index) => {
    if (item > max) {
      max = item;
    }
  });

  for (let i=1; i <= String(max).length; i++) {
    count++;
    buckets = {};
    for (let j=0; j < arr.length; j++) {
      count++;
      const number = arr[j];
      const string = String(number);

      let digit = string[string.length - i];
      if (!digit) {
        digit = 0;
      }

      if (buckets[digit]) {
        buckets[digit].push(number);
      } else {
        buckets[digit] = [number];
      }
    }
    arr = [];
    Object.keys(buckets).forEach(key => {
      arr = [
        ...arr,
        ...buckets[key],
      ];
    });
  }

  return arr;
}

let startTime = performance.now();
let sortedArray = radixSort([9,7,6,6,5,3,2]);
// let sortedArray = radixSort([900,75,6,65,555,39,27,10,01,1000]);
let stopTime = performance.now();
console.log('Count: ' + count);
console.log('Time Taken: ' + (stopTime - startTime));
console.log('SortedArr: ' + sortedArray);
