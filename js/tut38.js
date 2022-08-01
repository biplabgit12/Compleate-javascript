console.log("This is tut38");
//  Promise in javascript

// Promise:-
//  1.resolved
//  2.reject
//  3.pending

 function func1(){
    return new Promise(function (resolve,reject){
        setTimeout(() => {
         let error = true;
          if (!error) {
              resolve();
             console.log("Your promise has been resolved.");
            } 
          else {
              reject("Sorry not fulfiled"); 
             console.log("Your promise has not been resolved.");
          }
        }, 2000);      
    })
 }

 func1().then(function (){
    console.log("Thanks for resolving");
 }).catch(function (error){
    console.log("Very bad bro Reason: " + error);
 })