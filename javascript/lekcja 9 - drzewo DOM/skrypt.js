
//DOM - Document Object Model

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

//window.open("test.html");
//window.close();

console.log(document.URL);       //life server "Ritwick Dey" (udawany serwer)
console.log(document.title);
console.log(document.lastModified);
console.log(document.cookie);


const h1 = document.getElementById("tytul");
console.dir(h1);
//h1.style.backgroundColor = "red";
h1.style = "background-color: cyan";  //inny sposób
h1.style.color = "green";


const par = document.getElementsByTagName("p");   //wszystkie <p>
console.log(par);
par[2].style.fontSize = "25px";

for (let i = 0; i < par.length; i++) {
    const element = par[i];
    element.style.backgroundColor = "orange";
    element.style.color = "gray"
}
for (const element of par){      //inny sposób
    element.style.fontFamily = "Arial"  
}


const parA = document.getElementsByClassName("a");
console.log(parA);

for (const element of parA){
    element.style.letterSpacing = "10px"
}


const h1Q = document.querySelector("#tytul");
console.log(h1Q);
//h1Q.innerHTML = "Na następnej lekcji sprawdzian";  // = podmienia
h1Q.innerHTML += "!!!";                              // += dodaje


const parQ = document.querySelectorAll("p");
console.log(parQ);

