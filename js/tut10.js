console.log('welcome to tut10');
   //FUNCTION IN JAVASCRIPT 

 //Function Declaration:-
//   function printMessage(gret) {
//       console.log(gret);
//   }
//  printMessage('Good Morning');




// Function expressions
//  let add = function(a,b){
//      return a+b;    // return  use korar fole return er value ta add namok function er modhye chole giyeche
//  }
  // console.log(add(2,3));




// Function Declaration:-
//    function getDistance(speed,time){
//       let dist = speed*time;
//       return dist;   //return    use korar fole return er value ta getDistance  namok function er modhye chole giyeche
//   }
  //let getDist = getDistance(10,5);   //return   use korle function ta  ecta variable er modhye store korte hoi  and tarpor print korte hoi 
 //  console.log(getDist);



//  function diye return value 
// const gretMessage = function(name,thank='Thank you') {
//      let msg = `Happy birthday ${name}  How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
     
//      return msg;
// }
//  let name = 'Pritam';
//  let name2 = 'sahin';
//  let gret = gretMessage(name,'Thank a lot ');
//  console.log(gret);




//    Object diye return value
//   let obj = {
//     name:'Biplab',
//     game:function(){
//         return 'GTA';
//     }
//   }
//   console.log(obj.game());



// let arr = ["Biplab","Pritam","Subrata","Sahin"];
// arr.forEach(function(element,index,array){
//      console.log(element,index);
//   });

 











// scope
  if (1) {
//   var i = 50;  //ekhane var variable use korle global scope toiri hoi
   let i = 50;
  }
  

 function gret() {
     let i = 8;
     console.log(i);
 }
 
  











