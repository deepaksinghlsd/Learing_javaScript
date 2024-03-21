

// function myName(){
//     console.log("deepak");
// }
// myName()

// function Addtwonum(nuber1 , nuber2){
//     console.log(nuber1+nuber2);
// }

// function Addtwonum(nuber1 , nuber2){
//     let result = nuber1 +nuber2;
//     console.log("The sum of two number");
//     return result;
// }

// const result = Addtwonum(23, 45);
// console.log("result:",result);


function loginUserName(Username){
    if(Username === undefined){   //!username
        console.log("Please enter user name");
        return
    }
    return `${Username} just logged in`
}
// console.log(loginUserName("Deepak"));/

function CalculatePrise(...num1){
    return num1;
}
// console.log(CalculatePrise(200,300,400));

const user = {
    userName: "Deepak",
    price: 999,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user);

const myNewArray = [200,100, 400, 500]
function returnArrayValue (getArray){
    return getArray[2];
}
// console.log(returnArrayValue(myNewArray));/
// console.log(returnArrayValue([300,500,700,600]));