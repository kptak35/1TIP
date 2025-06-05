document.write("<h1>Obiekty</h1>");

let uczen = {
    imie: "Kamil",
    nazwisko: "Ptak",
    rok_urodzenia: 2009,
    pesel: "12345678910",
    klasa: "1TIP",
    nr_w_dzienniku: 18,
    przedstaw_sie: function(){
        document.write(`Nazywam się ${this.imie} ${this.nazwisko}`);
    },
    obecny: function(){
        document.write("<p>Obecny!</p>");
    }
}

uczen.przedstaw_sie();
uczen.obecny();
uczen.imie = "Kacper";
uczen.przedstaw_sie();

uczen.wychowawca = "Barbara Balwierz";
uczen.podaj_wychowawce = function() {
    document.write(`<p>Moim wychowawcą jest ${this.wychowawca}</p>`);
}

uczen.podaj_wychowawce();


