
const samochod = {
    marka: "Fiat",
    model: "126p",
    rok_produkcji: 1987,
    przebieg: 15000,
    wyswietl_dane: function() {
        document.write(`Marka: ${this.marka} | Model: ${this.model} | Rok produkcji: ${this.rok_produkcji} | Przebieg: ${this.przebieg}`)
    }
}

samochod.wyswietl_dane();

