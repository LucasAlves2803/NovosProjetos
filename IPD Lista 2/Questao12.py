def condensa_numeros(lista):
    lista_condensada = []
    cont = int()
    num = lista[0]
    for i in lista:
        if num == i:
            cont+=1
        else:    
            if (cont > 1):
                lista_condensada.append('{:d}^{:d}'.format(num,cont))
            else:
                lista_condensada.append('{:d}'.format(num))
            cont=1
            num =i
    lista_condensada.append('{:d}'.format(num))
    return lista_condensada



def vetor():
    lista =[]
    while True:
        n = input('Digite um numero ou F para sair')
        if n == 'f' or n == 'F':
            break
        else:
            lista.append(int(n))
    lista.sort()
    return lista



print("{:}".format(condensa_numeros(vetor())))


