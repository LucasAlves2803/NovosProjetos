frase = str(input("Digite uma frase: "))
total_de_vogais = int()
total_de_brancos = int()
total_de_resto = int()
for letra in frase: 
    if (letra == 'a') or (letra == 'e') or (letra == 'i') or (letra == 'o') or (letra == 'u'):
        total_de_vogais += 1
    elif (ord(letra) == 8) or (ord(letra) == 9) or (ord(letra) == 10) or (ord(letra) == 11) or (ord(letra) == 12) or (ord(letra) == 13) or (ord(letra) == 32):
        total_de_brancos += 1
    else:
        total_de_resto +=1
print("total de vogais {:d}\n total de brancos {:d}\n total do resto {:d}".format(total_de_vogais,total_de_brancos,total_de_resto))


        


