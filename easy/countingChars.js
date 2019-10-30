// ? Count the number of each character in a string
// Things we need to consider:
// - Capitalized characters, spaces, non-alphanumeric characters
// - Create an empty object to count these characters

//  Simplest way
let string = "hello There!";

function countCharsSimple(string) {
  // create an empty object
  let count = {};
  // loop over the string
  for (let i = 0; i < string.length; i++) {
    // convert each character to lowercase
    let char = string[i].toLowerCase();
    // if the character already exists in the object, the add 1, otherwise set it equal to 1
    if (count[char] > 0) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  // return the object
  return count;
}

// ! Refactor #1 - Includes regex to check if characters are alphanumeric
function countCharsOne(string) {
  // create an empty object
  let count = {};
  // for of loop - eliminates working with i
  for (let char of string) {
    // convert each character to lowercase
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if count[char] is truthy, then incremement by 1, otherwise set the value equal to 1
      count[char] = ++count[char] || 1;
    }
    // return the object
    return count;
  }
}

// ! Refactor #2 - Removes regex, and checks characters with charCodeAt()
function countCharsTwo(string) {
  // create an empty object
  let count = {};
  // for of loop - eliminates working with i
  for (let char of string) {
    // convert each character to lowercase
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // if count[char] is truthy, then incremement by 1, otherwise set the value equal to 1
      count[char] = ++count[char] || 1;
    }
  }
  // return the object
  return count;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

countCharsTwo("Hello World!")

