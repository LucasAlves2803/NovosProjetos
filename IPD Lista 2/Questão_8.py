n=int(input("Digite a quantidade de linhas"))
m = int(input("Digite a quantidade de colunas"))

# Cria e insere valores na matriz
matriz = []
for i in range(n):
    matriz.append([])
    for j in range(m):
        numero = int(input("Digite um numeroero"))
        matriz[i].append(numero)


#transpoem a matriz
def matriz_transposta(matriz_transposta):
    matriz_transposta = []
    for i in range(m):
        matriz_transposta.append([])
        for j in range(n):
            matriz_transposta[i].append(matriz[j][i])
    return matriz_transposta





print("#### Matriz Original ####")
for i in matriz:
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')
matriz_transposta = matriz_transposta(matriz)
print("#### Matriz Transposta ####")
for i in matriz_transposta:
    for j in i:
        print('{:d}'.format(j),end=' ')
    print('',end='\n')
