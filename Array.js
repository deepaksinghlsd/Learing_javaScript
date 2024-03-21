//Array:--

// const myArry = [0, 1, 2, 3, 4, 5];
// const Myheroes = ['aajdh' , 'Bhagat Singh' , 'Sukhdev' , 'Rajgure'];
// const myNewarry = new Array(1,2,3,4);
// console.log(myNewarry[0]);

// Array Methods:---
// myArry.push(6)
// console.log(myArry);
// myArry.pop();
// myArry.unshift(12);//Add on the start of the array;
// myArry.shift();//remove the element in start of array
// console.log(myArry.indexOf(9));
// console.log(myArry.includes(9));

// const newArry = myArry.join();

// console.log(myArry);
// console.log(newArry);
// console.log(typeof newArry);//String

//slice, splice;

// console.log("A ",myArry);

// const myn1 = myArry.slice(1, 3);
// console.log(myn1);
// console.log("B",myArry);

// const myn2 = myArry.splice(1, 3);//It change the original arry
// console.log("c" ,myArry);
// console.log(myn2);

const heroes =["rithik", "Akshay", "Govandha"];
const Heroine =["dipika","Aliya","katrina"];
// heroes.push(Heroine);
// console.log(heroes);

// const allActor = heroes.concat(Heroine);
// console.log(allActor);/

const all_Actor = [...Heroine,...heroes];
// console.log(all_Actor);

const Mix_Arrey =[1,2,3,4,5,6,7,[2,3,4,5],4,5,[3,4,,6]]
const realArra = Mix_Arrey.flat(Infinity);
console.log(realArra);

console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));
console.log(Array.from({name: "Hitesh"}));// intersting

 let Score1 = 100;
 let Score2 = 200;
 let Score3 =300;
 console.log(Array.of(Score1,Score2,Score3));