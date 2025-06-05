lista = [10, 34, 48, 26, 2, 44, 13, 24, 17, 37]

n = len(lista)  #len - funkcja sprawdzająca długość
print(n)
print(lista[2])
print("-------------------------------")

print("Elementy listy: ")
for liczba in lista:
    print(f"{liczba} ", end="")
print()
print()  

for j in range(n-1):
    zamiana = 0
    for i in range(n-1-j):
        if lista[i] > lista[i+1]:  # "swap"
            temp = lista[i]        
            lista[i] = lista[i+1]  
            lista[i+1] = temp
            zamiana += 1
    #print(zamiana)
    if zamiana == 0:
        break
            
print()
print("Posortowana lista: ")
for liczba in lista:
    print(f"{liczba} ", end="")