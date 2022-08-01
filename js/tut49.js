console.log("This is tut50");
//  "for in" and "for of" loop in javascript

//   "for of" loop
 let arr = ['biplab','kaushik','subrato','sahin','ripon'];

//   array itrate by "Traditional for loop" 
//    for (let index = 0; index < arr.length; index++){
//     const element = arr[index];
//      console.log(element);  
//    }


//   array itrate by "for of" loop
//   for (const name of arr){   //kono array ke itrate korte hole "for of"  loop use korle bhalo
//      console.log(name);
//    }





   let str = "Javascript Language";

//   str itrate by "Traditional for loop" 
//    for (let index = 0; index < str.length; index++){
//         const element = str[index];
//          console.log(element);  
//        }


//   str itrate by "for of" loop 
//   for (const string of str){
//      console.log(string);
//   }
    





// "for in" loop
 let obj = {
    name:"biplab",
    age:18,
    language:"javascript",
    done:"false"
 }

//  object itrator by "Traditional for loop"
//  for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
//  }


//  object itrator by "for in" loop
//   for (const key in obj) {   //object ke itrate korte hole "for in" loop use korle bhalo
//      const element = obj[key];
//     console.log(element);    
//   }


  str = "Javascript Language";
//   str itrate by "Traditional for loop" 
    //  for (let index = 0; index < str.length; index++){
    //       const element = str[index];
    //        console.log(element);  
    //  }


    //  str itrate by "for in" loop
     for (const key in str) {
        const element = str[key];
        console.log(element);    
     } 