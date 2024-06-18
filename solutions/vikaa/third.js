function primeFactor(number) {

    if (isNaN(number)) {
        console.log("Введите числовое значение!!");
        return;
    }

    if (number <= 0) {
        console.log("Число должно быть положительным!!");
        return;
    }

    let i = 2;
    while (i <= number) {
        if (number % i === 0) {
            number /= i;
        } else {
            i++;
        }
    }
    return i;
}

let userInput = prompt("Введите число"); 
let largestPrime = primeFactor(userInput);
console.log(largestPrime);
