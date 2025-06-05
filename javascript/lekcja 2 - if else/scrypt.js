let a = 8;
let b = 7;

document.write('<h1>Instrukcja warunkowa</h1>');
document.write(`<p>a = ${a}</p>`);
document.write(`<p>a = ${b}</p>`);

if(a > b){
    document.write("a jest większe od b");
}
else if(a == b){
    document.write("<p>a jest nie większe od b</p>");
}
else{
    document.write("<p>b jest większe od a</p>");
}

document.write('<p>Dalsza część programu</p>');