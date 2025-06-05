let liczba = Math.floor(Math.random() * 100) + 1;
console.log(liczba);

const sprawdz_button = document.querySelector("#sprawdz");
const odpowiedz = document.querySelector("#odpowiedz");
const wynik = document.querySelector("#wynik");

// sprawdz_button. addEventListener("click", function(){

// });
i=0

sprawdz_button. addEventListener("click", ()=>{
    i += 1
    let odp = Number(odpowiedz.value);
    if(isNaN(odp) || odp == 0){
        odpowiedz.value = "";
        wynik.innerHTML = "";
        return;
    }
    if(odp == liczba){
        wynik.innerHTML = "Brawo! Ilość zgadnięć: "+i;
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
});
