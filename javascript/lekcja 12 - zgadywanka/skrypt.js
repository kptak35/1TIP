let liczba = Math.floor(Math.random() * 100) + 1;
console.log(liczba);

const wynik = document.getElementById("wynik");

function sprawdz_liczbe() {
    let odpowiedz = Number(document.getElementById("odpowiedz").value);

    if(odpowiedz > liczba) {
        wynik.innerHTML = "duzo"
    }
    else if(odpowiedz < liczba){
        wynik.innerHTML = "malo"
    }
    else if(odpowiedz == liczba){
        wynik.innerHTML = "git"
    }
    else {
        wynik.innerHTML = "NaN"
    }
}


