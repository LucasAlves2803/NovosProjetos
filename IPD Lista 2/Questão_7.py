
def ordena(palavra):
    for i in range(len(palavra)-1):
        letra = palavra[i]
        indice = i
        for j in range(i+1,len(palavra)):
            if (palavra[j] < letra):
                letra = palavra[j]
                indice = i
        aux = palavra[i]
        palavra.insert(i,letra)
        palavra.insert(indice,aux)


def anagrama(palavra1, palavra2):
    # ordena(palavra1)
    # ordena(palavra2)
    if (len(palavra1) == len(palavra2)):
        palavra1 = sorted(palavra1)
        palavra2 = sorted(palavra2)
        if palavra1 == palavra2:
            return True
        else:
            return False
    else:
        return False



def main():
    palavra1 = str(input('Digite uma palavra:'))
    palavra2 = str(input('Digite a segunda palavra:'))
    print("{:}".format(anagrama(palavra1,palavra2)))


main()
