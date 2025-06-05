let butt = document.querySelector("#addButton");
let list = document.querySelector("#itemList");


butt.addEventListener("click", ()=>{
    list.innerHTML += "<li>Nowy element</li>"
})


