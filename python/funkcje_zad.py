#napisz funkcję obliczającą moduł z liczby (wartość bezwzględną(odległość od 0)) z liczby x

def modul(x):
    if x < 0:
        return -x
    else:
        return x


print(modul(-31))
        
#napisz funkcję obliczającą i zwracającą pole prostokąta o bokach a i b

def prostokat(a, b):
    return a * b


print(prostokat(4, 3))

pokoj1 = prostokat(3, 4)
pokoj2 = prostokat(2.5, 3.5)
pokoj3 = prostokat(2, 4)
mieszkanie = pokoj1 + pokoj2 + pokoj3
print(f"Powierzchnia mieszkania wynosi: {mieszkanie}m2")


def suma_liczb(start, n): #start - startowa liczba, n - liczba powtórzeń
    suma = 0
    for liczba in range(start, start+n):
        #print(liczba)
        suma += liczba
    return suma        
        
        
print(suma_liczb(5, 10))











