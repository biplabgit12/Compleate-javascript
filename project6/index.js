 console.log("This is CV Screener Project");

 let Data = [
    {
      name:"Biplab Mondal",
      age:18,
      city:"Kalkata",
      language:"Javascript",
      image:"https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      name:"Kaushik Mondal",
      age:14,
      city:"Kalkata",
      language:"Css",
      image:"https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      name:"Pritam Paul",
      age:18,
      city:"Kalkata",
      language:"Python",
      image:"https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
      name:"Sahin Molla",
      age:19,
      city:"Delhi",
      language:"Html",
      image:"https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      name:"Aishwaria Rai",
      age:38,
      city:"Mumbai",
      language:"Java",
      image:"https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      name:"Rohit Sharma",
      age:36,
      city:"JharKhand",
      language:"Go",
      image:"https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name:"Partho Gain",
      age:19,
      city:"Kalkata",
      language:"Html",
      image:"https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      name:"Raja Das",
      age:16,
      city:"Mumbai",
      language:"Css",
      image:"https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name:"Ripon Mondal",
      age:17,
      city:"Kalkata",
      language:"C++",
      image:"https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
      name:"Dilip Roy",
      age:21,
      city:"Delhi",
      language:"Java",
      image:"https://randomuser.me/api/portraits/men/67.jpg"
    }
 ]


 function cvItrator(profiles){
   let nextIndex = 0;
    return {
      next:function (){
        return profiles.length > nextIndex ? 
        {value:profiles[nextIndex++],done:false}:{done:true}
      }
    }
 }

 let Candidates = cvItrator(Data); 

let btn = document.getElementById("btn");
 btn.addEventListener("click", nextCv);
  
 nextCv();  // first profile ta jate automatic run hoi tar jono eai function ta call kora dite hobe
 function nextCv(){
   console.log("clicked");
    let currentCandidates = Candidates.next().value;
    console.log(currentCandidates);
    
    let image = document.getElementById("image");
    let profiles = document.getElementById("profiles");
    if (currentCandidates != undefined) {
      console.log(image,profiles);
      image.innerHTML = `<img src="${currentCandidates.image}">`;
      profiles.innerHTML =`<ul class="list-group">
          <li class="list-group-item">Name: ${currentCandidates.name}</li>
          <li class="list-group-item">${currentCandidates.age} years old</li>
          <li class="list-group-item">Lives in  ${currentCandidates.city}</li>
          <li class="list-group-item">Primarili works on ${currentCandidates.language}</li>
     </ul>`
    }
   else {
    alert("End of the candidate application")
      window.location.reload();
    }
    
  }
  
