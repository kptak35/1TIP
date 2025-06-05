print("Hello world")
print('Hello world')

#imie="Kamil"      #-notatka jednoliniowa
imie= input("Podaj imię: ")

print(imie)

print("Witaj", imie, "!!")
print(f"Witaj {imie} !!")

print("Witaj", imie, "!!", sep="-", end=". ")   #sep-separator
print(f"Witaj {imie} !!")


a = int(input("Podaj pierwszą liczbę: "))   #int-liczba całkowita | float-liczba z ułamkiem
b = float(input("Podaj drugą liczbę: "))
suma = a + b
print(suma)

a = "Koniec lekcji"  #kasuje poprzednie a
print(a)