console.log('welcome to tut 19');
    //page crawler

let str = 'python';
let links = document.links;  // Eta browser er console dekte hobe
 let href;
 Array.from(links).forEach(function(element)=>{
  href = element.href;
  if (href.includes(str)) {
    console.log(href)
  }   
 });
console.log(links)

