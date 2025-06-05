imiona = ["Zosia", "Kasia", "Tomek", "Wojtek"]

print(imiona)
print(imiona[3])
print(imiona[-1]) #pierwszy element od konca
print(imiona[1:3]) #od 1 do 3 (bez 3)
print(imiona[1:]) #od 1 do konca
print(imiona[:2]) #od początku do 2 (bez 2)

print()
imiona[2] = "Atomek" #podmienia
print(imiona)

print(type(imiona)) #typ
imiona.append("Tola") #dodaje
print(imiona)
imiona.insert(1, "Tytus") #dodaje w środku
print(imiona)
print(imiona[1])


print("-----------------------------------------------------------------")
#Krotka - Tuple - jak lista ale nie da się zmienić
owoce = ("jabłko", "gruszka", "banan", "truskawki")

print(owoce)
print(owoce[1])
print(owoce[-1])

#owoce[2] = "Arbuz" #bląd

print(type(owoce))




