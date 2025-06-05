a = 0
b = 1

fib = [a, b]

while a <= 4000:
    #temp = a
    #a = b
    #b = temp + b
    a, b = b, a + b
    print(f"Aktualna wartość a = {a}, b = {b}")
    fib.append(b)
print(fib)