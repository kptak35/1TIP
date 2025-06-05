const zmiana = document.querySelector("#zmiana_strony");


document.addEventListener("click", (e)=>{
    let btn = e.target.id

    localStorage.setItem("currentPage", btn);

    switch (btn) {
        case "index":
            zmiana.innerHTML = `<div class="kwadrat1">
    <div class="div_kwa1">
    <marquee>Zawartość strony</marquee>
    <div class="pasek"><marquee direction="right">WITAM NA MOJEJ STRONIE</marquee></div>
    <div><marquee>PONOWNIE WITAM NA STRONIE</marquee></div>
    </div>
    <div class="randomtext"><b>TEKST</b></div>
    <div class="div_kloc1"><div class="kloc1"></div></div>
</div>

<div class="kwadrat2">
    <div class="kloc2"></div>
</div>`
            break;
        case "kalendarz":
            zmiana.innerHTML = `<div class="kwadrat1">
    <marquee>Zawartość strony</marquee>
    <div class="pasek"><marquee direction="right">15 dni marca</marquee></div>

    <h1>Kalendarz marzec</h1>

    <div class="dni_center">
    <div class="dni">
        <div class="d1">1 marzec</div>
        <div class="d2">2 marzec</div>
        <div class="d3">3 marzec</div>
        <div class="d4">4 marzec</div>
        <div class="d5">5 marzec</div>
        <div class="d6">6 marzec</div>
        <div class="d7">7 marzec</div>
        <div class="d8">8 marzec</div>
        <div class="d9">9 marzec</div>
        <div class="d10">10 marzec</div>
        <div class="d11">11 marzec</div>
        <div class="d12">12 marzec</div>
        <div class="d13">13 marzec</div>
        <div class="d14">14 marzec</div>
        <div class="d15">15 marzec</div>
    </div></div>
</div>

<div class="kwadrat2">
        <p>Jakiś tekst</p>
</div>`
            break;
        case "galeria":
            zmiana.innerHTML = `<div class="kwadrat1">
    <div class="galeria">
    <a href="#"><h1>Zapraszamy do oglądania galerii</h1></a>
    </div>

    <img src="wisetree.jpg" class="img_drzewo" width="350" height="500">
    <img src="drewno.jpg" class="img_drzewo" width="400" height="500">
</div>

<div class="kwadrat2">
</div>`
            break;
        case "panel":
            zmiana.innerHTML = `
<div class="kwadrat1">
    <div class="portal">
        <h2 class="h2">AKTUALNOŚCI</h2>
        <p>Nasze wszystkie aktualności zbieramy z onet.pl, jeśli chcesz 
            świeże informacje kliknij [<a href="https://www.onet.pl/">Więcej...</a>]</p>
        <ul>
            <li><a href="https://wiadomosci.onet.pl/kraj/do-kiedy-rozliczyc-pit-2025-jak-skorzystac-z-mniej-znanych-ulg/5jpbx96?utm_term=clk:ea524f26-0a1d-4a69-8b47-9b65d6d30089">Zostało mało czasu na rozliczenie PIT! Jak uniknąć błędów i skorzystać z dodatkowych ulg?</li></a>
            <li><a href="https://www.onet.pl/?utm_source=wiadomosci.onet.pl_viasg_wiadomosci&utm_medium=referal&utm_campaign=leo_automatic&pid=48c40955-d313-429d-afde-caa6dd85ee94&sid=b177a2c9-166f-4113-9b28-185bbe554807&utm_v=2&mp=promo">Tragiczne wieści z Krakowa. Nie żyje zaatakowany lekarz</li></a>
        </ul>
        <h2 class="h2">POGODA</h2>

        <div class="pogoda">
            <h2><u>PONIEDZIAŁEK</u></h2>
        </div>
        <div class="pogoda_zdj">
        <a href="https://pogoda.interia.pl/prognoza-dlugoterminowa-niepolomice,cId,22859">
        <img src="pon2.jpg" width="300px" height="250px"></a></div>

        <div class="pogoda">
            <h2><u>WTOREK</u></h2>
        </div>
        <div class="pogoda_zdj">
        <a href="https://pogoda.interia.pl/prognoza-dlugoterminowa-niepolomice,cId,22859">
        <img src="full_Mróz_Antarktyda_stacja_Wostok.jpg" width="280px" height="280px"></a></div>

        <div class="pogoda">
            <h2><u>Sport</u></h2>
        </div>
        <div class="pogoda_zdj">
        <a href="https://przegladsportowy.onet.pl">
        <img src="sport.webp" width="270px" height="250px"></a></div>

        <div class="portal_box"><div class="kloc_portal">PORTAL.PL</div></div>
    </div>
</div>

<div class="kwadrat2"><div class="portal_kwadrat2">
    podstrona dotycząca portalu informacyjnego
    <div class="load"><img src="load-37_256.gif" width="200" height="200"></div>
</div></div>
`
            break;

    }
    
})


window.addEventListener("DOMContentLoaded", () => {
    const savedPage = localStorage.getItem("currentPage") || "index";
    document.getElementById(savedPage)?.click();
});