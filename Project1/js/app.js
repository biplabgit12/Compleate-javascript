console.log('Welcome to Magic notes');
showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function (e) {
    //   console.log('click the add Btn');  
    addTxt = document.getElementById("addTxt");
   addTitle = document.getElementById("addTitle");
    
    let notes = localStorage.getItem("notes");
    //    console.log(notes);

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let myNoteObj = {
        title:addTitle.value,
        text:addTxt.value
    }

    notesObj.push(myNoteObj)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    //    console.log(notes);

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }


       let html ="";
       notesObj.forEach(function(element,index){  //Ekhane "element"  bolte  "noteObj" ke bojhai
         html += `
        <div class="noteCard my-3 mx-4 card"  style="width: 18rem;">
        <h5 class="card-title my-2 mx-4">${index+1}. ${element.title} </h5>
        <p class="card-text  mx-4">${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary my-4  mx-4">Delete Note</button>
      </div>
    </div> `;
       });



    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Write a note and click the Add Note button`;
    }
    //   console.log( html);
}


 //Delete note Edit
  function deleteNote(index){
    console.log('Delete note',index);
    let notes = localStorage.getItem("notes");
    //    console.log(notes);

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj =JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
  }


 //Search functionality
  let searchTxt = document.getElementById('searchTxt');
 
  searchTxt.addEventListener('input', function() {
     inputVal = searchTxt.value.toLowerCase();
    console.log('input event fired',inputVal);

    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
     let txt = element.getElementsByTagName("p")[0].innerText;
        if (txt.includes(inputVal)) {
            element.style.display = "block";
 console.log('hello');
        } 
     else {
            element.style.display = "none";
 console.log('hi');
            
        }
        console.log(txt);
    });

  })



