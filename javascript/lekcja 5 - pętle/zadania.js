document.write("<h2>1. Utwórz program wyświetlający liczby od 5 do 15</h2>")
for (let i = 5; i <= 15; i++){
    document.write(i + " ");
}

document.write("<h2>2. Utwórz program wyświetlający liczby od 20 do 10</h2>")
for (let i = 20; i >= 10; i--){
    document.write(i + " ");
}

document.write("<h2>3/4. Utwórz program wyświetlający 5 linii zawierających twoje imię.</h2>");
for (let i = 0; i < 10; i++) {
    document.write(i+1 + ". Kamil<br>");
}

document.write('<h2>5. Napisz program, który wyprowadzi na ekran monitora prostokąt o bokach 10 na 5, narysowanego za pomocą znaków "*". Wnętrze prostokąta powinno być wypełnione znakami "*".</h2>');
for(let i = 1; i < 51; i++){
    document.write("*");
    if(i % 10 == 0){
        document.write("<br>");
    }
}
document.write("<hr>");
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 10; j++){
        document.write("*");
    }
    document.write("<br>");
}

document.write('<h2>6. Napisz program, który wyprowadzi na ekran monitora prostokąt narysowny za pomocą znaków "*" o wielkości x, y podanej przez użytkownika</h2><br>');
// let x = parseInt( prompt("Podaj szerokość - x: ") );
// let y = parseInt( prompt("Podaj długość - y: ") );
// for(let i = 0; i < y; i++){
//     for(let j = 0; j < x; j++){
//         document.write("*")
//     }
//     document.write("<br>");        // Ctrl + /
// }

document.write('<h2>7. Napisz program wyświtlający tabliczkę mnożenia do 100</h2>');
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        document.write(i + "*" + j + "=" + i*j);
        document.write("<br>");
    }
}

document.write('<h2>8. Napisz program, który wyprowadzi na ekran monitora trójkąt prostokątny narysowany za pomocą znaków "*"</h2>');
for(let i = 1; i < 6; i++){
    for(let j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>");
}

document.write('<h2>9. Napisz program, który wyprowadzi na ekran monitora trójkąt równoramienny narysowany za pomocą znaków "*"</h2>');

