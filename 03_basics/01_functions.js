function addNum (a, b){
  console.log( a + b );
}
addNum(4,3);

// we can also assign default values to the function
function loginMessage(username = "default"){
    return `${username} logged in`
}
login = loginMessage();
console.log(login);


function calculateCartPrice(...num1){
   return num1;
}
// useful when we don't know the number of arguments to be taken by a function
const user = {
    username: "Oarisa",
    loc : "dhaka",
}

function  handleObj(obj){
    console.log(`Username is ${obj.username} lives in ${obj.loc}`);
    
}
handleObj(user);


const myArray = [200,23,231];
function returnSecVal(Arr){
    return Arr[1];
}
