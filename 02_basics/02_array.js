const marvel = ["spiderman", "ironman","thor"]
const dc = ["flash","superman","batman"]
const marvelNew = marvel.concat("thor") //concat returns a new copy!
//console.log(marvelNew);
//console.log(marvel); // remains unchanged

//marvel.push(dc) // it assumes marvelNew as an entire element!
//console.log(marvel);

// another way to concat array !better
// -----SPREAD OPERATOR

const allHeroes = [...marvel, ...dc]
console.log(allHeroes);
// it simply combines all the elements into a single array!

const another_array = [1,2,3,[4,5],[6,[7,8]]];
// when such a case arises where an array is present in an array
// we can use  flat function

const another_array_1 = another_array.flat(Infinity) //the parameter refers to the depth in how much depth do we flatten the array
console.log(another_array_1);




console.log(Array.isArray("Oarisa"))//asks a question whether the given element is array or not so this return false
console.log(Array.from("Oarisa"))
console.log(Array.from({name:"Oaarisa"})); // INTERESTING CASE! AS IT DOESNT KNOW WHAT TO CONVERT THE KEY OR THE VALUE SO IT RETURNS AN EMPTY ARRAY

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// combines individual elements into single array!



