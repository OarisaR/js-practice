let mydate = new Date();
// Reading dates is quite tough as it is unreadable so we convert it to string
console.log(mydate.toDateString()); //prints date
// toLocaleString prints both date and time!
console.log(typeof mydate); // It is an object!!


let mydate1 = new Date(2025, 1, 25) // months are 0 indexed.. so 1 means FEB
console.log(mydate1.toDateString());


let mydate2 = new Date(2025,1,25,5,3)
console.log(mydate2.toLocaleString());


let mydate3 = new Date("2025-01-14") // writing in string means month is 1 indexed as usual
console.log(mydate3.toDateString());


// TIMESTAMPS

let myTimeStamp = Date.now(); // 1st January 1970 till now expressed in millisecond but it is unreadable
console.log(myTimeStamp);
console.log(mydate3.getTime());

console.log(Math.floor(Date.now()/1000)); //converting to seconds and rounding it off to floor val

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay()); // 0 from Sunday





let modifiedNewDate = newDate.toLocaleString('default', {
    weekday: "long",
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
});
// toLocaleString is a powerful property as it helps in customising
console.log(modifiedNewDate);

