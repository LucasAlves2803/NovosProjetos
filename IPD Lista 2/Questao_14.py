banco_de_notas = []
banco_de_notas.append([100,10])
banco_de_notas.append([50,10])
banco_de_notas.append([20,10])
banco_de_notas.append([10,10])
banco_de_notas.append([5,10])
banco_de_notas.append([1,10])

def quantidade_para_sacar():
    money = int(input('Digite a quantidade a ser sacada'))
    return money


def saque(money):
    log = bool()
    log = True
    print(banco_de_notas[5][0])
    while (money > 0 and log == True):
        if (money >= 100 and banco_de_notas[0][1] > 0):
            banco_de_notas[0][1] -= 1
            money -= banco_de_notas[0][0]
        elif(money >= 50 and banco_de_notas[1][1] > 0):
            banco_de_notas[1][1] -= 1
            money -= banco_de_notas[1][0]
        elif(money >= 20 and banco_de_notas[2][1] > 0):
            banco_de_notas[2][1] -= 1
            money -= banco_de_notas[2][0]
        elif(money >= 10 and banco_de_notas[3][1] > 0):
            banco_de_notas[3][1] -= 1
            money -= banco_de_notas[3][0]
        elif(money >= 5 and banco_de_notas[4][1] > 0):
            banco_de_notas[4][1] -= 1
            money -= banco_de_notas[4][0]
        elif (money >= 1 and banco_de_notas[5][1] > 0):
            banco_de_notas[5][1] -= 1
            money -= banco_de_notas[5][0]
        for i in banco_de_notas:
            if i[1] != 0:
                log = True
                break
            else:
                if (money != 0):
                    log = False
    return log
                             


def imprime(money):
    print('{:d} ='.format(money), end='')
    for i in banco_de_notas:
        if i[1] != 10:
            print('{:d} notas de {:d} '.format(10 - i[1], i[0]), end='')
    print('')
        




m = quantidade_para_sacar()
if (saque(m)):
    imprime(m)
else:
    print('Não há notas suficientes para imprimir {:d}'.format(m))