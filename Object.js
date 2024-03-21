 // singletion :     ----
 //Object.create

 // object literals:

//  const mySym = Symbol("Key1");

//  const JsUser = {
//     name: "Deepak",
//     "Full Nmae": "Deepak Kumar Singh",
//     [mySym]: "mykey1",
//     age: 21,
//     location: "Noida",
//     Islogin : false,
//  }

//  console.log(JsUser.name);
//  console.log(JsUser["age"]);
//  console.log(JsUser["Full Nmae"]);
//  console.log(JsUser[mySym]);
//  console.log(typeof JsUser[mySym]);//Symbol

//  JsUser.age =  18
//  Object.freeze(JsUser)
//  JsUser.age=23
//  console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js user");
// }
// JsUser.greetingtwo = function(){
//     console.log(`Hello World, ${this.name}`)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());/


// Object class ----2:  -----

//const tinder = new Object();

const tinder = {};

tinder.id ="123ds"
tinder.name = "Deepak"
tinder.isLoggedIn = false;

// console.log(tinder);
// console.log(typeof tinder);

const regularuser = {
    eamail: "Deepak",
    fullname: {
        firstname: "Deepak",
        Lastname: "Singh", 
    }
}

// console.log(regularuser.fullname.firstname);
const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4: "d"};
// const obj3 = Object.assign({} , obj1, obj2);//All the value can assen in empyty{} Object
const obj3 = {...obj1,...obj2}
//  
 

const user = [
    {
        id: 1,
        email: "Deepaksingh@gmail.com",
    },
    {
        id: 2,
        email: "Dinesh@gmail",
    },
    {

    },
]
user[1].email
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(tinder.hasOwnProperty('isLoggedIn'));/

const course = {
    coursename : "JavaScript",
    courseduration: "40Hr",
    courseyear: "2023",
}

const{courseyear} = course;
console.log(courseyear);
