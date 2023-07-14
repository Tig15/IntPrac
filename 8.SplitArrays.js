const arrayChunk = (arr, size) => {
    const result = [];

    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i, i+size))
    }

    return result;
}

const arrInp = [1,3,4,6,7,9,2,3,4,5,6,7,8,9]
const chunkSize = 5
console.log(arrayChunk(arrInp, chunkSize))