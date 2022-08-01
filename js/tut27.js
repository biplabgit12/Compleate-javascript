console.log("Welcome to tut27");
   //Object oriented programming(OOP) in javascript

   //Simple object
 let obj = {
    name:"biplab",
    roll:53,
    language:"javascript",
    learn:function(){
      console.log("I am learn javascript");
    }
 }

//  console.log(obj);




//Object oriented programming(OOP)
//  new Date();  //"new" keyword diye dile constructor toiri hoea jai 


//Building a constructor
 function car(givenName,givenSpeed) {  // Ecta object constructor baniye neya holo jate "new" keyword diye object banano jai
    this.name = givenName;  // Ekhane "this"(keyword) bolte aei function/constructor er name(car) ke bojhai 
    this.speed = givenSpeed;
    this.run = function (){
      console.log(`${this.name} car is running`);
    };
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.speed}km/h than Mercedes`);
    } 
 } 

 let car1 = new car("Nisan",120);  // Ekhane "new" keyword use kore "car" namok constructor ke Object ae porinoto kora holo
 let car2 = new car("Alto",80);
 let car3 = new car("Mercedes",200); 

  console.log(car1);
  console.log(car2);
  console.log(car3);

  console.log(car1.run());
  console.log(car1.analyze());

  
