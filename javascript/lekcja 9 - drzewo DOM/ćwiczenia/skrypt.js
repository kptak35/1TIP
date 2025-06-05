const autorQ = document.querySelector("#autor");
autorQ.innerHTML = "Wykonał: Kamil Ptak";

const tytulQ = document.querySelector("#tytul");
tytulQ.style.backgroundColor = "purple";

for (const img of document.images){
    img.style = "border: 4px solid purple";
}

//console.log(document.forms);
//console.log(document.links);

const liQ = document.querySelectorAll("li");
for (let i = 0; i < liQ.length; i++) {
    const element = liQ[i];
    element.style.color = "pink";
}

const headerA = document.querySelectorAll("header > a");
//console.log(headerA);
for (const a of headerA){
    a.style.color = "white";
}

const imgtruskawaka = document.querySelector("#truskawka");
imgtruskawaka.style.width = "400px";


const ul = document.querySelector("ul");
//console.log(ul);
ul.innerHTML += "<li>Czekolada</li>";

const nowy_li = document.createElement("li"); //<li></li>
nowy_li.innerText = "Cukierki";  //<li>Cukierki</li>
nowy_li.style.color = "pink";    //<li style="color: pink">Cukierki</li>

ul.appendChild(nowy_li);
console.log(ul.children)

for (const element of ul.children){
     if(element.innerText == "Czekolada"){
        element.remove();
     }
}

//ul.remove();

const article = document.querySelector("article");
article.innerHTML += "<p>Najlepsze ciasta na świecie</p>";

const new_article = document.createElement("p");
new_article.innerText = "Codziennie super promocje";
article.appendChild(new_article);












































