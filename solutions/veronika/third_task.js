function largestPrimeFactor(number) {
    let largestFactor = 1;
    let factor = 2;

    while (number % factor === 0) {
        largestFactor = factor;
        number /= factor;
    }

    factor = 3;
    while (number > 1) {
        while (number % factor === 0) {
            largestFactor = factor;
            number /= factor;
        }
        factor +=2;
    }
    return largestFactor;
}

let userInput = prompt("Enter a number: ");
let number = parseInt(userInput);

let result = largestPrimeFactor(number);
alert("The largest prime factor of " + number + " is " + result);