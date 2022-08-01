console.log("This is tut45");
 //  regular expression charecter set

  //charecter set -[]
let regex = /bi[a-z]lab/;  //ekhane a-z er modhye charecter likle hobe 
  regex = /bi[aty]lab/;  //ekhane aty(a,t,y) er modhye charecter likle hobe 
  regex = /bi[^aty]lab/;  //ekhane aty(a,t,y) er modhye charecter likle hobe na
  regex = /bi[^aty]la[abc]/; //ekhane aty(a,t,y) er modhye charecter likle hobe + a,b,c er modhye charecter likle hobe
  regex = /bi[a-zA-Z]la[abc0-9][0-9]/;  //we can have as many charecter set as we want

let str = "biplab mondal";


// quantifiers
   regex = /bi{2}plab bhai/;  //"i" dubar dite hobe
   regex = /bi{0,2}plab bhai/; //"i" 0 theke 2(0,1,2) dite hobe

    str = "biplab bhai";


   //  groupings  -()
   regex = /(bi){0,2}[0-9]plab bhai/;
   str = "bibi3plab bhai";
     
console.log(regex.exec(str));
 
 if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
 }
 else {
    console.log(`The string ${str} did not match the expression ${regex.source}`);
 }
