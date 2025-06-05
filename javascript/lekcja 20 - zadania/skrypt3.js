let select = document.querySelector("#mySelect");
let div = document.querySelector("#displayDiv");


div.innerHTML = select.value

select.addEventListener("change", ()=>{
    div.innerHTML = select.value
})



