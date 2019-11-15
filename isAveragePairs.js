/* Sorted Array
Check if the array has any pairs that average to the number 
O(n) time 
O(1) space  (we arent requiring any more space to execute this function) */

let array = [1,2,3,6,11,12,55,100]
let average = 11.5

function averagePairs(array, num) {
  let i = 0
  let j = array.length-1
  while (i < j) {
    let average = (array[i] + array[j])/2
    console.log(average)
    if (average === num) {
      return true
    } else if (average < num) {
      i++;
    } else {
      j--;
    }
  }
  return false
}

averagePairs(array, average)