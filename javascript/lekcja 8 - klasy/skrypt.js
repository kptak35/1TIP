class Osoba{
    adres = {}
    constructor(imie, nazwisko, rok_urodzenia, miejscowosc=null, ulica=null, nr_domu=null){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rok_urodzenia = rok_urodzenia;
        this.kolor = "niebieski";
        this.adres.miejscowosc = miejscowosc;
        this.adres.ulica = ulica;
        this.adres.nr_domu = nr_domu;

        document.write("<p>Nowa osoba została utworzona</p>");
    }

    przedstaw_sie(){
        return this.imie + " " + this.nazwisko + "<br>";
    }
    zwroc_adres(){
        if(this.adres.miejscowosc == null || this.adres.ulica == null || this.adres.nr_domu == null){
            return "Niepełne dane adresowe"
        }
        return this.adres.miejscowosc + " " + this.adres.ulica + " " + this.adres.nr_domu + "<br>";
    }
}


let osoba1 = new Osoba("Kamil", "Ptak", 2009, "Niepołomice", "Szkolna", 1);
let osoba2 = new Osoba("Julia", "Puchalska", 2004, "Niepołomice", "Szkolna", 2);
let osoba3 = new Osoba("Kacper", "Wyroba", 2001);

//let uczniowie = new Array(osoba1, osoba2, osoba3);
let uczniowie = [osoba1, osoba2, osoba3];

for (const uczen of uczniowie) {
    document.write(uczen.przedstaw_sie());
    document.write(uczen.zwroc_adres() + "<br>");
}


