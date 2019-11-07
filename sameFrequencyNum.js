// Given 2 numbers, check to see if the frequency of each digit is the same. It will return true if the frequencies match and false if not

function sameFrequency(num1, num2){
  // Convert the numbers to strings so that they are iterable
  let num1ToString = num1.toString()
  let num2ToString = num2.toString()
  if (num1ToString.length !== num2ToString.length) {
      return false
  }
  let counter1 = {}
  let counter2 = {}
  
  for (let digit of num1ToString){
      counter1[digit] ? counter1[digit]++ : counter1[digit] = 1
  }
  for (let digit of num2ToString){
      counter2[digit] ? counter2[digit]++ : counter2[digit] = 1
  }
  for (let key in counter1) {
      if (!(key in counter2)){
          return false
      }
      if (counter1[key]!== counter2[key]) {
          return false
      }
  }
  return true
}