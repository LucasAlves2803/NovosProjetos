def entrada():
    n = int(input('Digite o numero'))
    return n


def converte(n):
    roma = '' 
    while (n):
        print(n)
        if (n >= 1000):
            n = n - 1000
            roma += 'M'
        elif (n >= 500):
            if (n // 100 == 9):
                roma += 'CM'
                n -= 900
            else:
                roma += 'D'
                n -= 500
        elif (n >= 100):
            if (n // 100 == 4):
                n -= 400
                roma += 'CD'
            else:
                n -= 100
                roma += 'C'

        elif (n >= 50):
            if (n // 10 == 9):
                n -= 90
                roma += 'XC'
            else:
                n -= 50
                roma += 'L'
        elif (n >= 10):
            if (n // 10 == 4):
                n -= 40
                roma += 'XL'
            else:
                n -= 10
                roma += 'X'
        elif (n >= 5):
            if (n == 9):
                n -= 9
                roma += 'IX'
            else:
                n -= 5
                roma += 'V'
        elif (n >= 1):
            if (n == 4):
                n -= 4
                roma += 'IV'
            else:
                n -= 1
                roma += 'I'
    return roma 


n = entrada()
print(converte(n))

