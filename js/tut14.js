 console.log('welcome to tut14');
   //HTML ELEMENT SELECTOR

 // Single element selector
//getelementbyid accessing:
//  let x = document.getElementById('heading');
//   x.style.color = 'red';
    // x = x.className;
//  x = x.childNodes;
// x = x.parentNode;
//  x = x.innerText = 'javascript tutorial';
// x = x.innerHTML = '<p>compleate javascript tutorial</p>';

//   console.log(x);



 //querySelector:-  
//   let x = document.querySelector('#myfirst'); 
//    x = document.querySelector('.child'); // query selector use korle first element tai dhore
//    x = document.querySelector('li'); // query selector use korle first element tai dhore

//  console.log(x);



// Multiple element selector
 //querySelectorALL:- 
//   let x = document.querySelectorAll('.child');
//  console.log(x);


//Tag name
//   let x = document.getElementsByTagName('div'); 
//   x = document.querySelectorAll('div')
//  console.log(x);
 


//  getelementbyclassname:-
//  let x = document.getElementsByClassName('child');
//  console.log(x);
 


 





 /*
  element selector:-
  1. single element selector
  2. multiple element selector
*/


// 1. single element selector
//   let element = document.getElementById('myfirst');
//   element = element.className;
//   element = element.childNodes;
//   element = element.parentNode;
//  element = element.style.color='lightblue';
//  element.innerText = 'JAVASCRIPT';
//  element.innerHTML = '<h1>JAVASCRIPT TUTORIAL</h1>'

//  console.log(element.innerText);



//  let sel = document.querySelector('#myfirst');
//   // sel = document.querySelector('.child')
//   // sel = document.querySelectorAll('div');
//   sel.style.color = 'red';
//  console.log(sel);





 // Multiple element selector
 let element = document.getElementsByClassName('child');
  //  element = document.getElementsByClassName('no');
  //  element = document.querySelectorAll('.no');
  //  element = document.getElementsByTagName('div');
//  console.log(element);


 //element Itrating
//  for (let i = 0; i < element.length; i++) {
//    const elem = element[i];
//    console.log(elem);
//  elem.style.color='green';
//  }
 


 Array.from(element).forEach(function(elems){
    // console.log(elems);
    // elems.style.color='red';
    console.log(element[0].getElementsByClassName('child'));

 });



