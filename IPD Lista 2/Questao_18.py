from random import randrange
import copy

m = 3

def entrada():
    matriz = []
    vetor_b = []
    for i in range(m):
        matriz.append([])
        for j in range(m):
            matriz[i].append(randrange(0,10))
    
    # print('Matriz')
    # for i in matriz:
    #     for j in i:
    #         print('{:d}'.format(j),end=' ')
    #     print('')

    for i in range(m):
        vetor_b.append(randrange(0,10))
    # print('Vetor b')
    # for i in vetor_b:
    #     print('{:d}'.format(i),end='\n')

    return matriz, vetor_b



def determinante(matriz):
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




def Cramer(matriz,vetor_b):
    detA = int()
    vetor_solucao = []
    matriz_temporaria = matriz.copy()
    detA = determinante(matriz)
    print('Determinante', detA)
    if (detA == 0):
        print("Não é possível aplicar a regra de Cramer")
        return []
    else:
        for i in range(m):
            # print('Matriz')
            # matriz_temporaria = copy.deepcopy(matriz)
            # imprime_matriz(matriz_temporaria)
            for j in range(m):
                matriz_temporaria[j][i] = vetor_b[j]
            # print('Matriz temporária')
            # imprime_matriz(matriz_temporaria)
            vetor_solucao.append(determinante(matriz_temporaria)/detA)
        return vetor_solucao

def imprime_matriz(matriz_temporaria):
        for k in matriz_temporaria:
                for l in k:
                    print('{:d}'.format(l),end=' ')
                print('')

matriz, vetor_b = entrada()
vetor_solucao = Cramer(matriz,vetor_b)
if vetor_solucao != []:
    print('solução = {}'.format(vetor_solucao))