

def entrada():
    n = int(input("Digite o numero:"))
    return n

def concatena(resto, hexanum):
    if (resto == 15):
        hexanum = 'F' + hexanum 
    elif (resto == 14):
        hexanum = 'E' + hexanum 
    elif (resto == 13):
        hexanum = 'D' + hexanum 
    elif (resto == 12 ):
        hexanum = 'C' + hexanum 
    elif (resto == 11):
        hexanum = 'B' + hexanum 
    elif (resto == 10):
        hexanum = 'A' + hexanum 
    else:
        hexanum = str(resto) + hexanum
    return hexanum



def converte(decimal):
    hexanum = ''
    resto = int()
    while (decimal > 16):
        resto = decimal % 16
        decimal = decimal // 16    
        if (decimal < 16):
            hexanum = concatena(resto, hexanum)
            hexanum = concatena(decimal, hexanum)
        else:
            hexanum = concatena(resto, hexanum)
    return hexanum



def imprime(hexanum,decimal):
    print('{:d} = {:} em hexadecimal\n'.format(decimal,hexanum))

#Main
n = entrada()
hexanum = converte(n)
imprime(hexanum,n)

       