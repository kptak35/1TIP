const ptekst = document.querySelectorAll("body > p");
const h1 = document.querySelector("h1")



ptekst.forEach((p)=>{
    p.addEventListener("click", (e)=>{
        console.log(e)
        h1.innerHTML = `Wybrany tekst: ${e.target.innerHTML}`
    })
})


