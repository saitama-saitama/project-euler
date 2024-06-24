function sumOfMultiples(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

let parameterValue = parseInt(prompt("Enter a number: "));
let result = sumOfMultiples(parameterValue);
alert("The sum of multiples of 3 or 5 below " + parameterValue + " is " + result);