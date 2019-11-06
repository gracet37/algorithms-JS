// Two arrays, and checking if array B contains the square root of each number in array A

function same(arr1, arr2) {
// if the length of the arrays differ, then return false straight away
  if(arr1.length !== arr2.length) {
    return false
  }
// declare two variables with empty objects
  let counter1 = {}
  let counter2 = {}
// Loop over array 1 and 2, if a value exists, add 1, else initialize
  for (let num of arr1) {
    counter1[num] = (counter1[num] || 0) + 1
  }
  for (let num of arr2) {
    counter2[num] = (counter2[num] || 0) + 1
  }
  // for / in 
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false
    }
    if (counter2[key**2] !== counter1[key]) {
      return false
    }
  }
  return true
}

same([1,2,3], [1,4,8])