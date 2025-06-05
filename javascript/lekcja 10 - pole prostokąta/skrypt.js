const wyslij_btn = document.querySelector("button");
//console.log(wyslij_btn);

const bok_a = document.querySelector("#bok_a");
const bok_b = document.querySelector("#bok_b");
const wynik = document.querySelector("#wynik");

wyslij_btn.onclick = function(){
    let pole = Number(bok_a.value) * Number(bok_b.value); //aby wykrywało jako liczbę
    wynik.innerHTML = `<h3>Pole prostokąta o bokach ${bok_a.value} i ${bok_b.value} wynosi ${pole}</h3>`;
}



















