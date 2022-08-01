console.log('This is my data type session');

/* Data type:
  1. Primitive data type 
  2. Reference data type 
*/

// 1. Primitive data type 
 //String
 let name = "Biplab";
  console.log(name,": "+"Data type is " + (typeof name));


//Number
let age =18;
console.log(age,": "+"Data type is " + (typeof age));


//Boolean
let isDriver = true;
console.log(isDriver,": "+"Data type is " + (typeof isDriver));


//Null
 let nullvar = null;
console.log(nullvar,": "+"Data type is " + (typeof nullvar));
 

//undefined
let undef = undefined;
console.log(undefined,": "+"Data type is " + (typeof undefined));




  // 2. Reference data type 
//  Array
let arr = [2,3,4,5,6,false,"string"];
console.log(arr,": "+"Data type is " + (typeof arr));
 

// Object literals
let obj ={
  name:"Biplab",
  roll:53,
  learn:"Javascript"
}
console.log(obj,": "+"Data type is " + (typeof obj));



// function
function func1() {
  
}
console.log(func1,": "+"Data type is " + (typeof func1));


// Date
let date = new Date();
console.log(date,": "+"Data type is " + (typeof date));

