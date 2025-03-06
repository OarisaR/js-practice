console.log("2" > 1);
console.log("2" == "2");
//IT IS NOT PREFERRED TO COMPARE TWO DIFFERENT DATATYPES


console.log(null > 0); // f
console.log(null == 0); // f
console.log(null >= 0); //t
// The equality check and comparisons work differently!
// Comparisons convert null to a number treating it as 0 !

//STRICT CHECK!
// CHECKS BOTH VAL AND DATATYPES

console.log("2" === 2); //f
