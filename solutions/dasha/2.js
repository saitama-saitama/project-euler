function sumEvenFibonacciNumbers() {
  let n = prompt("Enter a number:");
  let a = 1, b = 2, sum = 2; // we start with 2, as 2 is the first even Fibonacci number
  
  while (b <= n) {
    let temp = b;
    b = a + b;
    a = temp;
  
    if (b % 2 === 0) {
      sum += b;
    }
  }
  
  return sum;
}

console.log(sumEvenFibonacciNumbers());
