console.log("This is Ajax session.");

let fetchBtn = document.getElementById("fetchBtn");

//   fetchBtn.addEventListener("click", fetchDataHandler);
    
//   function fetchDataHandler(){
//     console.log("you have click the fetchBtn");
     
//      let xhr = new XMLHttpRequest();
     
//     //  open the Object
//     //  xhr.open("Get","biplab.txt",true);
//     //  xhr.open("Get","https://jsonplaceholder.typicode.com/todos/1",true);

//     // post request
//      xhr.open("POST","https://dummy.restapiexample.com/create",true);
//      xhr.getResponseHeader("Content-type","application/json");

//     //  What to do onprogress (optional)
//      xhr.onprogress = function(){
//         console.log("On Progress");
//      }


//     // xhr.onreadystatechange = function(){
//     //     console.log('this is ready state is ' + this.readyState);
//     // }

//     //  What to do when response is ready 
//      xhr.onload = function(){   //Defines a function to be called when the request is recieved (loaded)
//         if (xhr.status === 200) {
//             console.log(this.responseText);  //Returns the response data as a string
//         }
//         else{
//             console.log("this is error");
//         }
//      }
   
//     //  xhr.send();

//      parms = `{"name":"test","salary":"123","age":"23"}`;
//      xhr.send(parms);

//      console.log("We are done");
//   }






  let popBtn = document.getElementById("popBtn");
   popBtn.addEventListener("click", popDataHandler);

   function popDataHandler(){
      console.log("clicked the popBtn");

      let xhr = new XMLHttpRequest();
      xhr.open("Get"," http://45.90.108.154/colors",true);
      
      xhr.onload = function(){
         if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
             console.log(obj);
            let list = document.getElementById("list");
              str = "";
             for ( key in obj){
                str +=`<li>${obj[key].name}</li>`
             }
   
    
            list.innerHTML = str; 
         }

         else{
            console.log("this is error");
         }
      }

      xhr.send();
      console.log("We are done fetching");
   }

   document.body.style.backgroundColor ="#08a1ea";