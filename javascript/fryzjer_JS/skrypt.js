const wynik = document.querySelector("#wynik")
const butt = document.querySelector("#lewy2 > button")

const kro = document.querySelector("#kro")
const sre = document.querySelector("#sre")
const pol = document.querySelector("#pol")
const dlu = document.querySelector("#dlu")


/*
butt.addEventListener("click", ()=>{
    if(kro.checked){
        wynik.innerHTML = `25zł`

    }else if(sre.checked){
        wynik.innerHTML = `30zł`

    }else if(pol.checked){
        wynik.innerHTML = `40zł`

    }else if(dlu.checked){
        wynik.innerHTML = `50zł`

    }else{
        wynik.innerHTML = `zaznacz promocje`
    }
})
*/


butt.addEventListener("click", (e)=>{
    e.preventDefault()
    let cena = 0
    if(kro.checked) cena=25
    else if(sre.checked) cena=30
    else if(pol.checked) cena=40
    else if(dlu.checked) cena=40

    if(cena == 0){
        wynik.innerHTML = `Wybierz jakąś opcje`
    }else{
        wynik.innerHTML = `Cena wynosi: ${cena}zł`
    }
})
