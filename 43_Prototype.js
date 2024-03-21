function multipleBy5(num){
    return num*5
}

multipleBy5.power =2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username =  username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++// this mean jis nr v call kiya uska kam ker do;
}

createUser.prototype.printMe = function(){
    console.log(`prise is ${this.score}`)
} 

const chai = new createUser("chai", 25);
const tea = new createUser("tea",250);
chai.printMe()

//****PROTOTYPES  */

let myName = "Deepak";
 console.log(myName.length);

 console.log(myName.trim().length);

//   console.log(myName.trueLength());


let myheros = ['thor', "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman} `);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}
heroPower.hitesh();

Array.prototype.heyDeepak = function (){
    console.log(`deepak says hello`);
}
myheros.heyDeepak()



// inheritance
const user = {
    name: "Deepak",
    email: "ds9523717267@gmail.com"
}
const Teacher = {
    makeVidio: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= user

// modern syntax

object.setprototypeOf(TeachingSupport, Teacher);


let anotherUsername = "DeepakSingh   "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is:${this.trim().length}`);
}

anotherUsername.trueLenght()
"deepak".trueLenght()

