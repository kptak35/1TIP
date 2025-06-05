const miasto = document.querySelector("#miasto");
const kilometry = document.querySelector("#kilometry");
const wynik = document.querySelector("#wynik");
const oblicz = document.querySelector("button");

function oblicz_koszt_dostawy(){
    if(miasto.checked){
        wynik.innerHTML = "Dowieziemy Twoją pizzę za darmo";
        return;
    }
    let km = parseInt(kilometry.value);
    let koszt = km * 2;
    wynik.innerHTML = `Koszt dostawy pizzy wynosi ${koszt}zł`;
}

//oblicz.onclick = oblicz_koszt_dostawy;
oblicz.addEventListener("click", oblicz_koszt_dostawy);
