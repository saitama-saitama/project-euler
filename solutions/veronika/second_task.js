function sumEvenFibonacci(n) {
    let a = 1, b = 2;
    let sum = 0;

    while (a <= n) {
        if (a % 2 === 0) {
            sum  += a;
        }
        let next = a + b;
        a = b;
        b = next;
    }
    return sum;
}

let userInput = prompt("Enter a number: ");
let number = parseInt(userInput);

let result = sumEvenFibonacci(number);
alert("The sum of even-valued Fibonacci terms not exceeding " + number + " is " + result);