#import random  
from random import randint  #aktywowanie funkcji z biblioteki
a = 1
b = 100
liczba = randint(a, b)
odp = 0
i = 0

while liczba != odp:
    i += 1
    #odp = int(input("Podaj swoją liczbę: "))
    odp = (a + b) // 2
    print(odp, end=" - ")
    if odp > liczba:
        print("Za dużo")
        b = odp - 1
    elif odp < liczba:
        print("Za mało")
        a = odp + 1
        
        
print("Dobrze")
print(f"Zgadłeś w {i} próbach")