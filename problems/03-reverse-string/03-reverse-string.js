/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
    if(typeof("") === typeof(someStr)){
        let newStr = ""
        for(let i = 1; i <= someStr.length; i++){
            newStr += someStr.charAt(someStr.length-i)
        }
        console.log(newStr)
    } else {
        console.log("Wrong type of input!")
    }

}
///reverseStr("bobert")
reverseStr(null)