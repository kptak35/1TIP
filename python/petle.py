for i in [2, 6, 8, 9, 14, 6]:
    print(f"Liczba: {i}")


for i in range(10):  #[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  od 0 do ile
    print(i, "Lubię informatykę")


for i in range(3, 10):  #[3, 4, 5, 6, 7, 8, 9]  od ile, do ile
    print(i, "Lubię pythona")


for i in range(3, 10, 2):   #od ile, do ile, co ile
    print(i, "Lubię programowanie")


print("------------------------------------------------")


kolory = ["czerwony", "zielony", "niebieski", "czarny"]

for kolor in kolory:
    print(kolor)


print("------------------------------------------------")


klasa = ["Kamil", "Irek", "Olek", "Damian", "Viktor"]

i=1

for uczen in klasa:
    print(f"{i}. {uczen}")
    i+=1
    
print("------------------------------------------------")

for index, uczen in enumerate(klasa):  # 2 sposób
    print(f"{index+1}. {uczen}")


print("------------------------------------------------")


for i in range(101):
    if i % 2 == 0:
        print(i, end=" ")



