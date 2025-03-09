// Immediately invoked function expression

//JavaScript variables declared globally can unintentionally overwrite other variables.
//IIFE helps by creating a new scope so that variables inside it don’t interfere with the global scope



//Calling a function immediately after it is declared ---> (function)()

(function hello() {
    console.log(`Hello World`);

}());

(function hello1() {
    console.log(`Hello World`);

}());   

// shows error because the first function do not know when to stop!  so we apply a semicolon to indicate the end!

( (name) => {
    console.log(`Hello ${name}`);

}) ("oarisa")  

