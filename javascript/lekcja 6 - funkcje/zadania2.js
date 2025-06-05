//zadanie 1
function max(a, b) {
    if(a > b)return a
    else return b
}
document.write(max(4, 8) + "<br>");
document.write(max(12, 10) + "<br>");
document.write(max(5,5) + "<br>");

//zadanie 2
function ocena(a){
    switch (a) {
        case 1:
            document.write("Niedostateczny");
            break;
        case 2:
            document.write("Dopuszczający");
            break;
        case 3:
            document.write("Dostateczny");
            break;
        case 4:
            document.write("Dobry");
            break;
        case 5:
            document.write("Bardzo dobry");
            break;
        case 6:
            document.write("Celujący");
            break;
        default:
            document.write("Błędna ocena");
            break;
    }
}
ocena(6);