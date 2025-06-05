def suma(): #funkcja
    a = int(input('Podaj pierwszą liczbę: '))
    b = int(input('Podaj drugą liczbę: '))
    wynik = a + b
    print(f'Suma liczb {a} + {b} = {wynik}')
    
    
#suma() #wywołanie funkcji


def suma1(a, b):
    return a + b

wynik = suma1(6.7, 8.4) 
print(round(wynik, 2)) #zaokrąglenie do 2 miejsc po przecinku

tekst = suma1("Tomek ", "Atomek")
print(tekst)


def suma2(a:int, b:int) -> int: #przyjmuje i zwraca tylko liczby całkowite
    return a + b

print(suma2(5, 9))