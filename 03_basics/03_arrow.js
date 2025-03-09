const user = {
    name : "oarisa",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.name} , Welcome to website`);
        
    }

}
// user.welcomeMessage()


// user.name = "sam"
// user.welcomeMessage()
// this refers to current context

//console.log(this); // empty!

function coffee(){
    let type = "espresso"
    console.log(this.type); //UNDEFINED! 
    
}



const coffee = () => {
    let type = "espresso"
    console.log(this.type); // empty {}
}


// const add = (a, b) => {
//    return a + b;
// }

//return keyword is necssary when { } is used

const add = (a, b) =>  a + b;  //implicit return 
 
const add1 = (a, b) => ( a + b); // return not need if parenthesis used




