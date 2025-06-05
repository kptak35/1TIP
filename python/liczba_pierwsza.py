def pierwsza(n: int) -> bool:
    if n < 2:
        return False
    
    for i in range(2, round(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


#print(pierwsza(75027275846729))

def main():
    liczba = int(input("Podaj liczbę: "))
    
    if pierwsza(liczba) == True:
        print(f"Liczba {liczba} jest pierwsza")
    else:
        print(f"Liczba {liczba} nie jest pierwsza")
        


if __name__ == "__main__":
    main()