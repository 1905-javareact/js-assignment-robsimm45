/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let beginHalf = []
    let endHalf = []
    if(Array.isArray(someArr) && typeof(index) === typeof(0)){
        if(someArr.length > index && index >= 0){
            beginHalf = someArr.slice(0, index)
            endHalf = someArr.slice(index+1, someArr.length)
            let result = beginHalf.concat(endHalf)
            console.log(result)
        }else{
            throw "Hey! That index does not exist!"
        }   
    }
}

let testArr = [0, 1, 2, 3, 4]

spliceElement(testArr, 5)