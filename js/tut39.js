console.log("Welcome tut39");
//Fetch api

//  get request 
// function getData(){
//     console.log("started getData");
//     let url = "biplab.txt";
//     fetch(url).then(function (response){
//         console.log("Inside first then");
//         return response.text();
//     }).then(function (data){
//         console.log("Inside second then");
//        console.log(data); 
//     })
// }


// function getData(){
//     let url = "https://api.github.com/users";
//     fetch(url).then(function (response){
//         return response.json();
//     }).then(function (data){
//        console.log(data); 
//     })
// }


// console.log("before running getData");
// getData();
// console.log("After running getData");




//post request
function postData(){
        let url = "url thakbe";
        let data = "ekhane data thakbe"
            params = {
            method:"post",
            headers:{
             'Content-Type':'application/json'
            },
         body:data
        }

        fetch(url,params).then(function (response){
            return response.json();
        }).then(function (data){
           console.log(data); 
        })
    }

