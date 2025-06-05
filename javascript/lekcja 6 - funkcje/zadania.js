function pole(r){                                        //zadanie 1
    let wynik = r * r * 3.14;
    return wynik
}
document.write("Pole koła: " + pole(24) + "<br><br>");


function rok(a){                                         //zadanie 2
    //if(a % 100 == 0) return "Rok nie jest przestępny"
    if(a % 4 !== 0 || a % 100 == 0) return "Rok nie jest przestępny"        // && - i    || - lub
    else return "Rok jest przestępny"
}
document.write(rok(1900) + "<br><br>");


function liczba(a){                                      //zadanie 3
    if(a % 2 == 0) return true
    else return false
}
document.write(liczba(5))

document.write("<br><br>");



function kalkulator(a, b, c){
    if(c == "dod") return document.write(a + b);
    else if(c == "ode") return document.write(a - b);
    else if(c == "mno") return document.write(a * b);
    else if(c == "dzi") return document.write(a / b);
}
kalkulator(3, 5, "dod");


document.write("<br><br>");
function maks(a, b, c){
    if(a > b && a > c) document.write(a);
    else if(b > a && b > c) document.write(b);
    else if(c > a && c > b) document.write(c);
}
maks(68, 40, 2);


document.write("<br><br>");
function trojkat(a, b, c){
    if(a + b >= c && a + c >= b && b + c >= a) return document.write("Git");
    else return document.write("Nie git");
}
trojkat(3, 5, 6);


document.write("<br><br>");
function wzrost(a){
    if(a < 150) document.write("niski");
    else if(a > 180) document.write("wysoki");
    else document.write("średni");
}
wzrost(181)


// document.write("<br><br>");
// function bmi(cm, kg){
//     cm * 0.01
//     if(kg / cm < 18.5) return document.write("za mało");
//     else if(kg / cm > 25) return document.write("za dużo");
//     else return document.write("ok");
// }
// bmi(180, 40);


document.write("<br><br>");
function starszy(a, b){
    if(a > b) document.write("Pierwsza osoba jest starsza");
    else if(a == b) document.write("Obie osoby mają ten sam wiek");
    else document.write("Druga osoba jest starsza");
}
starszy(60, 61)





