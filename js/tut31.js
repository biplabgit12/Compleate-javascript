console.log("Welcome to tut30.js");
 //Classes and Inheritence

class Employee{
    constructor(givenName,givenExperience,givenDivision){
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

   joiningYear(){
      return this.experience - 2022;
   } 

  static add(a,b){
    return a*b;
  } 
}



class Programmer extends Employee{
  constructor(givenName,givenExperience,givenDivision,givenLanguage,givenGithub){
     super(givenName,givenExperience,givenDivision);
     this.language = givenLanguage;
     this.github = givenGithub;
  }

  favoriteLanguage(){
    if(this.language == "python"){
      return "python";
    }
   else {
     return "javascript";    
    }
  }

}



// let Biplab = new Employee("Biplab",4,"Division");
// console.log(Biplab);
// console.log(Employee.add(2,4));
// console.log(Biplab.joiningYear());


let Pritam = new Programmer("Pritam",6,"Division","javascript","pritam4025");
console.log(Pritam);
console.log(Pritam.github);
console.log(Pritam.favoriteLanguage());


