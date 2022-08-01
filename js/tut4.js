console.log("This is type conversion and type coercion");

// Number Conversion
// let num;

//   num = Number("234");
//  console.log(num+" = "+"Type is"+": "+(typeof num));

// num = Number(true);
// num = Number(false);
// console.log(num+" = "+"Type is"+": "+(typeof num));


// num = Number("");
// console.log(num+" = "+"Type is"+": "+(typeof num));

// num = Number("string");
// console.log(num+" = "+"Type is"+": "+(typeof num));

// num = Number(undefined);
// console.log(num+" = "+"Type is"+": "+(typeof num));





// Boolean Conversion
// let bool;
// bool = Boolean(1);
// console.log(bool+" = "+"Type is"+": "+(typeof bool));

// bool = Boolean(0);
// console.log(bool+" = "+"Type is"+": "+(typeof bool));

// bool = Boolean("string");
// console.log(bool+" = "+"Type is"+": "+(typeof bool));

// bool = Boolean("");
// console.log(bool+" = "+"Type is"+": "+(typeof bool));






// String Conversion
// let str;
// let a = 90;

//  str = String(a)
//  console.log(str+" = "+"Type is"+": "+(typeof str));

//  str.toString();  //toSring methodaeibhabe likte hoi
//  console.log(str+" = "+"Type is"+": "+(typeof str));






// String Conversion
//  let str;
//  str = 3+"4";
//  console.log(str);

//  str = 23+true;
//  console.log(str);

// str = '0' + null;
// console.log(str);
 


//Number Conversion
// let num;

//  num = '4'+'4';
// console.log(num);

// num = '4'*5;
// console.log(num);

// //null Conversion
// let bool = '5'-true;
// console.log(bool);






// Type Coversion
// String
let str;
 str = String(12);
 console.log(str+" = "+"Type is"+": "+(typeof str));

 str = String(true);
 console.log(str+" = "+"Type is"+": "+(typeof str));

 str = String(new Date());
 console.log(str+" = "+"Type is"+": "+(typeof str));

 str = String([2,3,1,5,8]);
 console.log(str+" = "+"Type is"+": "+(typeof str));

 str =23;

  str= str.toString();
 console.log(str+" = "+"Type is"+": "+(typeof str));





//  Number
 let num;
 num = Number("2763");
 console.log(num+" = "+"Type is"+": "+(typeof num));

 num = Number(true);
 console.log(num+" = "+"Type is"+": "+(typeof num));

 num = Number([1,2,3,4,5]);
 console.log(num+" = "+"Type is"+": "+(typeof num));

num = parseFloat('23.623578');
// num = parseInt('23.623578');
console.log(num+" = "+"Type is"+": "+(typeof num));

console.log(num.toFixed(3),(typeof num));





//Type Coercion
let myStr = Number("452");
let myNum = 32;

console.log(myStr + myNum);