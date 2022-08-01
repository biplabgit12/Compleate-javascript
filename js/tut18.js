 console.log("welcome to tut 18");
    // MORE ON JAVASCRIPT EVENTS
 
   //  let btn = document.getElementById('btn');
   // btn.addEventListener("click", func1);
   // btn.addEventListener("dblclick", func2);
   // btn.addEventListener("mousedown", func3);
   

   // function func1(e){
   //    console.log("this is func1",e);
   //    e.preventDefault(); // preventDefault() method submit page e niye jete dei na
   // }

   // function func2(e){
   //    console.log("this is func2",e);
   //    e.preventDefault(); // preventDefault() method submit page e niye jete dei na
   // }

   // function func3(e){
   //    console.log("this is func3",e);
   //    e.preventDefault(); // preventDefault() method submit page e niye jete dei na
   // }


  
//   let no = document.querySelector('.no');

//    no.addEventListener('mouseenter', function (e) {
//       console.log('you entered no');
//    })

  
//    no.addEventListener('mouseleave', function (e) {
//       console.log('you leave no');
//    })

  

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log('mouse move');
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor =`rgb(${e.offsetX}, ${e.offsetY}, 145)`;
})


