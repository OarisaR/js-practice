// Primitive -  call by value
// --7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// Reference (Non - primitive) - call by reference
// -- Array, Objects, Functions


// JS is a dynamically typed language as the datatype is not needed to be mentioned


const id = Symbol('123');
const id1 = Symbol('123');
//Might feel they are same but id is not equal to id1!
console.log(id==id1); //false

const myFunction = function(){
    console.log('Hello');  
}
myFunction()

// typeof null ---> object
