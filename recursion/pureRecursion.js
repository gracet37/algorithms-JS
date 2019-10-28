function collectOddNumber(arr) {
  // new empty array
  let newArray = []

  // if array is empty, then just return 1 - and exit the loop
  if (arr.length === 0) {
    return 1
  }

  // if the first element of the array is an odd number, then push it into the empty array
  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0])
  }

  // re-assign the value of newArray with concatenated arrays - reducing the array, by one each time
  newArray = newArray.concat(collectOddNumber(arr.slice(1)))
  return newArray;
}