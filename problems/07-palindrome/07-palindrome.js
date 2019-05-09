/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    if(typeof('') === typeof(someStr)){
        for(let key = 0; key < someStr.length; key++){
            if(someStr.charAt(key) !== someStr.charAt(someStr.length-key-1)){
                return false
                break
            }
        }
        return true
    }else{
        throw 'What is this???'
    }
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('win'))