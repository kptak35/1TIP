let kolor = "magenta";//"wybieranie"

switch (kolor) {
    case "czarny":
        document.write("Kolor czarny - #000000");
        break;
    case "biały":
        document.write("Kolor biały - #FFFFFF");
        break;
    case "czerwony":
        document.write("Kolor czerwony - #FF0000");
        break;
    case "zielony":
        document.write("Kolor zielony - #00FF00");
        break;
    case "niebieski":
        document.write("Kolor niebieski - #0000FF");
        break;
    case "magenta":
        document.write("Kolor magenta - #FF00FF");
        break;
    default://gdy wybranego koloru nie ma na liście
        document.write("Nie znam takiego koloru")
        break;
}