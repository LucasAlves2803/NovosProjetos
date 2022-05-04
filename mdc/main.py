import mmc
import mdc
import pitagoras





arquivo = open('t3.txt', 'r')
saida = open('lucas2.txt','w')
resposta = ''
for i in arquivo:
    lista = i.split()
    if (lista[0] == '1'):
        resposta = mdc.mdc(lista[1],lista[2],lista[3])
    elif (lista[0] == '2'):
        resposta = mmc.mmc(lista[1],lista[2],lista[3])
    elif (lista[0] == '3'):
        resposta = pitagoras.pitagoras(lista[1],lista[2],lista[3])
    saida.write(str(resposta)+'\n')
arquivo.close()
saida.close()
                    
