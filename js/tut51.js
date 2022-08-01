console.log("This is tut51");
//  "Set()" in javascript

//"Set()" use hoi unique value store korar jono, mane ekk value dubar use kole ekbar store hobe 
let mySet = new Set();
//  console.log(mySet);


 mySet.add("This");  //"set()" er modhye value add korte kole "add()" method use korte hobe
 mySet.add("is");
 mySet.add("tut");
 mySet.add(51);
 mySet.add(true);
 mySet.add(false);
 mySet.add("is"); //dubar  "is" add hobe na karon "set()" unique value return kore 

//  console.log("add value is ", mySet);



// "set()" er size janar jonno
console.log(mySet.size);


// "set()" er vitore kono value ache kina janar jono "has()" method use kote hobe thakle "true"/"false"
 console.log(mySet.has("tut"));





 // Use a constructor to initialize the set
//   let mySet2 = new Set(["string",true,false,{name:"biplab"},32]);
//   console.log(mySet2);




  //"Set()" theke value remove kora holo
  //value romove korar aage
   console.log("romove korar aage",mySet,mySet.has("This"));
   //value romove korar pore
   mySet.delete("This");
   console.log("romove korar pore",mySet);


 
//"Set()" Itrating by "for..of" loop
//  for (const item of mySet) {
//     console.log(item);
//  }


//"Set()" Itrating by "forEach" loop
//  mySet.forEach((item)=>{
//     console.log(item);
//  })


//  "Set()" array te convert kora holo 
let myArray = Array.from(mySet);
 console.log(myArray);