// ? Count the number of each character in a string
// Things we need to consider:
// - Capitalized characters, spaces, non-alphanumeric characters
// - Create an empty object to count these characters

//  Simplest way 
let string = "hello There!"

function countChars(string) {
  // create an empty object
  let count = {}
  // loop over the string
  for (let i = 0; i < string.length; i++) {
    // convert each character to lowercase
    let char = string[i].toLowerCase()
    // if the character already exists in the object, the add 1, otherwise set it equal to 1
    if (count[char] > 0) {
      count[char]++
    } else {
      count[char] = 1
    }
  }
  // return the object
  return count
}

countChars(string)