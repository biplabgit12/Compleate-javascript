console.log("This is tut37");
//  callback function 

 let Students = [
    {name:"Biplab",roll:53},
    {name:"Pritam",roll:48}
 ];

  console.log(Students);

 function enrollStudent(student,callback){
    setTimeout(function(){
        Students.push(student);
        callback();
        console.log("student has been enrolled");
    }, 5000);
 }
 
 function getStudent(){
    setTimeout(function(){
    let str = "";
      Students.forEach(function (std){  //std ta eai Students ke bojache
        str += `<li>${std.name}</li>`;
        document.getElementById("Student").innerHTML = str;
        console.log("student have been fetched");

      })  
    }, 1000);
 }

  let newStudent =  {name:"Kaushik",roll:43};
 enrollStudent(newStudent,getStudent);
//  getStudent();