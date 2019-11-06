// Given an array of SORTED numbers
// Return the number of unique numbers in the array
// Use multiple counters

// BigO - time O(n) and space is O(1)

// Non multiple counter solution (by me)

function countUniqueValues(arr) {
  let obj = {}
  for (let element of arr) {
    obj[element] ? obj[element] += 1 : obj[element] = 1
  }
  return Object.keys(obj).length
}

// My first solution

function countUnique(arr) {
  let first = 0;
  let second = 1;
  while (first < arr.length) {
    if (arr[first] === arr[second]) {
      arr.splice(arr[second], 1);
    } else {
      first++;
      second++;
    }
  }
  return arr.length;
}

let arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 4];
countUnique(arr);

// Suggested solution

let arr = [1,2,2,3,4,4,4,5,5,5,6,6,6,7,7,7]

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

countUniqueValues(arr) 
// Returns 7
