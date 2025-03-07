const name = "oarisa"
const repoCount = 23


//Concatenation
//console.log(name + repoCount);
// Not preferred

//Modern concat uses Backticks
console.log(`Hello name is ${name} and repo is ${repoCount}`);


//string can also be declared in this way
const gameName = new String('gamer-OARISA')
console.log(gameName[0]); // g
// String is an Object - it shall have key value pairs


console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-10,4)
console.log(anotherString);

const newStringone = "      oarisa "
console.log(newStringone.trim()); // removes starting and ending spaces

const url = "https://oarisa.com/oarisa%20imagelicious"
//browser will replace any spaces with %20 so we can replace it by using this function
url.replace('%20','-')


//Converting string to array
const myname = "ms-oarisa-rebayet"
console.log(myname.split('-'));
// this divides the string based on a seperator




