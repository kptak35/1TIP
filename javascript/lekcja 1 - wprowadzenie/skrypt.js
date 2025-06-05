let zmienna = 7;
const stala = "Tytuł strony";

zmienna = 9;

document.writeln(zmienna);
document.writeln("zmienna");
document.writeln(stala);

let a = 15;
let b = 4;
let obwod = 2 * a + 2 * b;
document.write('<br>Obwód wynosi: ' + obwod + ' cm');
let suma = a + b;
let roznica = a - b;
let iloczyn = a * b;
let iloraz = a / b;
let reszta = a % b;

document.write('<br><br>Suma ' + a + '+' + b + '=' + suma);
document.write(`<br>Różnica ${a} - ${b} = ${roznica}`);
document.write(`<br>Iloczyn ${a} * ${b} = ${iloczyn}`);
document.write(`<br>Iloraz ${a} / ${b} = ${iloraz}`);
document.write(`<br>Reszta z dzielenia ${a} % ${b} = ${reszta}`);

let zmienna2 = 9;
zmienna2 = zmienna2 + 5; //14
zmienna2 += 5; //19
zmienna2 -= 3;
zmienna2 *= 6; //zmienna2 = zmienna2 * 6;
zmienna2 /= 6;
zmienna2 %= 5;
document.write(`<br>Zmienna2 = ${zmienna2}`);

//komentarze

//a + 7 = 8

/*
komentarz dłuższy
rfgerge
rgsrg
*/
document.write(`<br>a = ${a}`);
document.write(`<br>b = ${b}`);
document.write(`<br>Porównanie: ${a == b}`);
document.write(`<br>Porównanie: ${a == 15}`);
document.write(`<br>Porównanie: ${a != b}`); // != czy jest różne?
document.write(`<br>Większość: ${a > b}`);
document.write(`<br>Większy lub równy: ${a >= b}`);
document.write(`<br>Mniejszość: ${a < b}`);

let c = 15;
let d = '15';
document.write(`<br><br>c = ${c}`);
document.write(`<br>d = '${d}'`);
document.write(`<br>Porównanie: ${c == d}`);
document.write(`<br>Identyczność: ${c === d}`);

let wiek = 14;
let punkty = 10;
document.write(`<br><br>Sprawdż czy wiek > 10 i punkty < 10: 
${wiek > 10 && punkty > 10}`);//koniunkcja logiczna && = i
document.write(`<br>Sprawdź czy wiek > 10 lub punkty > 10: 
${wiek > 10|| punkty > 10}`);// || = lub

