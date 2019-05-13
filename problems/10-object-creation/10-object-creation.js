/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let Jim = {
    name: "Jim",
    age: 27
} 

function Bill(name, age){
    this.name = name
    this.age = age
}

class John 
{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}