def entrada():
    n = int(input('Digite o numero: '))
    return n

def primos(i):
    log = False
    for k in range(i+1,1000):
        if (k == 2):
            return 2
        else:
            for j in range(2, k):
                if ( k % j == 0):
                    log = True
                    break
            if (not log):
                return k
            log = False

def fat_primo(num):
    p = 2
    matriz = []
    cont=0
    while (num != 1):
        print(num,p)
        if (num % p == 0):
            num = num // p
            cont+=1
        elif (cont != 0):
            matriz.append([p,cont])
            cont = 0
            p = primos(p)
        else:
            p = primos(p)
    if (cont != 0):
        matriz.append([p,cont])

        
    print(matriz)
    return matriz

def imprime(matriz):
    vetor = []
    for i in matriz:
        vetor.append('{}^{}'.format(i[0],i[1]))
    return vetor
            

n = entrada()
matriz = fat_primo(n)
vetor = imprime(matriz)
print(vetor)

