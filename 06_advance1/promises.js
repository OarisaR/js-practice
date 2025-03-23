const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Task is done');
        resolve() // connects the consumed part

    }, 1000)
});
// earlier promises werent available in node js we gotta do npm install bluebird which is a library that had the promises features
// but modern js has all these integrated


promise1.then(function () {
    //return the values obtained from the promises
    console.log("Promises consumed");

})


// can also be done in a chained way ---> 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Task is done twice');
        resolve() // connects the consumed part

    }, 1000)
}).then(function () {
    console.log("Async 2 is resolved");

})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Oarisa", url: "Imagelicious.com" })
    }, 1000)
})

promise1.then(function (user) {
    console.log(user); // prints the resolve's parameter's object !

})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Oarisa", passWord: "Imagefood" });
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// we can also do chaining of then and the next then will have the paremter of the thing returned by prev then
promise4.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);

}).finally(() => console.log("The promise is either resolved or rejected"))


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (error) {
            resolve({ username: "Javascript", passWord: "js123" });
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

//let us do it in a different way

async function consume5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (err) {
        console.log(err);

    }

}


consume5()



// async function getUsers() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json() // converting to json as default is string as it takes time so we give await keywrod

//         console.log(data);

//     } catch (err) {
//         console.log("E: ",err);

//     }

// }
//getUsers()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json()) 
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
