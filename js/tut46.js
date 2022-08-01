 console.log("This is tut46");
  //regular expression shorthand property

//   charecter classes
  let regex = /\wiplab/;  //"w" mane holo "iplab" er aage jekono ekta word thakte hobe  
 regex = /\w+iplab/;  //"w" mane holo "iplab" er aage jekono ekta/onek  word thakte hobe  
 regex = /\Wiplab/;  //"W" mane holo "iplab" er aage ekta word thakte hobe na space thakte hobe 
 regex = /\W+iplab/;  //"W" mane holo "iplab" er aage kono word thakte hobe na space thakte hobe 
 regex = /\d999/;  //"d" mane holo "999" er aage jekono ekta digit thakte hobe 
 regex = /\d+999/;  //"d" mane holo "999" er aage ekta/onek digit thakte hobe 
 regex = /\D999/;  //"D" mane holo "999" er aage kono digit thakte hobe na 
 regex = /\D+999/;  //"D" mane holo "999" er aage ekta/onek digit thakte hobe na 
 regex = /\s999/;  //"s" mane holo "999" er aage ekta space thakte hobe 
 regex = /\s+999/;  //"s" mane holo "999" er aage ekta/onek space thakte hobe 
 regex = /\S999/;  //"S" mane holo "999" er aage ekta space thakte hobe na
 regex = /\S+999/;  //"S" mane holo "999" er aage ekta/onek space thakte hobe na
 regex = /\b999/;  //"b" mane holo "999" er aage ekta word er space thake hobe
 
let str = "biplab  2 99999999 mondal";


// assertion
regex = /b(?=i)/; //er mane holo "b" er pore jano "i" thake
regex = /b(?!i)/; //er mane holo "b" er pore jano "i" na thake

str = "biplab mondal"

console.log(regex.exec(str));
 
 if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else {
    console.log(`The string ${str} did not match the expression ${regex.source}`);
 }
