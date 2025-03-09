
// A scope - {}
let a = 100 // has a global scope as it is declared outside
if (true) {
    let a = 10 // has a func scope
    console.log("Inner a" , a);
    
    const b = 20
    var c = 30
}
console.log("Outer a" , a); //a and b is not defined because the let , const keyword has a block scope while the var has a global scope
//console.log(b);
console.log(c);

//BEST TO AVOID VAR!



// -----NESTED SCOPE -----

function one(){
    const user = "oarisa"

    function two(){
        const website = "Imagelicious"
        console.log(user);
        
    }
    two() // runs as two is defined within on so user is acessible by it
    //console.log(website); err
    
    
}

one() ; // SHOWS ERROR! AS CONST HAS BLOCK SCOPE it will say website is not defined
// CHILD FUNC CAN ACCESS PARENT VARIABLES





addone(2); //no error even though it is being called before declaration
function addone(num){
    return num + 1;
}




//addTwo(2)  //error
const addTwo = function(num){ 
    return num + 2;
}

addTwo(2)