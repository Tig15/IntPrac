// One Way to Solve
function revInt(num){
    const reversed = parseInt(num.toString().split('').reverse().join(''))
    return reversed;
}

const input = 6463
console.log(revInt(input))

// Second Way to Solve

function revsInt(num){
    let reversed = 0

    while(num!==0){
        reversed = reversed * 10 + num % 10
        num = Math.floor(num/10)
    }
    return reversed
}
console.log(revsInt(input))