 console.log("This is tut50");
  // Map in javascript

  //Creating a Map object
  let myMap = new Map();  //blank map object banano holo
  // console.log(myMap);

  //Inisialize "key" for myMap
  const key1 = "str";
  const key2 = {};
  const key3 = function (){};


  //set "key,value" for myMap object
  myMap.set(key1, "This is a string");
  myMap.set(key2, "This is a object");
  myMap.set(key3, "This is a function");
  // console.log(myMap);



  //get "value" for myMap object
  let value1 = myMap.get(key1)
  let value2 = myMap.get(key2)
  let value3 = myMap.get(key3)
  //  console.log(value1);
  //  console.log(value2);
  //  console.log(value3);


  //  Get the size of the "map"
   console.log(myMap.size);

// " for..of" loop diye Itrate kora holo  key and value ke
//  for (const [key,value] of myMap){
    //    console.log(key,value);
    //  }
    
    
    // " for..of" loop diye Itrate kora holo  key ke
    //  for (const key of myMap.keys()){  //"key" neyor jonno "key()" method use korte hobe 
        //    console.log(key);
        //  }
        
        
        // " for..of" loop diye Itrate kora holo  value ke
  // for (const value of myMap.values()) {  //"value" neyor jonno "values()" method use korte hobe 
  //    console.log(value);
  //  }


  // "forEach()" loop diye Itrate kora holo  key and value ke
  // myMap.forEach((value,key) => {  //forEach loop er ketre "value" aage and "key" pore likte hobe
  //   console.log("key is " + key);
  //   console.log("value is " + value);
  // });

 


  
  //  map object ke array te covert kora holo
  // let myArray = Array.from(myMap);
  //  console.log("map to arry is " + myArray);

   
  //  let mykeyArray = Array.from(myMap.keys());  //"key" neyor jonno "key()" method use korte hobe 
  //  console.log(mykeyArray); 


   let myvalueArray = Array.from(myMap.values());  //"value" neyor jonno "values()" method use korte hobe 
   console.log(myvalueArray); 
