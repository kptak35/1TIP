let dzientygodnia = prompt("Podaj dzień tygodnia");

switch (dzientygodnia) {
    case "poniedziałek":
        document.write("Nie lubię poniedziałku");
        break;
    case "wtorek":
        document.write("Jeszcze daleko do weekendu");
        break;
    case "środa":
        document.write("To już połowa tygodnia");
        break;
    case "czwartek":
    case "piątek":
        document.write("Już prawie weekend");
        break;
    case "sobota":
    case "niedziela":
        document.write("W końcu weekend!");
        break;
    default:
        document.write("Nie znam takiego dnia tygodnia");
        break;
}

let ocena = 6;

switch (ocena) {
    case 1:
        document.write("<p>Nie przechodzisz dp II klasy</p>");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        document.write("<p>Uzyskałeś promocję dp II klsay</p>");
        break;
    case 6:
        document.write("<p>Uzyskałeś promocję z wyróżnieniem do II klasy</p>");
        break;
    default:
        document.write("<p>Nie ma takiej oceny</p>");
        break;
}