def condensa_numeros(lista):
    lista_condensada = []
    contador = int()
    numero = lista[0]
    for i in lista:
        if numero == i:
            contador+=1
        else:    
            if (contador > 1):
                lista_condensada.append('{:d}^{:d}'.format(numero,contador))
            else:
                lista_condensada.append('{:d}'.format(numero))
            contador=1
            numero =i
    lista_condensada.append('{:d}'.format(numero))
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


