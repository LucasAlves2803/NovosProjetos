def entrada():
    n = str(input('Digite o numero'))
    romano = str()
    for i in n:
        romano += i.upper()
    return romano


def converte(romano):
    n = int(0)
    for valor, char in  enumerate(romano):
        if (char == 'M'):
            n += 1000
        elif (char == 'D'):
            n+= 500
        elif (char == 'C'):
            if (valor+1 <= len(romano)-1):
                if (romano[valor+1] == 'M' or romano[valor + 1] == 'D'):
                    n -= 100
                else:
                    n += 100
            else:
                n += 100
        elif (char == 'L'):
            n+= 50
        elif (char == 'X'):
            if (valor+1 <= len(romano)-1):
                if (romano[valor+1] == 'L' or romano[valor + 1] == 'C'):
                    n -= 10
                else:
                    n += 10
            else:
                n += 10
        elif (char == 'V'):
            n+=5
        elif (char == 'I'):
            if (valor+1 <= len(romano)-1):
                if (romano[valor+1] == 'V' or romano[valor+1] == 'X'):
                    n -= 1
                else:
                    n+=1
            else:
                n+=1
    return n

        


romano = entrada()
arabico = converte(romano)
print ('{} == {}'.format(romano, arabico))


