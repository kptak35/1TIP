for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FIZZBUZZ", end=" ")
    elif i % 3 == 0:
        print("FIZZ", end=" ")
    elif i % 5 == 0:
        print("BUZZ", end=" ")
    else:
        print(i, end=" ")
        
print()
print("Koniec programu")
    
    
#FIZZ - podzielne przez 3
#BUZZ - podzielne przez 5
#FIZZBUZZ - podzielne przez 3 i 5