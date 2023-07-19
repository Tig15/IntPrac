function splitArray(arr, size){
    const result = []

    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i, i+size))
    }
    return result
}

const arrIn = [2,3,4,6,7,8,3,4,5,6,8,9]
const sizeIn = 3
console.log(splitArray(arrIn,sizeIn))

// Slice method used on array then push to result