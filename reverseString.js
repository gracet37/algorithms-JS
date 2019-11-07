let string = "have a lovely day"

function reverseWord(string) {
  let stringArray = string.split(' ')
//   console.log(stringArray.length-1)
  let newArray = []
  for (let i = stringArray.length-1; i >= 0; i--) {
    newArray.push(stringArray[i])
//     console.log(newArray)
  }
  return newArray
}

reverseWord(string)