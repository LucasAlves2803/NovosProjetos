
from pickle import TRUE
from tkinter.tix import Tree


m = 3
n = 2
def cria_matriz():
    ponto1 = str()
    ponto2 = str()
    matriz= []
    i = 0
    print("Digite F para terminar")
    while True:
        for j in range(n):
            if j == 0:
                ponto1 = input('Digite a coordenada x: ')
            else:
                ponto2 = input('Digite a coordenada y')
        if ponto1 == 'f' or ponto1 == 'F' or ponto2 == 'f' or ponto2 == 'F':
            break
        matriz.append([])
        matriz[i].append(int(ponto1))
        matriz[i].append(int(ponto2))
        i+=1
    return matriz


def calcula_lados(mat):
    vetor_lados = []
    l = float()
    for i in range(m):
            l = ((mat[i][0] - mat[(i+1)%(m)][0])**2 + (mat[i][1] - mat[(i+1)%(m)][1])**2)**(1/2)
            vetor_lados.append(l)
    return vetor_lados

def semiperimetro(lados):
    soma = float(0.0)
    for i in lados:
        soma += i
    return soma/2

def area_do_triangulo(matriz):
    lados = calcula_lados(matriz)
    s = semiperimetro(lados)
    area = s 
    for i in range(m):
        area *= (s - lados[i])
    return area**(1/2)



def area_do_poligono(matriz):
    mat = []
    area = float()
    print(matriz[0][0])
    #calcula os triangulos tendo o primeiro 
    # como ponto fixo
    for i in range(1,len(matriz)-1):
        mat.append(matriz[0])
        for j in range(2):
            matriz[i+j]
            mat.append(matriz[i+j])
        area_atual = area_do_triangulo(mat)
        area += area_atual
        mat = []
    return area




matriz = cria_matriz()
area = area_do_poligono(matriz)
print('A área do polígono de pontos', end='')
for i in range(len(matriz)):
    print(' ({},{})'.format(matriz[i][0],matriz[i][1]), end='')
print(' = {:.2f}'.format(area))