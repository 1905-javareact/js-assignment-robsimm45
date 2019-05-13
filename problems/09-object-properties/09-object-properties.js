/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(let key in someObj){
        console.log(`${key}: ${someObj[key]}`)
    }
}

let Gram = {
    name: "Gram",
    age: 35
}

objectProperties(Gram)