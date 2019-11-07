// Given an array of numbers, return the first two numbers that sum to zero 
// Use multiple counters
// Assumtion is that the array is sorted

// BigO -> time O(n) space O(1)

let arr = [-4, -3, -2, 0, 1, 3, 4, 5]

function sumToZero(arr) {

  let left = 0
  let right = arr.length -1

  while(left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum < 0) {
      left++
    } else {
      right--
    }
  }
}

sumToZero(arr)
// Returns [-4,4]

//  FIND ALL SUM PAIRS

let numsArray = [-4,-2,-1,0,1,2,3,5,6]
let num = 0

function findAllSum(numsArray, num) {
  let i = 0
  let j = numsArray.length - 1
  let pairsArray = []
  while (i < j) {
    let sum = numsArray[i] + numsArray[j]
    if (sum === num) {
      pairsArray.push([numsArray[i], numsArray[j]])
      i++ 
      j--
//       console.log(pairsArray)
    } else if (sum > 0){
      j--
    } else {
      i++
    }
  }
  return pairsArray
}

findAllSum(numsArray, num)