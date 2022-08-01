console.log('welcome to tut16');
 //CREATEING AND REMOVING AND REPLACING ELEMENT
 
 let element = document.createElement('li');

//  let text = document.createTextNode('This is a create li')
//   element.appendChild(text);
        //  or 
  element.innerHTML = 'This is a create li';
  // element.innerText = 'This is a create li';


  element.id='createli';
  element.className ='createli';
 element.setAttribute('title','this title')
 let ul = document.querySelector('ul.this');
 ul.appendChild(element);   

//  console.log(element);
//  console.log(ul);




let elem2 = document.createElement('h2');    // createElement method diye element ke create kora jai
  let tnode = document.createTextNode('This is a heading');  // createTextNode method diye element er vitorer text create kora jai
 elem2.id = 'headings';  //id property element er vitore id set kore
 elem2.className = 'headings';  //className property element er vitore class set kore
 elem2.setAttribute('title','mytitle');  //setAttribute method element er vitore kono attribute set korar kaj kore
  elem2.appendChild(tnode);
 
  element.replaceWith(elem2)  // replaceWith method je element dhora hoeache  sei element ke replace korar kaj kore
// console.log(elem2);



 let myul = document.getElementById('myul');
  
  myul.replaceChild(element, document.getElementById('fui'));  // replaceChild method je element dhora hoeache  sei element er child ke  replace korar kaj kore
  myul.removeChild(document.getElementById('lui'));
  let a = document.getElementById('heading');
  //  a = a.getAttribute('id');
  //  a = a.hasAttribute('class');
   a.setAttribute('title','myHtitle')

    console.log(a);
  // console.log(myul);








