console.log("welcome to tut 24");
  //Javascript date object

  let today =new Date();
//   console.log(today);

  let otherDate = new Date("02-03-2022 04:33:12");
    //   otherDate = new Date("jun 24 2022");
    //   otherDate = new Date("08/02/2022");   
             
  console.log(otherDate);
 // get method
  let a;
  a = otherDate.getDate();  // get method er somoy variable dhora jai karon ekta date deya roeche sekan theke get(dorkar ginis) korte hoche 
  a = otherDate.getDay();
  a = otherDate.getFullYear();
  a = otherDate.getHours();
  a = otherDate.getMinutes();
  a = otherDate.getSeconds();
  a = otherDate.getMilliseconds();
  a = today.getTime();
  a = otherDate.getMonth(); et a;
  a = otherDate.getDate();  // get method er somoy variable dhora jai karon ekta date deya roeche sekan theke get(dorkar ginis) korte hoche 
  a = otherDate.getDay();
  a = otherDate.getFullYear();
  a = otherDate.getHours();
  a = otherDate.getMinutes();
  a = otherDate.getSeconds();
  a = otherDate.getMilliseconds();
  a = today.getTime();
  
  console.log(a);

 // set method
 otherDate.setDate(8);  // set method er somoy variable dhora jai karon ekta date deya roeche sekane arac ta value set(dorkar ginis) korte hoi
otherDate.setFullYear(2000);
otherDate.setHours(5);
otherDate.setMinutes(50);
otherDate.setSeconds(30);
otherDate.setMonth(0);

 console.log(otherDate);

