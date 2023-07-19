// One Way to Solve
function revString(str){
    const wordsArr = str.split('')

    const revArr = wordsArr.reverse()

    const revStr = revArr.join('')
    return revStr
}

const input = "Hello"
console.log(revString(input))

// Second Way to Solve

function revStr(str1){
    let newStr = ''

    for(let i = str1.length-1;i>=0;i--){
        newStr += str1[i]
    }
    return newStr;
}

console.log(revStr(input))