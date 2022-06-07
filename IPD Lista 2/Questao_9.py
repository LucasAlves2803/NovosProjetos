n=int(input("Digite a quantidade de linhas"))
m = int(input("Digite a quantidade de colunas"))

# Cria e insere valores na matriz
matriz = []
for i in range(n):
    matriz.append([])
    for j in range(m):
        numero = int(input("Digite um numero"))
        matriz[i].append(numero)



def mat_maior_10(matriz):
    contador = int()
    for i in matriz:
        for j in i:
            if ( j > 10):
                contador+=1
    return contador

print('{:d}'.format(mat_maior_10(matriz)))
