const user = {
    userName : "Deepak Singh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
    }
}

// user.welcomeMessage();
// user.userName = "Anmol jha"
// user.welcomeMessage();

// function chai(){
//     let username = "Deepak Singh";
//     console.log(this.userName)
// }
// chai();//undefine

// const chai = function(){
//     let usename = "Deepak";
//     console.log(this.usename);
// }

// chai();

const chai = ()=> {
    let usename = "Deepak";
    console.log(this.usename);
}

//chai();

// const addTwo = (num1, num2) =>{
//     return num1+num2//explicit return
// }
const addTwo = (num1, num2) => num1+num2//Implicet return


console.log(addTwo(23,45));