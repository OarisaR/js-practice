const myArr = [0, 1, 2, 3, 4, true, "oarisa"]
// JS ARRAY allows heterogeneous array

// Resizable
// JS array copy operations create Shallow copy which means original structure is altered
const myColors = ["Pink", "Mauve", "Lavender"]
const myArr2 = new Array(1, 2, 3, 4, 5);

// Array methods

myArr2.push(6); // appends 6 to the end



myArr2.unshift(3); //inserts 3 at the beginning
//console.log(myArr2);
myArr2.shift()  // ----> removes the first element from an array 

const newArr = myArr2.join();
// console.log(newArr);
// console.log(myArr2);
// console.log(typeof newArr); //STRING!
// SO join binds as well as converts to the string




// slice splice
console.log("Original Array", myArr2);

const myn1 = myArr2.slice(1, 3);
console.log(myn1);
console.log("Array after slicing", myArr2);


const myn2 = myArr2.splice(1, 3)
console.log(`Array after splicing ${myArr2}`);
console.log(myn2);
// DIFFERENCE BETWEEN SPLICE AND SLICE  -
// slice do not manipulate original array unlike splice!



