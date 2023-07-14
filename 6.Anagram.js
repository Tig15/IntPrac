const anaGram = (words1, words2) => {
    const sortWords1 = words1.toLowerCase().split("").sort().join('')
    const sortWords2 = words2.toLowerCase().split("").sort().join('')

    return sortWords1 == sortWords2
}

const inp1 = "listen"
const inp2 = "silent"

console.log(anaGram(inp1, inp2))