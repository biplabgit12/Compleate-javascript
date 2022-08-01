console.log("This is tut40");
//  async await 

async function Biplab(){
  console.log("Inside biplab function");
  let response = await fetch("https://api.github.com/users");
   console.log('before response');
   let users =await response.json();
   console.log('user resolved');
   return users;  
}


console.log('before calling biplab object');
let a =  Biplab();  //variable er modhye store korle ooo function ta run hochhe
console.log('after calling biplab object');
 console.log(a);  //eta pending hochhe
 a.then(function (data){  //"a" ta "data" namak parameter er modhye chole ashe
    console.log(data);  //eta resolved hochhe
 })
 console.log("last line of this js file");