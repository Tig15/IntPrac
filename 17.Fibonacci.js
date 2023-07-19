const fibo = (number) => {
  if (number <= 1) {
    return number;
  }

  return fibo(number - 1) + fibo(number - 2);
};

console.log(fibo(6));


// Second Way to Solve

function fibon(index){
    const fib = [0, 1]

    for(let i=2; i<=index; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib[index]
}

console.log(fibon(9))

//