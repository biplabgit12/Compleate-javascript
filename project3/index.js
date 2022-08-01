console.log("This is index.js");

let source = "the-times-of-india"
 let key = "dd10ab56380f448a9c9adcf2d84ddd89";

//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

//Create a Ajax get request
let xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${key}
`, true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index){
            console.log(element,index);
           let news =`<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                      Breaking news ${index+1} :<b>${element.title}</b>
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">${element.description}. <a href="${element. url}">Read more</a></div>
            </div>
        </div>`;
        newsHtml += news
        });
        newsAccordion.innerHTML = newsHtml
    } else {
        console.log("some error occured");
    }
}

xhr.send();