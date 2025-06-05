const imie = document.querySelector("#imieForm");
const nazwisko = document.querySelector("#nazwiskoForm");
const email = document.querySelector("#emailForm");
const usluga = document.querySelector("#uslugaForm");
const regulamin = document.querySelector("#regulaminCheck");
const wynik = document.querySelector("#wynik");
const przeslij = document.querySelector("button[type=button]");


przeslij.addEventListener("click", (e)=>{
    e.preventDefault()
    wynik.innerHTML = ""
    let blad = 0

    if (!regulamin.checked) {
        wynik.style.color = "red"
        wynik.innerHTML += `<p>Musisz zapoznać się z regulaminem</p>`
        blad++
    }
    if (imie.value === "") {
        wynik.style.color = "red"
        wynik.innerHTML += `<p>Musisz wpisać imię</p>`
        blad++
    }
    if (nazwisko.value === "") {
        wynik.style.color = "red"
        wynik.innerHTML += `<p>Musisz wpisać nazwisko</p>`
        blad++

    }
    if (email.value === "") {
        wynik.style.color = "red"
        wynik.innerHTML += `<p>Musisz wpisać email</p>`
        blad++

    }
    if (usluga.value === "") {
        wynik.style.color = "red"
        wynik.innerHTML += `<p>Musisz wpisać usługę</p>`
        blad++
    
    }
    
    
    
    if (blad === 0) {
        wynik.style.color = "black"
        wynik.innerHTML = `<p>${imie.value} ${nazwisko.value}</p>
        <p>Treść Twojej sprawy: ${usluga.value}</p>
        <p>Na podany e-mail zostanie wysłana oferta.</p>`
    }
})