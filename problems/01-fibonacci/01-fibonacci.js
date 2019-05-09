/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(typeof(0) === typeof(n) && n >= 0 && n !== Infinity){
        let result = 1
        let resultPre = 0
        let resultPre2 = 0
        if(n === 0){
            console.log(0)
        }else{
            for(let i = 1; i < n; i++){
                resultPre2 = resultPre
                resultPre = result 
                result = resultPre + resultPre2
            }
            console.log(result)
        }
    } else {
        throw "Hey! This isn't a value we can work with!"
    }

}

fib(10000000)