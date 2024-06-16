function sumOfMultiples(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

let parameterValue = 10;
let result = sumOfMultiples(parameterValue);
console.log(result);