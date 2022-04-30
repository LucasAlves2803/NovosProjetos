m = 3
n = 2
def cria_matriz():
    ponto = int()
    matriz= []
    for i in range(m):
        matriz.append([])
        for j in range(n):
            if j == 0:
                ponto =int( input('Digite a coordenada x: '))
            else:
                ponto = int(input('Digite a coordenada y'))
            matriz[i].append(ponto)
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




matriz = cria_matriz()
area = area_do_triangulo(matriz)
print('A área do triangulo de pontos', end='')
for i in matriz:
    for j in i:
        print(' ({})'.format(j), end='')
print(' = {:.2f}'.format(area))


