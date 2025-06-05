function witaj(imie = "nieznajomy"){
    document.write("<p>Witaj " + imie + "!</p>")    // <-definicja funkcji - funkcja niezwracająca wartości
}                                  

witaj("Anna");   // <-wywołanie funkcji
witaj("Tomek");
witaj();
witaj("");

document.write(witaj() + "<br><br>");


function suma(a, b){       // <-definicja funkcji - funkcja zwracająca wartość
    let wynik = a + b;
    return wynik;
}
document.write("Suma<br>");
document.write(suma() + "<br>");          // NaN - Not a Number
document.write(suma("Ala ma ", "kota") + "<br>");
document.write(suma(5, 6) + "<br>");
document.write(suma(-7, 16) + "<br><br>");


function roznica(a, b){
    let wynik = a - b;
    return wynik
}
document.write("Różnica<br>");
document.write(roznica(5, 6) + "<br>");
document.write(roznica(-7, 16) + "<br><br>");


function iloczyn(a, b){
    let wynik = a * b;
    return wynik
}
document.write("Iloczyn<br>");
document.write(iloczyn(5, 6) + "<br>");
document.write(iloczyn(-7, 16) + "<br><br>");


function iloraz(a, b){
    if(b === 0) return "Nie dzielimy przez 0";        // return - zakończenie działania funkcji
    let wynik = a / b;
    return wynik
}
document.write("Iloraz<br>");
document.write(iloraz(5, 6) + "<br>");
document.write(iloraz(5, 0) + "<br>");
document.write(iloraz(-7, 16) + "<br><br>");



let wynik = suma(5, 8);  //zmienna globalna

function razy2(a){
    let wynik = a * 2;   //zmienna lokalna
    return wynik;
}

function wypisz(a){
    wynik += 5;
    document.write("<p>" + a + "</p>");
}

wypisz(wynik);
document.write("<p>" + wynik + "</p>");

function dzientygodnia(nr){
    switch (nr) {
        case 1:
            return "poniedziałek"
            break;
        case 2:
            return "wtorek"
            break;
        case 3:
            return "środa"
            break;
        case 4:
            return "czwartek"
            break;
        case 5:
            return "piątek"
            break;
        case 6:
            return "sobota"
            break;
        case 7:
            return "niedziala"
            break;
        default:
            return "Nie ma takiego dnia"
            break;
    }
}
wypisz(dzientygodnia(5));


function sprawdzanie(wiek){
    if(wiek >= 18) return "Osoba jest pełnoletnia";
    else return "Osoba nie jest pełnoletnia";
}
wypisz(sprawdzanie(17));




