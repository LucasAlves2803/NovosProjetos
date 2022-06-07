def matriz():
    n=int(input("Digite a quantidade de linhas"))
    m = int(input("Digite a quantidade de colunas"))
    matriz = []
    for i in range(n):
        matriz.append([])
        for j in range(m):  
            num = int(input("Digite um numero"))
            matriz[i].append(num)
    return matriz

def multiplica_matriz(matriz1, matriz2):
    col = len(matriz1[0])
    lin = len(matriz2)
    matriz = []
    elem = int()
    if (col == lin):
        for i in range(len(matriz1)):
            matriz.append([])
            for j in range(len(matriz2[0])):
                for k in range(lin):
                    elem += matriz1[i][k] * matriz2[k][j]
                matriz[i].append(elem)
                elem = 0

        return matriz
    else:
        print("As matrizes não podem ser multiplicadas")
        return []
        


print("Matriz 1")
matriz1 = matriz()
print("Matriz 2")
matriz2 =matriz()
print("==== Matriz 1 =====")
for i in matriz1:
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')
print("==== Matriz 2 =====")
for i in matriz2:
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')
print("==== Resultado ====")
for i in multiplica_matriz(matriz1,matriz2):
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')
