// First Way to Solve this Problem
function reverseString(str){
    var reverse = str.split(' ').reverse().join(' ')
    return reverse
}

const sent = "Hey! How are you doing?"
console.log(reverseString(sent))

// Second Way to Solve this Problem

function revStr(str1){
    let newStr = ""
    for(let i = str1.length - 1; i >= 0; i--){
        newStr += str1[i]
    }

    return newStr
}

const sente = "loow"
console.log(revStr(sente))