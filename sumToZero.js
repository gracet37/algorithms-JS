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