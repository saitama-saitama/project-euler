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

let number = 13195;
console.log("The largest prime factor of " + number + " is " + largestPrimeFactor(number));