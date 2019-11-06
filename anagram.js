// Checking to see if a string is an anagram

// 1. Check if the lenght of 2 strings are the same
// 2. Count the number of times each letter appears in string A
// 3. Count the number of times each letter appears in string B
// 4. Compare the two counters

// BigO = O(n) - as the length of the string grows, so will the space and time to run the application

function anagramCheck(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  
  let counter1 = {}
  let counter2 = {}
  
  for (let letter of str1) {
    counter1[letter] ? ++counter1[letter] : counter1[letter] = 1
  }
  for (let letter of str2) {
    counter2[letter] ? ++counter2[letter] : counter2[letter] = 1
  }
  
  for (let key in counter1) {
    if (!(key in counter2)) {
      return false
    }
    if (counter1[key] !== counter2[key]) {
      return false
    }
  }
  return true;
}

anagramCheck('aaa', 'abc') 
// Returns false