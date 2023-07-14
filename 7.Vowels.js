function countVowel(str){
    const vowels = ['a', 'e', 'i','o','u']
    // let count = 0;
    const showVowel = []

    for(const char of str.toLowerCase()){
        if(vowels.includes(char)){
            showVowel.push(char)
            // count++
        }
    }

    return showVowel
}

const input = "Hey? How are you doing?"
console.log(countVowel(input))

