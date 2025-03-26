// basic for loop
let array = ["superan", "batman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
// for of
const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);

}


// MAPS
const map = new Map() //UNIQUE VALUES!
map.set('US', "United States")
map.set('BD', "Bangladesh")
console.log(map);

for (const [key, value] of map) {
    console.log(key, "->", value);

}

const Obj = {
    name1: "Bubbly",
    name2: "Angelina",
    name3: "becky",
}
// Objects arent iterable by for of loop

//WE USE FOR IN LOOP

for (const key in Obj) {
    console.log(key, "=>", Obj[key]);

}
const arr1 = ['js', 'py', 'cpp']
for (const key in arr1) {
    console.log(arr1[key]);

}
// SHORTLY -- USE FOR OF FOR OBJECT AND FOR IN FOR ARRAY

const color = ["lauve", "lav", "pink", "red", "yellow"]

// foreach takes callback function -- which doesnt have any name and any params!
// color.forEach(function(val){
//     console.log(val);

// }
// )

// color.forEach(
//     (val) => console.log(val)

// )


// function print(item) {
//     console.log(item);

// }
// color.forEach(print) // REMEMBER TO ONLY GIVE REFERENCE

const myCoding = [
    {
        langName: "C++",
        file: 'cpp'
    },
    {
        langName: "Python",
        file: 'py',
    },
    {
        langName: "JavaScript",
        file: 'js',
    },
]

myCoding.forEach((item) => {
    console.log(item);
    console.log(item.langName);


})

// const food = [ "burger" ,"haleem" ,"Chicken","cake"]
// // for each do not return any valus ever
// const print = food.forEach( (item)=> console.log(item) )
// console.log(print);

// FILTER HAS RETURN!
const nums = [1, 2, 3, 4, 5, 6, 7]
// const newNums = nums.filter((num)=> {
//     if(num>4) return num
// })
// or can be written like this too --
// const newNums = nums.forEach( (num) => num>4 )
//console.log(newNums);


// what if we wanted to do this by forEach
// const newNums = []
// nums.forEach( (num) => {
//     if(num > 4) newNums.push(num)
// })



//const newNums = nums.map( (num) => num * 10 )
// Maps return the value by doing any kind of op or simply while filter plays the game of a condition true/false
// it has the arg sntax like - val,idx !
const colors = ['red', 'green', 'blue'];

const colorList = colors.map((color, index) => {
  return <div key={index}>{color}</div>;
})
//CHAINING!
// const newNums = nums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num > 40)
//     console.log(newNums);
    



 // REDUCE

const newNums =  nums.reduce( (acc,curr) => {
    return acc+curr
} , 0)
// 0 refers to the initial val of acc...like sum = 0
console.log(newNums);
