from random import randrange

n=100
def cria_vetor():
    vetor = []
    for i in range(n):
        vetor.append(randrange(0,100))
    return vetor


def ordena_vetor(vetor):
    for i in range(len(vetor)-1):
        num = vetor[i]
        indice = i
        for j in range(i+1,len(vetor)):
            if(vetor[j] < num):
                num = vetor[j]
                indice = j
        aux = vetor[i]
        vetor[i] = num
        vetor[indice] = aux

def imprime(vetor):
    
    for i in vetor:
        print('{}'.format(i),end=' ')
    print('')
    



#main
vetor = cria_vetor()
print('vetor desordenado: ',end='')
imprime(vetor)
ordena_vetor(vetor)
print('vetor ordenado: ',end='')
imprime(vetor)

