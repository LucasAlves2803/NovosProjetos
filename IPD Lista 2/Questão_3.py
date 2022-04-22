frase = str(input("Digite uma frase: "))
tot_vogais = int()
tot_brancos = int()
tot_resto = int()
for letra in frase: 
    if (letra == 'a') or (letra == 'e') or (letra == 'i') or (letra == 'o') or (letra == 'u'):
        tot_vogais += 1
    elif (ord(letra) == 8) or (ord(letra) == 9) or (ord(letra) == 10) or (ord(letra) == 11) or (ord(letra) == 12) or (ord(letra) == 13) or (ord(letra) == 32):
        tot_brancos += 1
    else:
        tot_resto +=1
print("total de vogais {:d}\n total de brancos {:d}\n total do resto {:d}".format(tot_vogais,tot_brancos,tot_resto))


        


