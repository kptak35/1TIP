document.write("<h2>Wybory</h2>");

let wiek = prompt("Ile masz lat?");

if(wiek >= 18){
    document.write("<p>Możesz głosować w wyborach</p>");
}else{
    document.write("<p>Jesteś jeszcze za młody</p>");
    let roznica = 18 - wiek;
    document.write("Zapraszam " + roznica + " lat");//lub:
    document.write(`<p>Zapraszam ${roznica} lat</p>`);
}