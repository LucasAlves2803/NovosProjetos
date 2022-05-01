def entrada():
    lista = []
    while True:
        a = str(input('Digite um elemento'))
        if (a != 'F' and a != 'f'):
            lista.append(int(a))
        else:
            return lista



def subsequencia(lista):
    n = len(lista)
    novalista = []
    for j in range(n-2,0,-1):
        novalista.append([])
        for i in range(0,n):
            if i != j:
                novalista[n-2-j].append(lista[i])
    return novalista

lista = entrada()
novalista = subsequencia(lista)
print(novalista)
