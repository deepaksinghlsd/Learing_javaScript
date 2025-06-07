// let : let have block scope and it have must declared before use and cannot redeclared insame scope
// const : const cannot be redeclared and reassigned and its have also blockScope.
// var: var have globle scope it can alose reassigned

//  <-- Data types injava scrip-->
//   Java_Script have 8 datatypes:-
//   1. String
//   2. Number
//   3.Bigint
//   4.Boolean
//   5. Undefine
//   6. Null
//   7.object
//   8. symbol
  
//   The Object data Type:-
//   1) Array
//   2) Object
//   3) Date


// Function:--
// function is block of code designedd to perform a paerticuler
// function myFunction(){
//   console.log("Hello User");
// }
// myFunction();


//   Object

// const car= {
//   car1:"BMW",
//   car2:"Lamborghini",
//   car3 :"Ferrari"
// };

//  console.log(car);
//  console.log(Object.keys(car) + "key");
//  console.log("Value" + Object.values(car));
//  console.log(Object.entries(car));


// String____
//  String: String are for strong text and written with quotes;
   
//  String some method:--
// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()


// String Search methods:__
// String indexOf()
// String lastIndexOf()
// String search()

// let Name  = "Deepak Singh";
// console.log(Name.search("e"));

// Array :---
const cars = ["BMW", "ferarri", "lamborgine", "toyota"];

const NUM = [5,67,89];
const NUM2 = [11,15,17,20];

// console.log(cars.length);

// console.log(NUM.toString());// to string converts the array to a string of comma seprate
// console.log(cars.toString());//output:-BMW,Ferrari,lamborgini,toyota

// console.log(cars.at(2));// it display the valuue of index
// output:- lamborgini
// console.log(NUM.concat(NUM2)) ;// concat is used to merge two arrays
// console.log(NUM.join(" * "));// join is used to make a string from an array by giving a separator
// output :-5 * 67 * 89
// const ds = cars.pop();
// console.log(ds);//output: toyota

// console.log(cars)
//output:-BMW, ferarri, lamborgini

// const Apush=cars.push('Audi');
// console.log(cars);// its display all itrms in car along with audi

// console.log(Apush);// its display the length of the  array after adding new item
// // output:-5

// console.log(cars);
// const Aspliced = cars.splice(0,2, "scrpo","KIWi");// romeve the element in arrar and add some elemen t in same postion by giving the index no
// console.log(Aspliced);
// console.log(cars);

// const Aflat=cars.flat();
// console.log(Aflat);

//array find And search Method:--

// console.log(NUM.indexOf(5));
// console.log(NUM.includes(5))//its check the element are prent are  not if yes then return true and if no then false retun

// Scorting Method
// sorting for number

// console.log(NUM.sort(function(a , b){return a-b}));
// console.log(NUM.sort(function(a ,b){return(b-a)}));
// console.log(Math.max(...NUM));
// console.log (Math.min(...NUM));

//write a function to find the lowerst elemdent in array
// function  lowestelemnet(arr){
//   let len = arr.length;
//   let min = Infinity;
//   while(len--){
//     if(arr[len]<min){
//       min=arr[len];
//     }
//   }
//   return min;
// }
// console.log(lowestelemnet(NUM));

// Write a function to find the higest number in array

// function higestElement(arr){
//   let max= -Infinity;
//   let Len  = arr.length;
//   while(Len--){
//     console.log("--->" + max);
//     if(arr[Len]>max){
//       max=arr[Len];
//     }
//   }
//   return  max;
// }
// console.log(higestElement(NUM));

//sorting for the alphabet

console.log()