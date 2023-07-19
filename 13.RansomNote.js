// Given a magazine of words and a ransom note, 
// determine if it’s possible to “cut out” 
// and create the ransom note from the magazine words.

const magRans = function(mag, ransom){
    const magWords = mag.split(' ')
    const ransomWords = ransom.split(' ')

    for(const word of ransomWords){
        const wordIndex = magWords.indexOf(word)
        if(wordIndex === -1){
            return false
        }

        magWords.splice(wordIndex, 1)
    }

    return true
}

const magInp = "this is a magazine of words"
const ransInp = "a note is this"

console.log(magRans(magInp, ransInp))