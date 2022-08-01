console.log('welcome to tut20');
//local storage and session storage

// local storage
// let setname = localStorage.setItem('Name', 'biplab');
// let setname2 = localStorage.setItem('Name2', 'pritam');

// let get = localStorage.getItem('Name');
// console.log(get);



//object set 
// let myobj = {
//     Fname:'Biplab',
//     Lname:'mondal',
//     age:18
// }

// localStorage.setItem('obj',JSON.stringify(myobj));
// let a = JSON.parse(localStorage.getItem('obj'));
// console.log(a.Fname);



 //Local Storage 
//Add a key-value pairs inside local storage
//  let arry = ['Computer','Cpu','Mouse'];

// localStorage.setItem('Name','Biplab');
// localStorage.setItem('Name2','Kaushik'); 
// localStorage.setItem('arr',JSON.stringify(arry));

// let Get = localStorage.getItem('Name');
//  Get = JSON.parse(localStorage.getItem('arr'));
// console.log(Get);
//  console.log(Get[0]);

//   //clear the entire local storage 
// // localStorage.clear();


//  //clear a perticular key-value pairs
// localStorage.removeItem('Name');



//Session Storage
  sessionStorage.setItem('NAME','sBiplab');
  sessionStorage.setItem('NAME2','sKaushik');
  
 let get = sessionStorage.getItem('NAME2');
console.log(get);

