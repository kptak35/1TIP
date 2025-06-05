let osoba1 = {
    imie: "Kamil",
    nazwisko: "Ptak",
    rok_urodzenia: 2009,
    adres: {
        miejscowosc: "miejscowosc",
        ulica: "ulica",
        nr_domu: 420,
        kod_pocztowy: "32-007",
        wyswitl_adres: function(){
            document.write(`Adres: ${this.miejscowosc}, ${this.ulica}, ${this.nr_domu}, ${this.kod_pocztowy} <br>`)
        }
    },
    przedstaw_sie: function(){
        document.write(this.imie + " " + this.nazwisko + "<br>");
    },
}

let osoba2 = {
    imie: "Julia",
    nazwisko: "Puchalska",
    rok_urodzenia: 2002,
    adres: {
        miejscowosc: "miejscowosc2",
        ulica: "ulica2",
        nr_domu: 422,
        kod_pocztowy: "32-002",
        wyswitl_adres: function(){
            document.write(`Adres: ${this.miejscowosc}, ${this.ulica}, ${this.nr_domu}, ${this.kod_pocztowy} <br>`)
        }
    },
    przedstaw_sie: function(){
        document.write(this.imie + " " + this.nazwisko + "<br>");
    },
}

let osoba3 = {
    imie: "Kacper",
    nazwisko: "Wyroba",
    rok_urodzenia: 2003,
    adres: {
        miejscowosc: "miejscowosc3",
        ulica: "ulica3",
        nr_domu: 423,
        kod_pocztowy: "32-003",
        wyswitl_adres: function(){
            document.write(`Adres: ${this.miejscowosc}, ${this.ulica}, ${this.nr_domu}, ${this.kod_pocztowy} <br>`)
        }
    },
    przedstaw_sie: function(){
        document.write(this.imie + " " + this.nazwisko + "<br>");
    },
}




let Uczniowie = [osoba1, osoba2, osoba3];

for(const osoba of Uczniowie){
    osoba.przedstaw_sie()
}