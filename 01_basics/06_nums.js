const score = 400
const balance = new Number(100)


console.log(balance.toString());
//after it is converted to string , string's functions can be used in!
console.log(balance.toFixed(2)); // 100.00

const num  =  23.342
console.log(num.toPrecision(3)); // 23.3

const num1  =  123.842
console.log(num1.toPrecision(3)); // 124

const num2 = 1000000
console.log(num2.toLocaleString());

// ----------------------------------------------
// MATHS

console.log(Math); // Object
console.log(Math.random()); // ranges from 0 to 1
console.log(Math.floor(Math.random() * 10) + 1); //+1 is given for 0 !
// for games like dice ludo we need proper values so we can convert by x with 10


const min = 10
const max = 30

console.log(Math.floor(Math.random() * ( max - min + 1)) + min)





