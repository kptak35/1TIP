let liczba = Math.floor(Math.random() * 100) + 1;
console.log(liczba);

const sprawdz_button = document.querySelector("#sprawdz");
const odpowiedz = document.querySelector("#odpowiedz");
const wynik = document.querySelector("#wynik");

sprawdz_button.onclick = function(){
    let odp = Number(odpowiedz.value);
    if(isNaN(odp) || odp == 0){
        odpowiedz.value = "";
        wynik.innerHTML = "";
        return;
    }
    if(odp == liczba){
        wynik.innerHTML = "Brawo!";
        return;
    }
    if(odp > liczba){
        wynik.innerHTML = "Za dużo";
        return;
    }
    if(odp < liczba){
        wynik.innerHTML = "Za mało";
        return;
    }
}