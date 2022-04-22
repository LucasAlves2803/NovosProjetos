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

def multiplica_matriz(mat1, mat2):
    colunas = len(mat1[0])
    linhas = len(mat2)
    matriz = []
    elem = int()
    if (colunas == linhas):
        for i in range(len(mat1)):
            matriz.append([])
            for j in range(len(mat2[0])):
                for k in range(linhas):
                    elem += mat1[i][k] * mat2[k][j]
                matriz[i].append(elem)
                elem = 0

        return matriz
    else:
        print("As matrizes não podem ser multiplicadas")
        return []
        

#MAIN
print("Matriz 1")
mat1 = matriz()
print("Matriz 2")
mat2 =matriz()
for i in mat1:
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')

for i in mat2:
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')

for i in multiplica_matriz(mat1,mat2):
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')