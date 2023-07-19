// One Way to Solve
function palon(str){
    // const reversed = str.split(' ').reverse().join(' ')
    const reversed = String(str).split(' ').reverse().join(' ')
    return str == reversed
}

const input = "level"
console.log(palon(input))

// Second Way to Solve

function palome(str1){
    let reversed = []

    for(const char of str1){
        reversed.unshift(char)
    }

    revStr = reversed.join('')
    return str1 == revStr;
}

console.log(palome(input))