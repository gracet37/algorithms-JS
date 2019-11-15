// ! MY ORIGINAL SOLUTION

function isSubsequence(array1, array2) {
  
  let index = []
  for (let char of array1) {
    if (array2.includes(char)) {
      index.push(array2.indexOf(char))
    }
  }
  if (index.length !== array1.length) {
    return false
  }
  for (let i = 0; i < index.length; i++) {
    if (index[i] > index[i+1]){
      return false;
    }
  }
  return true
}

isSubsequence("abc", "abracadabra")

// ! RECURSIVE METHOD 

/* If length of string 1 is a blank string, then return true
If length of string 2 is blank, return false, as we know none of the characters in string 1 appear
If characters do match, then perform the same operation on the next index of each strings
Else, keep testing string1[0] against string2 until we find a match
We use .slice() to take 1 element from the beginning of the string */

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1),str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

isSubsequence("hey", "oheyawwwd")