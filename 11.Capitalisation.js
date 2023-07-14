const capWords = (phrase) => {
    const wordsArr = phrase.split(' ')
    
    const capStr = wordsArr.map(word => word.toUpperCase())

    const capArr = capStr.join(' ')
    return capArr;
}

const input = "hello world"
console.log(capWords(input))