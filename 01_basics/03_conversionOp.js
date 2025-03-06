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

/* Operations */

let value = 3
let neg = -value;
//console.log(neg) // -3


let str1 = "hello"
let str2 = " world"
let str3 = str1+str2;

//Compleixty arises when we add num and string
console.log(1+"2") // 12
console.log("1"+2) //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32
//Basically the type which appears first gets priority !


console.log(+true) // 1 -> conversion to num!

let gameCounter = 100
gameCounter++
console.log(gameCounter);
let b = ++gameCounter
let c = gameCounter++
console.log(b);
console.log(c);
console.log(gameCounter);



