 console.log("This is tut53");
//  Destructuring in javascript

let a;
let b;
[a,b] = [12,23];
console.log(a,b);

[a,b,c,...d] = [1,2,3,4,5,6,7,8,9];
console.log(a);
console.log(b);
console.log(c);
console.log(d);



//Array destructuring
({a,b,c,...d} = {a:2,b:3,c:4,d:5,e:6})
console.log(a,d,c,d);

// let fruits; 
//  fruits = ["mango","banana","apple"]
// [a,b,c] = fruits;
// console.log(a,d,c);




// Object destructuring
 let obj = {
    Name:"biplab",
    roll:53,
    age:18,
    learn:"Javascript",
    start:function (){
      console.log("started");  
    }
 }
//  console.log(obj);
 console.log(obj.age);  //destructuring na korle eai bhabe kote hoto
 const {Name,roll,age,learn,start} = obj;
  console.log(Name,roll,age,learn,start);
  start();