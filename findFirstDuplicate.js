function findFirstDuplicate(string) {
  let splitString = string.split('')
  let counter = {}
  for (let i = 0; i < splitString.length; i++){
    counter[splitString[i]] = (counter[splitString[i]] || 0) + 1
    if (counter[splitString[i]] === 2) {
      return splitString[i]
    }
  }
}

let string = "hhellooo"
findFirstDuplicate(string)
