print("Podaj trzy liczby")

#a = float(input("Liczba a: "))
#b = float(input("Liczba b: "))
#c = float(input("Liczba c: "))
#
# if a >= b and a >= c:
#     print("Największe jest a")
# elif b >= a and b >= c:
#     print("Największe jest b")
# else:
#     print("Największe jest c")


liczba = float(input("Podaj 1 liczbę: "))
max = liczba

for i in range(4):
    liczba = float(input("Podaj kolejną liczbę "))
    if liczba > max:
        max = liczba
    
print(f"Największa liczba to {max}")
