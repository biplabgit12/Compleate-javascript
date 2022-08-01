console.log("Javascript String property,method and template literals");

// charAt method
// let myString = "Javascript!!";
// console.log(myString.charAt(10)); // "charAt" method kono string er index onujai charactar diye dei


// concat method
// let str1 = "Javascript ";
// let str2 = str1.concat("is awesome");  //"concat" method duto string ke jure dei
// console.log(str2);


// indexOf method
// let str1 = "Hi my name is biplab";
// let str2 = str1.indexOf("is"); 
//  str2 = str1.indexOf("hfie"); //charecter na powya gele "-1" dekabe
//  console.log(str2);


//  Slice method
// let text = "Good Morning";
//  let str = text.slice(0,4); //"slice" method starting and ending number nai and string er modhye diye index anujai charecter diye dai
//  console.log(str);


//Split method
//  let txt = "a,b,c,d,e";
// let splt = txt.split(","); //split method kono string ke array te convert kore
// console.log(splt);
// console.log(splt[1]);


//subString method
// let str1 = "My name is biplab";
// let str2 = str1.substring(0,2);
// console.log(str2); 


//toLowerCase method
//  let text = "PRITAM";
// let text2 = text.toLowerCase();
// console.log(text2);

//toUpperCase method
// let text = "biplab";
// let text2 = text.toUpperCase();
// console.log(text2);


// search method 
// let str1 = "My name is biplab";
// let str2 = str1.search("name"); //search method string er modhye value ta koto number position e ache seta diye dei
// console.log(str2);


// substr method 
//  let str1 = "Apple,Banana,Mango";
//  let str2 = str1.substr(1,4); //slice and substr method smiler
//  console.log(str2);



// let fName = "Biplab";
// let lName = "Mondal";
// let greeting = `Welcome to ${fName} ${lName}`
// console.log(greeting);


// let html = `<h1>This is a heading.</h1>
//             <p>This is my para.</p>`;

// console.log(html.length);     
// console.log(html.toUpperCase());  
// console.log(html[1]);     
// console.log(html.indexOf(">"));     
// console.log(html.lastIndexOf(">"));     
// console.log(html.charAt(3));
// // console.log(html.endsWith(">jdcfh"));
// console.log(html.endsWith(">"));
// console.log(html.includes(">"));
// console.log(html.substring(1,6));
// console.log(html.slice(0,4));
// console.log(html.split(" "));
// console.log(html.replace("This","It"));
// console.log(html.replaceAll("This","It"));


let name = "Biplab";
let fruits1 = "Orange";
let fruits2 = "Mango";
let myHtml = `Hello ${name}
  <h1>This is my heading</h1>
  <p>You like ${fruits1} and ${fruits2}
`;
document.body.innerHTML = myHtml;