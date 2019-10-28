// Recursions require 2 key things - base case / differing input

// Recursive function to calculate factorial

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n-1)
}

factorial(5)
