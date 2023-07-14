const revEachWords = (str) => {
    const wordsArray = str.split(' ')

    const reverseStr = wordsArray.map((word) => {
        const charArray = word.split('')

        const reverseChar = charArray.reverse()

        const joinChar = reverseChar.join('')
        return joinChar
    })

    const reverseArr = reverseStr.join(' ')
    return reverseArr
}

const input = "Hey How are you doing"
console.log(revEachWords(input))


// With Spread Operator...

function revPhrase(phrase){
    const wordsArr = phrase.split(' ')

    const revStr = wordsArr.map( word => [...word].reverse().join(''))

    const revArr = revStr.join(' ')
    return revArr
}

console.log(revPhrase(input))