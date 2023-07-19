function pairSum(arr, targetSum){
    const pair = []

    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(arr[i] + arr[j] == targetSum){
                pair.push(arr[i], arr[j])
            }
        }
    }

    return pair;
}

const input = [1,2,4,5,6,7]
const tarSum = 10
console.log(pairSum(input, tarSum))
