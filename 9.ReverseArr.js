function revArr(arr){
    let reversed = []

    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i])
    }
    return reversed
}

const input = [2,5,6,7]
console.log(revArr(input))