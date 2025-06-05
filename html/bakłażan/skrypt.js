const buttons = document.querySelectorAll("button")
const text = document.querySelector("#tekst")


let cena = 0
let ilosc = 0

function update() {
    const razem = document.querySelector("#razem")
    const ilosc2 = document.querySelector("#ilosc")
    razem.innerHTML = `Razem: ${cena}zł`
    ilosc2.innerHTML = `Ilość produktów: ${ilosc}`
}


document.addEventListener("click", (e)=>{
    let btn = e.target.id
    switch (btn) {
        case "glowna":
            text.innerHTML = `<h1 class="napis1">Zapiekame bakłażany z kuchni gruzińskiej</h1>
<p class="text1">Zapiekane bakłażany to znakomita przystawka lub
    dodatek do dania kuchni gruzińskiej. Nadają się również<br>
do umieszczenia na stole szwedzkim.</p>

<h1 class="napis2">Składniki<hr width="1115%" color="blueviolet"></h1>
<ul class="lista">
<li>1 łyżka stołowa oliwy</li>
<li>1 posiekany ząbek czosnku</li>
<li>Obrany i drobno posiekany świerzy korzeń imbiru</li>
<li>250g mielonej wieprzowiny lub wołowiny</li>
<li>1 pokrojona cebula</li>
<li>1 pokrojona laska selera</li>
<li>Utarta na tarce 1 skórka cytryny</li>
<li>Drobno posiekana papryka chili (opcjonalnie)</li>
<li>4 duże bakłażany</li>
</ul>

<img src="Baklazan.png" class="img">

<h1 class="napis3">Przepis</h1>
<p class="text2">Podgrzej olej w patelni z wypukłym dnem. Wrzuć na patelnię
czosnek i mieszając go podsmaż do koloru złocistego.<br><br>

Zmniejsz ogień i dodaj imbir oraz mięso mielone. Ciągle mieszając usmaż
wszystko do koloru lekko brązowego, po czym dodaj<br> resztę składników opócz
bakłażanów. Smaż wszystko przez minutę, a następnie zdejmij patelnię 
z ognia i pozwól, aby potrawa lekko ostygła.<br><br>

Wydryluj i usuń nasiona z bakłażanów, 
po czym potnij bakłażany na grube plastry.<br><br>

Podziel usmażone mięso mielone do plastrów i tak przygotowane bakłażany
ułóż w naczyniu zaroodpornym.<br><br>

Włóż naczynie na 25min do piekarnika rozgrzanego do 200 stopni. Po tym 
czasie danie jest gotowe do bezpośredniego spożycia.
</p>`
            break;
        case "przepisy":
            text.innerHTML = `<h1 class="napis1">Wege burgery z pieczonym bakłażanem</h1>
<p class="text1">Pyszny sposób na bakłażana! Zamiast smażyć na patelni
    w panierce, można go upiec, będzie równie smaczny,<br> a zdecydowanie
    zdrowszy i mniej nasączony tłuszczem. Tak upieczone bakłażany mogą
    być wegetariańskim "kotletem" do wege burgerów.</p>

<h1 class="napis2">Składniki<hr width="1115%" color="blueviolet"></h1>
<ul class="lista">
<li>1 bakłażan</li>
<li>1 i 1/2 łyżeczki soli</li>
<li>ok. 6 plasterków sera koziego lub mozzarelli</li>
<li>4 łyżki oliwy extra vergine</li>
<li>1/2 łyżeczki suszonego oregano</li>
<li>opcjonalnie pół łyżeczki płatków chili</li>
<li>panierka: 2/3 szklanki bułki tartej + 1/3 szklanki tartego parmezanu</li>
</ul>

<img src="burger.png" class="img2">

<h1 class="napis3">Przepis</h1>
<p class="text2">
Bakłażana pokroić na grube plastry, posypać je solą i odłożyć na 30 minut.<br>
    Następnie dokładnie opłukać pod zimną wodą i osuszyć. Bułkę rozmiksować<br>
    w melakserze razem z tartym parmezanem lub po prostu wymieszać, wsypać do jednego talerza.
Do drugiego talerza wlać oliwę, dodać pieprz i oregano oraz płatki chili<br>
jeśli ich używamy. Bakłażany obtoczyć najpierw w oliwie, następnie w mieszance bułki i parmezanu, układać na blaszce do pieczenia wyłożonej papierem i piec przez 30 minut w piekarniku nagrzanym do 200 stopni C.
Następnie na bakłażanie położyć ser kozi i zapiekać jeszcze przez ok. 5 minut<br>
aż ser się roztopi.
Sałatę opłukać, posiekać, wymieszać ze szczypiorkiem,
doprawić solą i pieprzem. Cebulę pokroić na cienkie plasterki,
doprawić solą. Sos koperkowy i paprykowy: wymieszać składniki
w oddzielnych miseczkach.
Bułki przekroić na pół i podgrzać w piekarniku
(np. z funkcją grilla) lub opiec na patelni grillowej.
Na dolnej połówce rozsmarować sos koperkowy, dodać sałatę i cebulę
, ułożyć pieczonego bakłażana, plasterek pomidora, przykryć drugą połową bułki posmarowanej sosem paprykowym i podawać.
</p>`
            break;
        case "napisz":
            text.innerHTML = `<h1 class="napis1">Napisz do nas</h1>
<p class="text3">
Email: baklazan@gmail.com<br><br>
Telefon: 534 555 356
</p>



<img src="koperta.png" class="img3">


<form class="list">
<input type="text" placeholder="Podaj swój Email" class="input_text"><br>
<input type="text" placeholder="Podaj swoje imię" class="input_text"><br>
<textarea cols="100" rows="17" placeholder="Wpisz tutaj tekst..."></textarea><br>
<center><input type="submit" value="Wyślij" class="input">
<input type="reset" value="Wyczyść" class="input"></center>
</form>`
            break;
        case "sklep":
            text.innerHTML = `<h1 class="napis1">Sklep internetowy</h1>


<img src="koszyk.png" class="img3">


<div class="zakupy">
<img src="bakdokupienia.png" height="170" width="170"><br>
<center>
    Bakłażan<br>
    Cena: 10zł<br>
<button type="button" class="kup" id="baklazann">Dodaj do koszyka</button></center><br>
</div>

<div class="zakupy2">
<img src="czosnek-szt.png" height="170" width="170"><br>
<center>
    Czosnek<br>
    Cena: 7zł<br>
<button type="button" class="kup" id="czosnek">Dodaj do koszyka</button></center><br>
</div>

<div class="zakupy3">
<img src="cebula-wolska-5g.png" height="170" width="170"><br>
<center>
    Cebula<br>
    Cena: 6zł<br>
<button type="button" class="kup" id="cebula">Dodaj do koszyka</button></center><br>
</div>

<div class="zakupy4">
<img src="seler.png" height="170" width="170"><br>
<center>
    Seler<br>
    Cena: 12zł<br>
<button type="button" class="kup" id="seler">Dodaj do koszyka</button></center><br>
</div>


<div class="razem">
<img src="koszyk.png" height="170" width="170"><br>
<center>
    <p id="razem">Razem: 0zł</p>
    <p id="ilosc">Ilość produktów: 0</p>
</center><br>
</div>`
            break;


        case "baklazann":
            cena += 10
            ilosc += 1
            update()
            break;
        case "czosnek":
            cena += 7
            ilosc += 1
            update()
            break;
        case "cebula":
            cena += 6
            ilosc += 1
            update()
            break;
        case "seler":
            cena += 12
            ilosc += 1
            update()
            break;
        default:
            break;
    }
})






