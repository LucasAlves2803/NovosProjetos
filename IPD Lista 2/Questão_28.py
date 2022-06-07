def entrada():
    lista = []
    while True:
        a = str(input('Digite um elemento:'))
        if (a != 'F' and a != 'f'):
            lista.append(int(a))
        else:
            return lista



def subsequencia(lista):
    n = len(lista)
    novalista = []
    vetor = []
    for i in range(len(lista)):
        if i == n-1:
            vetor.append(0)
        else:
            vetor.append(1)
    if (n>2):
        for i in range(len(lista)):
            novalista.append([])
            for j in range(len(lista)):
                if vetor[j]==1:
                    novalista[i].append(lista[j])
                else:
                    if (j >= 1):
                        vetor[j-1] = 0
                        vetor[j] = 1
                    
        for i in novalista:
            log = True
            for j in range(len(i)-1):
                if i[j]+1 != i[j+1]:
                    log = False
                    break
            if log:
                novalista.remove(i)
    
    
        return novalista
    else:
        return []


def subconjunto(lista):
    n = len(lista)
    for i in range(n):
        if lista[i] not in newlista:
            newlista.append(lista[i])
            x = subsequencia(lista[i])
            if x != []:
                subconjunto(x)


def ordem():
    lista = []
    for i in range(len(newlista)):
        lista.append(0)
    for i in range(len(newlista)-1):
        v = len(newlista[i])
        ind = i
        for j in range(i+1,len(newlista)):
            if len(newlista[j]) < v:
                v = len(newlista[j])
                ind = j
        lista[i] = newlista[ind]
        lista[ind] = newlista[i]
    return lista
        
newlista = []
lista = entrada()
lista = subsequencia(lista)
subconjunto(lista)
print(newlista)

