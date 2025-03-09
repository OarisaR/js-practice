
// A scope - {}
let a = 100 // has a global scope as it is declared outside
if (true) {
    let a = 10 // has a func scope
    console.log("Inner a" , a);
    
    const b = 20
    var c = 30
}
console.log("Outer a" , a); //a and b is not defined because the let , const keyword has a block scope while the var has a global scope
//console.log(b);
console.log(c);

//BEST TO AVOID VAR!

