function sumMultiplesOfThreeAndFive() {
  let number = prompt("Enter a number:");
  let sum = 0;
  
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  console.log("The sum of multiples of 3 and 5 up to" + number + "is" + sum);
}

sumMultiplesOfThreeAndFive();
