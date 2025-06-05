const submit_butt = document.querySelector("button[type='submit']");
const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const email = document.querySelector("#email");
const temat = document.querySelector("#temat");
const wiadomosc = document.querySelector("#wiadomosc");
const regulamin = document.querySelector("#regulamin");
const wynik = document.querySelector("#wynik");


submit_butt.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = 0;
    wynik.innerHTML = "";

    //console.dir(imie.value.length);

    if(imie.value.length < 3){
        wynik.innerHTML += "<p>Imię musi mieć przynajmniej 3 znaki</p>";
        error++;
    }
    if(nazwisko.value.length < 3){
        wynik.innerHTML += "<p>Nazwisko musi mieć przynajmniej 3 znaki</p>";
        error++;
    }
    if(email.value.length < 5 || !email.value.includes('@')  || !email.value.includes('.')){   // ! - not
        wynik.innerHTML += "<p>To nie jest poprawny email</p>";
        error++;
    }
    if(temat.value == '0'){
        wynik.innerHTML += "<p>Nie wybrałeś żadnego tematu</p>";
        error++;
    }
    if(wiadomosc.value.length < 10){
        wynik.innerHTML += "<p>Wiadomość musi mieć przynajmniej 10 znaków</p>";
        error++;
    }
    if(!regulamin.checked){
        wynik.innerHTML += "<p>Musisz zapoznać się z regulaminem</p>";
        error++;
    }

    if(error > 0) return; //kończy działanie funkcji

    //document.forms[0].submit();   //wysyła
    if(error == 0){
        wynik.innerHTML += `<h1>Twoja wiadomość została wysłana</h1><p>${imie.value} ${nazwisko.value}</p>
        <p>Email klienta: ${email.value}</p><p>Temat: ${temat.value}</p><p>Treść wiadomości: ${wiadomosc.value}</p>`
    }
});