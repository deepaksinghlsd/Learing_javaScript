//generate rand bacground colour
const randomColour = function(){
    const hex = "0123456789ABCDEF"
    let colour = "#"
    for(let i =0; i<6; i++){
        colour+=hex[Math.floor(Math.random()*16)];
    }
    return colour;
};
let intervalId;
const startChangingColour = function(){

    if(!intervalId){
        intervalId = setInterval(changeBgColour,2000);
    }
    function changeBgColour(){
        document.body.style.backgroundColor = randomColour();
    }
}
const stopChangingColour = function(){
    clearInterval(intervalId);
    intervalId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColour);
document.querySelector('#stop').addEventListener('click', stopChangingColour);
document.querySelector('h1').innerHTML=ram;

