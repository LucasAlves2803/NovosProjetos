def anagrama(frase1, frase2):
    if (len(frase1) == len(frase2)):
        frase1 = sorted(frase1)
        frase2 = sorted(frase2)
        if frase1 == frase2:
            return True
        else:
            return False
    else:
        return False



def main():
    frase1 = str(input('Digite uma palavra:'))
    frase2 = str(input('Digite a segunda palavra:'))
    print("{:}".format(anagrama(frase1,frase2)))


main()
