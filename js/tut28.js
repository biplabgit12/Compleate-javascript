console.log('Welcome to tut28');
  //Object Prototype in javascript

   //simple object
  let obj = {   //eai object er sathe nicher constructor er somporko nei
    name:"biplab",
    roll:53,
    language:"javascript",
    learn:function(){
      console.log("I am learn javascript");
    }
 }

 

 //constructor by prototype
 function myObj(givenName) {
    this.name = givenName;  
 }

  //prototype
 myObj.prototype.roll = 53; //number value jog kora holo
 myObj.prototype.language = "css"; //string value jog kora holo
 myObj.prototype.get = function(){  //function  jog kora holo
   console.log("insert a function by prototype");
 }
 let obj2 = new myObj('biplab');
 console.log(obj2);

 