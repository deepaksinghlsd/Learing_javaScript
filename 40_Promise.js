const promiseOne = new Promise(function(resole, reject){
   //Do an async task
   // DB calls, cryptography, network
   setTimeout(function(){
        console.log('Async task is compelete');
        resole()
   },1000)
});
promiseOne.then(function(){
    console.log("Promise consume");
})

new Promise(function(resole,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resole();
    },1000)
}).then(function(){
    console.log("Asyn 2 Resolved");
})

const PromiseThree = new Promise(function(resole, reject){
    setTimeout(function(){
        resole({username:"Chai", email:"ds9523717267@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const Promisefour = new Promise(function(resole, reject){
  setTimeout(function(){
    let error= false;
    if(!error){
        resole({username:"Deepak", Email : "ds9523717267@gmail.com"})
    }else{
        reject("ERROR :Something went wromng")
    }
  },1000)  
})

Promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolve or rejected"));


const promiseFive = new Promise(function(resole,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resole({username:"Sbnam", Sirname:"Singh"})
        }else{
            reject("Error: js went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
//  // It provide ene eeror when the code are rejected:
    try {
        const response = await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()