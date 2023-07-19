function anaGram(word1, word2){
    const words1 = word1.toLowerCase().split('').sort().join('')
    const words2 = word2.toLowerCase().split('').sort().join('')

    return words1 == words2;
}

console.log(anaGram('listen','silent'))