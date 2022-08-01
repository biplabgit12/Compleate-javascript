console.log('welcome to tut25');
//Edit the div element in javascript

let divElm = document.createElement("div");
//    divElm.id = "elm";
  //Add text that created element
  let textlocal = localStorage.getItem("text");
   let text;
    if (textlocal == null ) {
         text = document.createTextNode('Click the div and Edit it');
    } else {
         text = document.createTextNode(textlocal);
    }
    divElm.appendChild(text);

//Give the id,class,style 
divElm.setAttribute("id", "elm");
divElm.setAttribute("class", "elm");
divElm.setAttribute("style", "border:2px solid black; width:135px; padding:12px;");

//  divElm.textContent = "click the div";
console.log(divElm, text);

//Grab the main container
let container = document.querySelector(".container");
let myfirst = document.getElementById("myfirst");

//Insert the element before element with first
container.insertBefore(divElm, myfirst);
  
 //Add event listener to the divElm
 divElm.addEventListener("click", function(){
    let noTextarea = document.getElementsByClassName('textarea').length;  //" getElementById" dile hobe na karo id unique
     console.log( noTextarea);
    if (noTextarea == 0){
        let html =elm.innerHTML;
        divElm.innerHTML =  `<textarea id="textarea" class="textarea" cols="16" rows="3">${html}</textarea>`; 
    }

    //listener the blur event on textaera
let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur",function name() {
    divElm.innerText = textarea.value;
    localStorage.setItem("text",textarea.value);
   }) 
 })
