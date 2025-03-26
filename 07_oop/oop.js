const user = {
    name : "Oarisa",
    age: "22",
    loginCount : "8",
    getDetails : function(){
        console.log("Got the details from Database");
        console.log(`Username : ${this.name}`); // this keyword must be given otherwise it wont know the name exist 
        
        
    }
}

//Constructor 

function meUser(username,loginCount,isLoggedIn){
    this.username  = username // the first one is our own var and the latter is the passed one
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const user1 =  meUser("oarisa",12,true)
const user2 =  meUser("bye",1,false)
//NOW PRINTING USER1 GIVES THE VALUES OF USER2!!!! WHICH MEANS THE VALUES GETS OVERWRITTEN!!

// SO WE NEED CONSTRUCTOR WHICH GIVES US A NEW COPY OF INSTANCE WE NEED TO SUE THE NEW KEYWORD
const user3 =  new meUser("ye",2,false)

// using new first of all  1. creates a new empty object
//  2.  A Constructor func is called due to new
// 3. the arguments are injected into the new keyword
