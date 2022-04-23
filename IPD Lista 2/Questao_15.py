

def entrada():
    base = int(input("Digite a base: "))
    num = str(input("Numero: "))
    return base,num

def converte(num,base):
    novo_num = int()
    for i in range(len(num)):
        numero = int(num[len(num)-i-1])
        novo_num += (numero * base**i)
    return novo_num


base, numero_base  = entrada()
novo_num = converte(numero_base, base)
print('{:} na base {:} é igual a {:} na base decimal'.format(numero_base,base,novo_num))
