function sumOfDiagonalsInSpiral(n) {

    if (isNaN(n)) {
        console.log("Введите числовое значение!!");
        return;
    }

    if (n <= 0) {
        console.log("Число должно быть положительным!!");
        return;
    }

    let sum = 1;
    for (let i = 3; i <= n; i += 2) {
        sum += 4 * Math.pow(i, 2) - 6 * (i - 1);
    }
    return sum;
}

const userInput = prompt("Введите число");
const spiralSize = sumOfDiagonalsInSpiral(userInput);
console.log(spiralSize); 