// First Way to Solve this Problem

function revInt(num){
    const reversed = parseInt(num).toString().split('').reverse().join('')
    return reversed;
}

const Intrev = 12345
console.log(revInt(Intrev))



// Second Way to Solve this Problem

function reveInt(num1){
    let reversed = 0
    while( num1 !== 0){
        reversed = reversed * 10 + num1 % 10;
        num1 = Math.floor(num1 / 10)
    }
    return reversed
}

const intRev = 2435
console.log(reveInt(intRev))