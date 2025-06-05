const wynik = document.querySelector("#wynik")
const pierwszy = document.querySelector("#a1")
const roznica = document.querySelector("#r")
const ilosc = document.querySelector("#n")
const butt = document.querySelector("#prawy > button")


butt.addEventListener("click", ()=>{
    let x = Number(pierwszy.value)
    wynik.innerHTML = `Ciąg arytmetyczny zawiera wyrazy: ${x}`

    for (let i = 0; i < ilosc.value - 1; i++) {
        x += Number(roznica.value)
        wynik.innerHTML += `, ${x}`
    }
})
