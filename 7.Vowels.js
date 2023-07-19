function findVow(str){
    const vowels = ['a','e','i','o','u']
    // let count = 0
    const showVowel = []

    for(const char of str.toLowerCase()){
        if(vowels.includes(char)){
            showVowel.push(char)
        }
    }

    return showVowel
}

const input = "Moreover"
console.log(findVow(input))