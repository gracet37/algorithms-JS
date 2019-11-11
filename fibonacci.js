

function fibonacci(num){
  var a = 0, b = 1, temp;
  if (num === 0) return 0;
  while (num > 1){
    temp = a + b;
    a = b;
    b = temp;
    num--;
  }
  return b;
}

fibonacci(9)