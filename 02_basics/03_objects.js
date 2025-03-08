// declaration is two types - literal and singleton


// Object literals

const mySymbol = Symbol("oari1");
//!! Symbol is used as sqaure brackets REMEMEBER
const jsUser = {
    name: "Oarisa",
    age: "21",
    [mySymbol] : "oari1",
    loc : "Bangladesh",
    isLoggedIn : false,
    lastLogindays: ["Mon","Wed"]
}
// the keys of object are stored as string --eg: "name"

// two ways to access the values of an object
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySymbol]);


// to change any property of object
jsUser.loc = "Dhaka"

// to prevent changing any property we can freeze the value

//Object.freeze(jsUser)
jsUser.loc = "Sylhet" // wont propagate
console.log(jsUser);

jsUser.greeting = function(){
    console.log('Hello User');
    
}
console.log(jsUser.greeting); // this shows  that function is not executed yet
console.log(jsUser.greeting()); 
jsUser.greeting1 = function(){
    console.log(`Hello User , ${this.name} lives in ${this.loc}`);
    
}
console.log(jsUser.greeting1()); 

