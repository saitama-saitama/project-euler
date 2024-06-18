function sumFibonacci(n) {
  if (isNaN(n)) {
    console.log("Введите числовое значение!!");
    return;
  }
  if (n <= 0) {
    console.log("Число должно быть положительным!!");
    return;
  }
  let sum = 0;
  let a = 1;
  let b = 2;
  while (a <= n) {
    if (a % 2 === 0) {
      sum += a;
    }
    let c = a;
    a = b;
    b = c + b;
  }
  return sum;
}
let n = prompt("Введите число");
let result = sumFibonacci(n);
console.log(result);
