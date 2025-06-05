i = 0

while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)
else:
    print("Zmienna nie jest już mniejsza od 6")
    
print(f"Wartość i po zakończeniu pętli: {i}")
