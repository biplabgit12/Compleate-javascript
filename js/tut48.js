console.log("Welcome to tut48");
//  Generators in javascript

 function* numGenerator() {   //Generator syntax =  function* numGenerator(){} 
    // yield 1;  //yield ekta keyword jeta Generatorer caller er kag kore
    // yield 2;
    // yield 3;

    let i = 0;
    let bol = true; //true er mane holo eai conditionta sotik
    while(bol){
      yield i++;   
    }

 }

 let num = numGenerator();
  console.log(num.next()); //next() method diye run korte hoi
  console.log(num.next());
  console.log(num.next());
  console.log(num.next());
  console.log(num.next());
  console.log(num.next());



  
  