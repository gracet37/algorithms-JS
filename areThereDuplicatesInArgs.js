// Function accepts a variable number of arguments- check whether there are any duplicates in the arguments

function areThereDuplicates(a,b,c) {
  // Convert the arguments into an array
  let arrayFromArgs = Array.from(arguments)
  let counter = {}
  // Create a counter for each item in the array
  for (let i of arrayFromArgs) {
    counter[i] ? counter[i]++ : counter[i] = 1
  }
  // Check if there is any with a value greater than 1, if yes, there is a duplicate
  for (let key in counter){
    if (counter[key] > 1) return true
  }
  // If our for loop doesnt return true, then that means we exit out of the loop and return there are no duplicates
  return false
}


areThereDuplicates(1,2,3,4,5,6)

// * REFECTORED SOLUTION

function areThereDuplicates() {
  let counter = {}
 
  // * for in - we can reference the index of arugments!!!
  for (let index in arguments) {
    counter[arguments[index]] ? counter[arguments[index]]++ : counter[arguments[index]] = 1

    console.log(counter)
  }
  for (let key in counter){
    if (counter[key] > 1){
      return true
    }
  }
  return false
}

// * One line solution (Colt Steele)


areThereDuplicates(1,2,3,4,5,6)

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}