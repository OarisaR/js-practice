// basic for loop
let array = ["superan","batman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
// for of
const arr = [1,2,3,4,5]
for(const i of arr){
    console.log(i);
    
}


// MAPS
const map = new Map() //UNIQUE VALUES!
map.set('US',"United States")
map.set('BD',"Bangladesh")
console.log(map);

for(const [key,value] of map){
console.log(key, "->" , value);

}

const Obj = {
    name1 : "Bubbly",
    name2: "Angelina",
    name3: "becky",
}
// Objects arent iterable by for of loop

//WE USE FOR IN LOOP

for(const key in Obj){
    console.log(key,"=>", Obj[key]);
    
}
const arr1 = ['js','py','cpp']
for(const key in arr1){
    console.log(arr1[key]);
    
}
// SHORTLY -- USE FOR OF FOR OBB AND FOR IN FOR ARRAY

const color = ["lauve","lav","pink","red","yellow"]

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
    langName : "Python",
    file: 'py',
},
{
    langName : "JavaScript",
    file: 'js',
},
]

myCoding.forEach( (item) => {
   console.log(item);
   console.log(item.langName);
   
   
})