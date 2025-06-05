print("Program kalkulator")
print("1. Dodawanie")
print("2. Odejmowanie")
print("3. Mnożenie")
print("4. Dzielenie")
print("5. Dzielenie całkowite")
print("6. Reszta z dzielenia")
print("7. Potęgowanie")

liczba1 = int(input("Podaj 1 liczbę: "))
liczba2 = int(input("Podaj 2 liczbę: "))
dzialanie = input("Wybierz działanie: ")

if dzialanie == '1':
    wynik = liczba1 + liczba2
elif dzialanie == '2':
    wynik = liczba1 - liczba2
elif dzialanie == '3':
    wynik = liczba1 * liczba2
elif dzialanie == '4':
    if liczba2 != 0:
        wynik = liczba1 / liczba2
    else:
        wynik = "Błąd dzielenia przez 0!"
elif dzialanie == '5':
    if liczba2 != 0:
        wynik = liczba1 // liczba2
    else:
        wynik = "Błąd dzielenia przez 0!"
elif dzialanie == '6':
    if liczba2 != 0:
        wynik = liczba1 % liczba2
    else:
        wynik = "Błąd dzielenia przez 0!"
elif dzialanie == '7':
    wynik = liczba1 ** liczba2
    
else:
    wynik = "Błędne działanie"
    
print(f"Wynik działania: {wynik}")



