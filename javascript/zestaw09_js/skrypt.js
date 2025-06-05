/*const srodek = document.querySelector("#srodkowy");

let x = 1

function poprzednieZdjecie(){
    x -= 1
    if(x == 0){
        x = 7
    }
    srodek.innerHTML = `<img src="${x}.jpg" alt="Aktywne zdjęcie" id="aktywne_zdjecie">`
}

function nastepneZdjecie(){
    x += 1
    if(x == 8){
        x = 1
    }
    srodek.innerHTML = `<img src="${x}.jpg" alt="Aktywne zdjęcie" id="aktywne_zdjecie">`
}*/






/*
const zdjecie = document.querySelector("#aktywne_zdjecie");
let zdj = 1

function poprzednieZdjecie(){
    zdj--
    if(zdj < 1){
        zdj = 7
    }
    zdjecie.src = zdj + ".jpg"
}


function nastepneZdjecie(){
    zdj++
    if(zdj > 7){
        zdj = 1
    }
    zdjecie.src = zdj + ".jpg"
}
*/



//bez onclick
const zdjecie = document.querySelector("#aktywne_zdjecie");
const poprzedni = document.querySelector("#lewy > button")
const nastepny = document.querySelector("#prawy > button")
let zdj = 1
console.log(zdjecie)

poprzedni.addEventListener("click", poprzednie_zdj)
function poprzednie_zdj(){
    zdj--
    if(zdj < 1){
        zdj = 7
    }
    zdjecie.src = zdj + ".jpg"
}

nastepny.addEventListener("click", nastepne_zdj)
function nastepne_zdj(){
    zdj++
    if(zdj > 7){
        zdj = 1
    }
    zdjecie.src = zdj + ".jpg"
}


const obrazki = document.querySelectorAll("#miniatury > img");

obrazki.forEach((obrazek, index) =>{
    obrazek.addEventListener("click", (e)=>{
        console.log(e)
        let nazwa = `${index + 1}.jpg`
        zdjecie.src = nazwa
        zdj = index + 1
    })
})

