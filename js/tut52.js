 console.log("This is tut52");
//  Symbol in javascript

 //Symbol ekta primitive data type and eta unique value provide kore
 let sym1 = Symbol("This is symbol");
 let sym2 = Symbol("This is symbol");
  console.log(sym1);
  console.log(typeof sym1);

  let a = "biplab";
  let b = "biplab"
//   console.log(Symbol("This is symbol") === Symbol("This is symbol"));
  console.log(sym1 === sym2);
  console.log(undefined===undefined);
  console.log(55===55);
  console.log(a===a);
  console.log(null===null);

  

//   let obj = {
//     k1:Symbol("Identifier k1"),
//     k2:Symbol("Identifier k2")
//   }
//   console.log(obj);


//blank object er modhye value store kora holo
let k1 = Symbol("Identifier k1");
let k2 = Symbol("Identifier k2");
let obj = {};
 obj[k1] = "biplab";
 obj[k2] = "kaushik";
 obj["age"] = 18;
 obj.learn = "javascript";   //"." diye Ooo kora jai
 console.log(obj);


 //for..in loop "Symbol" ke ignore kore 
 for (const key in obj) {
     console.log(key, obj[key]);   
 }

 
 console.log(JSON.stringify(obj));

