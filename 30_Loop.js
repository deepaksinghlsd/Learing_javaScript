// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


// let index =0;
// while (index <=10) {
//     console.log(`Value of index is ${index}`);
//     index = index+2;
// }


// let index = 10;
// do {
//     console.log(`index is ${index}`);
//     index++;
// } while (index <=10);

// for of

const arry = [1, 2, 3, 4, 5]

for (const num of arry) {
    // console.log(num);
}

//map

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United State og Amerca")

// // console.log(map);

// for (const [key , value ] of map) {
//     // console.log(key, ':-', value);
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby'
// }

// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
           
// }

// const codiing = ['js', "ruby", "java ", "python", "cpp"];

// codiing.forEach( function (item) {
//     console.log(item);
// })

// codiing.forEach( (item)=>{
//     console.log(item);   
// } )

// function printMe(Item){
//     console.log(Item);
// }

// codiing.forEach(printMe)


// codiing.forEach( (item , index, array)=>{
//     console.log(item, index, array);
// } )


// const myCoding = [
//     {
//        languageName: "JavaScript",
//        languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "c++",
//         languageFileName: "cpp"
//     }
// ]

// myCoding.forEach( (item)=> {
//     console.log(item.languageName);
// })


//30 lecture

// const codiing = ['js', "ruby", "java ", "python", "cpp"];

// const value = codiing.forEach( (item)=>{
//     console.log(item);
// })

// console.log(value);//its return undefine;


// const myNumber = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNumber.filter( (num) => num > 4);

// const newNum = [];
// myNum.forEach( (num) => {
//     if(num > 4) {
//         newNum.push(num)
//     }
// });

// console.log(newNum);


// const newNumbs = myNumber.map( (num) => num+10);

// const newNums = myNumber
//                      .map( (num)=> num * 10)
//                      .map( (num) => num + 1)
//                      .filter( (num) => num >=40)
// console.log(newNums);


//      Reduse.js __---------------

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`Acc:${acc} and currant vallue${currval}`);
//     return acc+currval;
// }, 0)

// console.log(myTotal);

const MyTotal = myNums.reduce( (acc, currval) => acc+currval,0)
console.log(MyTotal);


const shoppingCart = [
    {
        itemName : "js course",
        prise : 2999,
    },
    {
        itemName : "Developement ",
        prise : 3999,
    },
    {
        itemName : "Data Science",
        prise : 5999,
    },
    {
        itemName : "Andiodid development ",
        prise : 6000,
    }
]

const totalPrise = shoppingCart.reduce( (acc, item) => acc + item.prise , 0 );
console.log(totalPrise);