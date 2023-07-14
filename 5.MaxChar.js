function mostFreqChar(str){
    const charCount = {};
    let maxCount = 0;
    let mostFreqChar = ''

    for(const char of str){
        charCount[char] = charCount[char] + 1 || 1;
        if(charCount[char] > maxCount){
            maxCount = charCount[char]
            mostFreqChar = char
        }
    }

    return mostFreqChar;
}

const input = "Moreover"
console.log(mostFreqChar(input))