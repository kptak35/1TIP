const div_zegar = document.querySelector("#zegar")
const div_data = document.querySelector("#data")
const div_wakacje = document.querySelector("#wakacje")

const holiday = new Date(2025, 5, 27, 12, 0, 0); //rok, miesiąc(od 0), dzień, godzina, minuta, sekunda


let date = new Date();
let now = date.getTime();
let distance = holiday.getTime() - now;
let days = Math.floor(distance / (24 * 60 * 60 * 1000))
let hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000))
let seconds = Math.floor((distance % (60 * 1000)) / 1000)

div_zegar.innerHTML = date.toLocaleTimeString(); 
div_data.innerHTML = date.toLocaleDateString();  
div_wakacje.innerHTML = `${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`

console.log(date)


let zegar = setInterval(function(){
    let date = new Date(); //obecna data
    let now = date.getTime();
    let distance = holiday.getTime() - now;
    
    let days = Math.floor(distance / (24 * 60 * 60 * 1000))
    let hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000))
    let seconds = Math.floor((distance % (60 * 1000)) / 1000)

    div_wakacje.innerHTML = `${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`
    div_zegar.innerHTML = date.toLocaleTimeString(); //obecna godzina
    div_data.innerHTML = date.toLocaleDateString();  //data (według ustawień komputera)
}, 1000) //co sekunde 

