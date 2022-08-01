console.log('welcome to tut15');
    //CHILD,PARENT AND TRAVERSING THE DOM
    
 let no = document.querySelector('.no');
// console.log(no);



 let cont = document.querySelector('.container');
//  console.log(cont);
// console.log(cont.childNodes);
// console.log(cont.children);



   //nodeName bar kora holo
  let nodeName = cont.childNodes;
   nodeName = cont.childNodes[1].nodeName;
   
//    console.log(nodeName);



//nodeType bar kora holo
 let nodeType = cont.childNodes; 
     nodeType = cont.childNodes[1].nodeType; 

//  console.log(nodeType);



 let container = document.querySelector(".container");
 console.log(container);

//  console.log(container.children[1].children[0].children);
//  console.log(container.firstChild);
//  console.log(container.firstElementChild);



//  console.log(container.lastChild);
//  console.log(container.lastElementChild);
//  console.log(container.children);
//  console.log(container.childElementCount);
 
                       

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);





