console.log("Building a collage library website.");

 function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
 }


 // Display Constructor
  function Display(){
    
  }

//   Add method to display prototype
Display.prototype.Add = function(book){
   let tableBody = document.getElementById("tableBody");
   let uiTable = `<tr>
   <td>${book.name}</td>
   <td>${book.author}</td>
   <td>${book.type}</td>
 </tr>`;

 tableBody.innerHTML += uiTable;
 }
  

 Display.prototype.clear = function(){
  let libraryForm = document.getElementById("libraryForm");
   libraryForm.reset();  //reset method form submit korar pore form er modhye deya value gulo clear hoea jai
 }

 
 Display.prototype.Validate = function(book){
    if (book.name.length<2 && book.author.length<2){
    return false;
                                                          
   }
 else {
    return true;
   }
 }


 Display.prototype.Show = function(type,displayMessage){
  let alertMsg = document.getElementById("alertMsg");
  alertMsg.innerHTML = ` <div class="alert alert-${type}alert-dismissible fade show" role="alert">
  <strong>Message:</strong>${displayMessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
   <span aria-hidden="true">x</span>
  </button>
</div>`;
  
 setTimeout(function(){
  alertMsg.innerHTML ='';
 }, 4000);
 }



// Add submit event listener to libraryForm
 let libraryForm = document.getElementById("libraryForm");
 libraryForm.addEventListener("submit", libraryFormSubmit)

 function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let Programming = document.getElementById("Programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
      type = fiction.value;
    }
  
   else if(Programming.checked) {
    type = Programming.value;
  }
 
  else if(cooking.checked) {
    type = cooking.value;
  }


    let book = new Book(name,author,type);
    console.log(book); 

    let display = new Display();
    console.log(display);
   if (display.Validate(book)) {
    display.Add(book); 
    display.clear();
    display.Show("Success"," Your book has been successfully added");
   }
  else {
    display.Show("Danger", " Sorry you can not add this book");
   }
    
    
    e.preventDefault();
 }

 