const sekcja1 = document.querySelector("#sekcja1");
const sekcja2 = document.querySelector("#sekcja2");


///////////////////////////SetTimeout///////////////////////////

function hello(){
    sekcja1.innerHTML = "Piękny mamy dzień";
}

window.setTimeout(hello, 3000);  //czas w milisekundach, aktywuje po 3s

sekcja2.innerHTML += "Skrypt działa dalej"; //nie zatrzymuje całego skryptu

window.setTimeout(function(){
    sekcja1.innerHTML += ", już jutro weekend!"
}, 4000)


function bgcolor(color = "lightblue"){
    document.body.style.backgroundColor = color;
}

window.setTimeout(bgcolor, 2000);

///////////////////////////SetInterval///////////////////////////

let lekcje = 8;

function do_domu(){
    sekcja2.innerHTML = `Zostało już tylko ${lekcje} lekcji`;
    if(lekcje == 0){
        sekcja2.innerHTML = `Hurra, idziemy do domu!`;
        clearInterval(pozostalo) //zatrzymuje pętle
    }
    lekcje--;
}

let pozostalo = setInterval(do_domu, 1000)  //powtarza co 1s, pętla z opóźnieniem

