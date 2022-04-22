n=int(input("Digite a quantidade de linhas"))
m = int(input("Digite a quantidade de colunas"))

# Cria e insere valores na matriz
matriz = []
for i in range(n):
    matriz.append([])
    for j in range(m):
        num = int(input("Digite um numero"))
        matriz[i].append(num)



def mat_maior_10(matriz):
    cont = int()
    for i in matriz:
        for j in i:
            if ( j > 10):
                cont+=1
    return cont

print('{:d}'.format(mat_maior_10(matriz)))