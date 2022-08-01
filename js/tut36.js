console.log("welcome to tut36");
 class Library{
    constructor(bookList){
      this.bookList = bookList;
      this.issuedBooks = {};
    }

   getBooklist(){
        this.bookList.forEach(function(element){
          console.log(element);
        }); 
    }

    issueBook(bookName,user){
        if ( this.issuedBooks[bookName] == undefined) {
            this.issuedBooks[bookName] = user;
        }
        else{
            console.log("This book is already been issued.");
        }
    }

    returnBook(bookName){
      delete this.issuedBooks[bookName];
    }
 }

 
