n=int(input("Digite a quantidade de linhas"))
m = int(input("Digite a quantidade de colunas"))

# Cria e insere valores na matriz
matriz = []
for i in range(n):
    matriz.append([])
    for j in range(m):
        num = int(input("Digite um numero"))
        matriz[i].append(num)


#transpoem a matriz
def matriz_transposta(matriz_t):
    matriz_t = []
    for i in range(m):
        matriz_t.append([])
        for j in range(n):
            matriz_t[i].append(matriz[j][i])
    return matriz_t




for i in matriz_transposta(matriz):
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')