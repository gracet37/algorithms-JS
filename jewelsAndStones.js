/* You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A". */

// ! MY ORIGINAL SOLUTION - WOW SO LONG!! (BRUTE FORCE)

var numJewelsInStones = function(J, S) {
  let jArray = [];
  let obj = {};
  let sum = 0;
  let s = [...S];
  if (J.length > 1) {
    jArray = J.split("");
  }
  for (let i = 0; i < jArray.length; i++) {
    obj[jArray[i]] = 0;
  }

  for (let char of s) {
    obj[char] !== undefined ? obj[char]++ : null;
  }
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

numJewelsInStones("aA", "aAAknnjhbhabBCC");

// ! FASTER EFFICIENT SOLUTION 

var numJewelsInStones = function(J, S) {
  //  if there is nothing in J or S, then just return 0 (edge case)
  if (!J || !S) return 0;
  
  let count = 0;
  for (const c of S) {
      if (J.includes(c)) count++;
  }
  
  return count;
};
