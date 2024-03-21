// #javascript and classses

// #oop

// #object
// // collection of propertise and method
// ex:-
// toLowerCase

// ##why use Oop:-
// Object literal
// - Constructor function
// -Prototype
// -classses
// -instanceof(new,this);

// #4 Pillars
// Abstraction 
// Encapsulation 
// Inheritance
// Polymorphism

//  *************Code********:--------

// Object literal:-

const user = {
    username : "Deepak",
    logincount: 8,
    singnIn : true,

    getUserDetails : function (){
        console.log("Got User details from DataBase");
        //This is used for current context:-
        // console.log(`Username: ${this.username}`);
        // console.log(this);//Its prine the current contestans

    }

}
// console.log(user.username);
// // console.log(user.getUserDetails());this
// console.log(this);


//+++++ constructure functuon:______

function User( username , loginCounr, isLoggedIn){
    this.username = username;
    this.loginCounr = loginCounr;
    this.isLoggedIn= isLoggedIn

    return this
}

const userOne = new User("Deepak", 13, true);
const userTwo = new User ("Shubham", 11, false);
console.log(userOne); 




