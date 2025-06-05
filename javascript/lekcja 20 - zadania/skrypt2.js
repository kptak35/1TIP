let imie = document.querySelector("#nameInput");
let email = document.querySelector("#emailInput");
let submit = document.querySelector("#submit");

submit.addEventListener("click", (e)=>{
    if (imie.value == "" || email.value == "") {
        e.preventDefault()
        alert("Pola muszą być wypełnione")
    }
})

