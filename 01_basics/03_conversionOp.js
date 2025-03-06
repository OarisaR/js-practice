let score = "77"
console.log(typeof score);

let valueInNum = Number(score) //It will convert to number
console.log(typeof valueInNum); 

score = "56a"
valueInNum = Number(score) //but the score has both letters and number yet we observe it prints number as datatype
console.log(valueInNum); // when we print it we see it is NaN => not a number

score = null
valueInNum = Number(score) 
console.log(valueInNum);

score = true
valueInNum = Number(score) 
console.log(valueInNum); //1 is true


// 33 -> 33
// 33abc -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
// 1 , non empty string -- > true
// 0  , empty string --> false


let someNum = 33
let stringNum = String(someNum)
console.log(typeof stringNum) //string

