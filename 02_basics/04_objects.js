//Singleton

const leetUser = new Object()
//const leetUser = {}  another way

//Adding props
leetUser.id = "2131as"
leetUser.solve_cnt = "59"
leetUser.isLoggedIn = true

const regularUser = {
    email: "regular@gmail.com",
    fullname: {
        userfullname: {
            first: "Oarisa",
            last: "Rebayet"
        }
    }
}
console.log(regularUser.fullname.userfullname); //prop chaining

// Merging objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "c" }
//const obj3 = Object.assign({},obj1,obj2)
// we combine the obj1 and obj2 into a empty object...
//Object.assign(target,source)

//MOST USED 
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
    {
        id: 1,
        name: "user1",
    },

    {
        id: 2,
        name: "user2",
    }

]


users[1].id
console.log(leetUser);

console.log(Object.keys(leetUser)); // output datatype is ARRAYYYY
console.log(Object.values(leetUser));
console.log(Object.entries(leetUser)); //array of array


//-------------------------------------------------

// DESTRUCTURING OF OBJECTS

const course = {
    coursename: "Ds",
    price: "1000",
    courseTeacher: "Smith",
}
// we can access it by course.courseTeacher but there is a better way
const { courseTeacher } = course
console.log(courseTeacher); //after destructuing we can use it directly

// We can also rename it while destructing
//const {objPROP : RENAMEDPROP} = OBJECTNAME

const { coursename: cname } = course
console.log(cname);

//JSON
// {
//   "name" : "Rebayet",
//   "courseTeacher" : "Data Structures",    
// }