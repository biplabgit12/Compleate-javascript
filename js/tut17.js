 console.log('Welcome to tut 17 on events');
    // EVENTS AND EVENT OBJECT IN JAVASCRIPT 

  let heading = document.getElementById('heading'); 
     heading.addEventListener('click',function (e) {  // Ekhane 'e' bolte event object. event object er mane holo jokon 'heading' er upor click kora holo thokon  "heading"
      //   ta  "e" object er modhye chole aslo  and  "e" object er onek property ache  sei property diye  oi element ('heading') er uper kaj kora jai                                            
         console.log('You have clicked the heading');
        location.href = '//codewithharry'; //jokon heading e click korbo tokhon er href palte giye  '//codewithharry' hoea jabe
        heading.style.color = 'green';
       let arg = e;  
       arg = e.target;  
       arg = e.target.id;
       arg = e.target.className;
       arg = e.offsetX;
       arg = e.offsetY;
       arg = e.clientX;
       arg = e.clientY;


       console.log(arg);

     })

  console.log(heading);





















