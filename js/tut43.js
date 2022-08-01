console.log("This is tut43");
 //regular expression in javascript

 let reg = /biplab/;  //eta ekta regular expression banano holo
//    reg = /biplab/i;  // "i" means case insensetive
//   reg = /biplab/g;   // "g" means flag
  console.log(reg);
  console.log(reg.source);
  console.log(typeof reg);

//   let str = "My name is bIPLab and my real name is biplab";
  let str = "My name is biplab and my real name is biplab";
   
  //functions of regular expression
//   1.exec()   --->eai function "array" return kore jodi regular expression match hoi / na hoi "null"
    let result1;  
     result1 = reg.exec(str);  
    // console.log(result1);

     result1 = reg.exec(str);  
    // console.log(result1);

     result1 = reg.exec(str);  
    // console.log(result1);


    // if (result1) {
    //     console.log(result1);
    //     console.log(result1.index);
    //     console.log(result1.input);
    // }



    // 2.text() ---> eai function "true" return kore jodi regular expression match hoi / na hoi "false"
    let result2;
     result2 = reg.test(str);
    // console.log(result2);
 
     result2 = reg.test(str);
    // console.log(result2);
 
     result2 = reg.test(str);
    // console.log(result2);
 
    

    // 3.match() ---> eai function "array" return kore jodi regular expression match hoi / na hoi "null"
     let result3;
    //   result3 = reg.match("str");  //This is wrong!!
      result3 = str.match(reg);   //This is right
    //   console.log(result3);

    
      
    //   4.search() --->  eai function "index" return kore jodi regular expression match hoi / na hoi "-1"
    let result4;
    //   result4 = reg.srarch("str");  //This is wrong!!
      result4 = str.search(reg);   //This is right
    //   console.log(result4);



 //5.replace ---> eai function/method all replace kore dai (jodi flag na dile first jeta match korbe seta replace hobe)
 let result5;
//   result5 = reg.replace(str,"Kaushik");   //This is wrong!!
  result5 = str.replace(reg,"Kaushik");    //This is right
  console.log(result5); 

  