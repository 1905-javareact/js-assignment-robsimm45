/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if(typeof(0) === typeof(someNum) && someNum !== Infinity){
        let finalnum = 1
        let someNum2 = Math.abs(someNum)
        while(someNum2 > 1){
            someNum2 /= 2
            if(someNum2 === finalnum){
                return true
                break
            }
        }
        return false
    }else{
        throw 'This isn\'t a workable number!'
    }
    
}

console.log(isEven(17))
console.log(isEven(8))