def entrada():
    n= str()
    print('Digite F para sair')
    vetor = []
    while True:
        n = input('Digite o numero: ')
        if (n == 'F' or n == 'f'):
            break 
        vetor.append(int(n))
    return vetor

def subsequencia(vetor):
    novo_vetor = []
    for i in range(len(vetor)-2):
        for j in range (i+2, len(vetor)):
            novo_vetor.append([vetor[i],vetor[j]])
    print(novo_vetor)


vetor = entrada()
subsequencia(vetor)

