from random import randrange

m = 3
matriz = []
for i in range(m):
    matriz.append([])
    for j in range(m):
        matriz[i].append(randrange(0,10))


def determinante():
    prod = int(1)
    soma1 = int()
    soma2 = int()
    for i in range(m):
        for j in range (m-1):
            if (j == 0):
                prod = matriz[j][(i+j)%m] * matriz[j+1][(i+j+1)%m]
                # print('{:d} * {:d}'.format(matriz[j][(i+j)%m],matriz[j+1][(i+j+1)%m]))
            else:
                # print('{:d} * {:d}'.format(prod,matriz[j+1][(i+j+1)%m]))
                prod *= matriz[j+1][(i+j+1)%m]
                
        soma1 += prod
        prod = 0
    # print('{:d}'.format(soma1))
    prod = 0
    for i in range(m):
        for j in range(m-1,0,-1):
            if (j == (m-1)):
                prod = matriz[j][(i+(m-1-j))%m] * matriz[j-1][(i+1)%m]
            else:
                prod *= matriz[j-1][(i+2)%m]
        soma2 += prod
        prod = 0
    return soma1- soma2




for i in matriz:
    for j in i:
        print(j,end=' ')
    print('')

print('Determinante ={:d}'.format(determinante()))
# determinante()