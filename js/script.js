let fetchquote = fetch("https://type.fit/api/quotes")            
 
async function quotes(){
    let response = await fetchquote 
    let data = response.json()          
    return data
}

let allquotes = quotes()

let show = document.querySelector("#show")
let authortext = document.querySelector("#author")   
let button = document.querySelector("#btn")            


button.addEventListener("click", function(){               

   let random = Math.floor(Math.random() * 15)

   console.log(random)     

   allquotes.then(function(resolve){ 
     let quote = resolve[random].text
     let auther = resolve[random].author 
     show.innerHTML = quote
     authortext.innerHTML = auther
    
    }) 
}) 

