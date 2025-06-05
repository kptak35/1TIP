const nazwa = document.querySelector(".main-main")
const menu = document.querySelector(".menu")



menu.addEventListener("click", (e) => {
    if (!["nazwa", "historia", "koncerty", "galeria", "dyskografia", "teledyski"].includes(e.target.id)) return;
    nazwa.classList.add("fade-out");

    setTimeout(() => {
        switch (e.target.id) {
            case "nazwa":
            nazwa.innerHTML = `<div class="div"><img class="zdje" src="palion-logo.png" height="100px" width="auto">
    <h1 class="text1">PALION<br>STYLE</h1></div>

    <div class="zdj"><a href="https://www.youtube.com/@Palion"><img class="palion" src="hq720.jpg" height="90%" width="auto"></a></div>`
            break;

        case "historia":
            nazwa.innerHTML = `<div class="div"><img class="zdje" src="palion-logo.png" height="100px" width="auto">
    <h1 class="text1">PALION<br>STYLE</h1></div>

<p class="hist_text">Historia<br><br>Paweł Palion założył swój kanał na YouTube 29 czerwca 2015 roku.
 W styczniu 2023 roku jego kanał zdobył ponad 670 milionów wyświetleń.
  Na swoim kanale nagrywa głównie gry komputerowe oraz filmy gdzie reaguje na inne widea.
   Jego filmy przeznaczone są do młodszej grupy odbiorców.
27 października 2023 roku ukazał się debiutancki solowy album studyjny Paliona pt.
 Tryb kreatywny. Album zadebiutował na 1. miejscu listy OLiS. Obecnie Paweł Palion
  posiada 4 kanały na YouTube: Palion (1,68 mln subskrypcji) Palion Games (1,33 mln subskrypcji)
   Palion Games Plus (1 mln. subskrypcji) oraz kanał Siostra vs Brat (87,9 tys. subskrypcji).
    Co ciekawe na kanale SIOSTRA vs BRAT nagrał tylko dwa odcinki a i tak zdobył na nim prawie
     100 tys. subskrybcji.
Poza tym, Palion, odbył 2 trasy koncertowe oraz stworzył swoją grę, pt. Lion Quest. </p>`
            break;

        case "koncerty":
            nazwa.innerHTML = `<div class="div"><img class="zdje" src="palion-logo.png" height="100px" width="auto">
    <h1 class="text1">PALION<br>STYLE</h1></div>


    <div class="kon_main"><p>Znany YouTuber w swojej muzycznej odsłonie, zaprezentuje materiał ze swojej debiutanckiej płyty
 - Tryb Kreatywny oraz nowe, specjalnie przygotowane na trasę piosenki. 
Na koncercie usłyszycie wszystkie największe hity Paliona takie jak: „Zielone”, „Hejt”, „Mona Lisa”, „Gra”,
 „Milion”, „Zielone 2”, „Zielone 3”, „Ale, ale 2” i inne.
Na scenie będzie towarzyszyć mu Jonatan. Ten zgrany i energetyczny duet, z pewnością rozgrzeje Was 
do czerwoności i da niezapomniane wrażenia!</p><img src="kon.webp" height="100%" width="auto"></div>`
            break;

        case "galeria":
            nazwa.innerHTML = `<div class="div"><img class="zdje" src="palion-logo.png" height="100px" width="auto">
    <h1 class="text1">PALION<br>STYLE</h1></div>

<div class="gal">
    <div><img src="raaaaaaaaaaa.jpg"></div>
    <div><img src="1_884710775_original.jpg"></div>
    <div><img src="palion-desktop.webp"></div>
    <div><img src="palionitto-zielonitto.png"></div>
    <div><img src="mrpalion.jpg"></div>
    <div><img src="noobek.jpg"></div>
</div>`
            break;

        case "dyskografia":
            nazwa.innerHTML = `<div class="div"><img class="zdje" src="palion-logo.png" height="100px" width="auto">
    <h1 class="text1">PALION<br>STYLE</h1></div>

    <ol class="lista">
        <li>2017 - „Jest nas już 100.000”</li>
        <li>2019 - „Robię hajs”</li>
        <li>2020 - „Milion” - ZPAV: złota płyta</li>
        <li>2020 - „Ale ale”</li>
        <li>2021 - „Zielone” (gośc. Neon) - ZPAV: złota płyta</li>
        <li>2022 - „Gra”</li>
        <li>2022 - „USA” - ZPAV: złota płyta</li>
        <li>2022 - „Czerwone” (gośc. R3DOC)</li>
        <li>2022 - „Zielone 2” - ZPAV: złota płyta</li>
        <li>2023 - „Tryb kreatywny”(album) - ZPAV: złota płyta
        <li>2023 - „Zielone 3” (gośc. Neon) - ZPAV: złota płyta</li>
        <li>2024 - „Ale ale 2”</li>
        <li>2024 - „Mam bana”</li>
        <li>2024 - „Życie tak jak w bajce”</li>
        <li>2024 - „Zielone 4” </li>
    </ol>`
            break;

        case "teledyski":
            nazwa.innerHTML = `<div class="div"><img class="zdje" src="palion-logo.png" height="100px" width="auto">
    <h1 class="text1">PALION<br>STYLE</h1></div>

<p class="tele_text">Najpopularniejsze teledyski Paliona</p>

    <div class="tele">

    <div><video height="80%" width="95%" src="♪ PALION - ZIELONE feat. NeoN [OFFICIAL MUSIC VIDEO] ♪.mp4"
         controls poster="maxresdefault.jpg"></video>
        <br>„Zielone”</div>

    <div><video height="80%" width="95%" src="♪ PALION - MAM BANA [OFFICIAL MUSIC VIDEO] ♪.mp4"
         controls poster="mambana.jpg"></video><br>„Mam bana”</div>
    
    <div><video height="80%" width="95%" src="♪ PALION - TRYB KREATYWNY [OFFICIAL MUSIC VIDEO] ♪.mp4"
         controls poster="tryb.jpg"></video><br>„Tryb kreatywny”</div>
</div>`
            break;
        }

        nazwa.classList.remove("fade-out");
        nazwa.classList.add("fade-in");

        setTimeout(() => nazwa.classList.remove("fade-in"), 400);
    }, 400);
});


