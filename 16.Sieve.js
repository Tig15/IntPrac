const primeSearch = (number) => {
  const prime = [];

  for (let i = 2; i <= number; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      prime.push(i);
    }
  }

  return prime
};

const input = 30;
console.log(primeSearch(input));
