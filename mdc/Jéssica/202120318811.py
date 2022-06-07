from B202120318811 import mdc,mmc,pitagoras





arquivo = open('t3.txt', 'r')
saida = open('202120318811.txt','w')
resposta = ''
for i in arquivo:
    lista = i.split()
    if (lista[0] == '1'):
        resposta = mdc(lista[1],lista[2],lista[3])
    elif (lista[0] == '2'):
        resposta = mmc(lista[1],lista[2],lista[3])
    elif (lista[0] == '3'):
        resposta = pitagoras(lista[1],lista[2],lista[3])
    saida.write(str(resposta)+'\n')
arquivo.close()
saida.close()
                    
