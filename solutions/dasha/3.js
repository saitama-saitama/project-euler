function largestPrimeFactor(number) {
    let largestPrime = 1;
    let currentFactor = 2;
  
    while (currentFactor * currentFactor <= number) {
      if (number % currentFactor === 0) {
        largestPrime = currentFactor;
        number /= currentFactor;
      } else {
        currentFactor += 1;
      }
    }
  
    if (number > 2) {
      largestPrime = number;
    }
  
    return largestPrime;
  }
  console.log(largestPrimeFactor(13195)); 