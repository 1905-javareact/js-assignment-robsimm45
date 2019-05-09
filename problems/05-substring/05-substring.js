/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(typeof('') === typeof(someStr) && typeof(0) === typeof(startIndex) && typeof(0) === typeof(endIndex) ){
        if(someStr.length >= startIndex && someStr.length >= endIndex && endIndex > startIndex){
            let result = ""
            for(let x = startIndex; x < endIndex; x++){
                result += someStr.charAt(x)
            }
            console.log(result)
        }else{
            throw 'Your bounds are messed up'
        }
    }else{
        'Uhhhhhhhh....what are you doing?'
    }

}

substring('buy', 1, 2)