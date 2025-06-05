const wynik = document.querySelector("#wynik");
const liczba = document.querySelector("#liczba");
const butt = document.querySelector("main > button[type='submit']");

butt.addEventListener("click", ()=>{
    let L = parseInt(liczba.value);
    let B = "";

    if (L === 0) {
        wynik.innerHTML = "0 <sub>2</sub>"
        return;
    }

    while (L > 0) {
        B = (L % 2) + B;
        L = Math.floor(L / 2)
    }

    wynik.innerHTML = B + " <sub>2</sub>";


})  