from math import sqrt
n = int(input('N: '))

def primos(n):
    contador = 0
    for i in range(3,n,2):
        raiz = int(sqrt(i))
        # print('{:d}'.format(raiz))
        for j in range(3,raiz+1,2):
            # print("{:d}% {:d}".format(i,j))
            if (i % j == 0):
                contador+=1
                break
        if (contador == 0):
            print('{:d} é primo '.format(i))
        contador = 0

        


print('2 é primo')
primos(n)
