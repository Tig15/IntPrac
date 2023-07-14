// Given a phrase, 
// substitute each character by shifting it up or down the alphabet by a given integer. 
// If necessary, 
// the shifting should wrap around back to the beginning or end of the alphabet.

const caeCipher = (phrase, shift) =>{
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const charMap = {}
    let result = ''

    for(let i=0; i<alphabets.length;i++){
        const char = alphabets[i];
        const shiftedChar = alphabets[(i+shift % 26)]

        charMap[char] = shiftedChar
    }

    for(let i=0; i<phrase.length;i++){
        const char = phrase[i]
        result += charMap[char] || char
    }

    return result
}

const inpPhr = "hello world"
const takeIt = 6
console.log(caeCipher(inpPhr, takeIt))