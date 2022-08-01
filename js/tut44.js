console.log("This is tut44");
//  regular expression Meatacharecters

//  lets look into some metacharecters
let regex = /biplab/;
   regex = /^bipla/; // "^" means is starts with   mane  first theke string gulo mile jete hobe
   regex = /mondal$/; // "$" means is ends with   mane  last theke string gulo mile jete hobe
   regex = /bi.lab/;  //"." means is jekono ecta charecter mille hobe
   regex = /bi*lab/;  //"*" means is 0 or more charecters
   regex = /bip?labz?/; //"?" means is ? er ager jekono charecter optional
   regex = /bi*\lab/;


let str = "biplab means biplab mondal";
console.log(regex.exec(str));
 
 if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else {
    console.log(`The string ${str} did not match the expression ${regex.source}`);
 }


//  "\" eta holo back slash
//  "/" eta holo forword slash