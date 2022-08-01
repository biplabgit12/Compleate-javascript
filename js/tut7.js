console.log('welcome to tut7');
  // ARRAY AND OBJECT IN JAVASCRIPT

 let marks = [12,23,34,45,56,67,78];
 let name = ['Biplab','Pritam','sahin','subrata'];
 let mixed = ['biplab',53,true,[2,3,4,5,6]];
 let arr = new Array(276,89,09,56,43); // new metnod use korle  natun array toiri hoi
console.log(marks);

  console.log(marks[3]);
console.log(name);
console.log(mixed);
console.log(arr);
console.log(name.length);
console.log(Array.isArray(name)); // Array.isArray method  excecute kore je eta array kina ?
 arr[0] = 'Biplab';
 let arrelement = arr[0];

console.log('element:', arrelement);
console.log(arr);
let valueIndex = marks.indexOf(34);
console.log(valueIndex);

// Mutating or Modifying  Arrays
marks.push('biplab');
marks.unshift('kaushik');
marks.pop();
marks.shift();
marks.splice(1,3);
marks.reverse();
console.log(marks);


let marks2 = [123,432,56677];
marks = marks.concat(marks2);
 console.log(marks);



 // Object
  let myObj = {
    firstName:'Biplab',
    age:18,
    isActive:true,
    mark:[90,65,54,5443]
 }

console.log(myObj);
console.log(myObj.age);




