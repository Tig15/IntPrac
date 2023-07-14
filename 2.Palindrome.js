// First way to Solve this Problem

function palin(str){
    // let reversed = String(str).split('').reverse().join('')
    let reversed = str.split('').reverse().join('')
    return reversed == str
}

const woring = "level"
console.log(palin(woring))

// Second way to Solve this Problem

function palome(str1){
    let reversed = []
    for(const char of str1){
        reversed.unshift(char)
    }
    const reversedStr = reversed.join('')
    return str1 == reversedStr
}

const worden = "faf0"
console.log(palome(worden))
