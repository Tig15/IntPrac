const revArr = (arr) => {
    const reversed = []

    for(let i = arr.length-1;i>=0;i--){
        reversed.push(arr[i])
    }
    return reversed
}

const input = ['1', '2','5', '4']
console.log(revArr(input))

 