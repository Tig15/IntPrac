function fizzBuzz(num){
    for(i=1;i<num;i++){
        if(i%2 && i%3 == 0){
            console.log("Fizz Buzz")
        }
        else if(i%2==0){
            console.log("Fizz")
        }
        else if(i%3==0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}

const input = 20
console.log(fizzBuzz(input))