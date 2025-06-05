const teksty = document.querySelector("#teksty");

teksty.addEventListener("click", niepolomice);
function niepolomice(){
    teksty.innerHTML = "Niepołomice"
}

teksty.addEventListener("mouseover", kolor);
function kolor(){
    teksty.style = "color: green"
}

teksty.addEventListener("mouseout", pierwotny);
function pierwotny(){
    teksty.style = "color: black"
}

const zeruj = document.querySelector("#zeruj");
zeruj.addEventListener("click", zero);
function zero(){
    teksty.innerHTML = "Kraków"
    teksty.style = "color: black"
}