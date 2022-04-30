arquivo = open('entrada.txt', 'r')
novo_arquivo = open('saida.txt', 'w')

texto = arquivo.read()
for i in texto:
    if (i.isupper() == True):
        novo_arquivo.write(i.lower())
    elif(i.islower() == True):
        novo_arquivo.write(i.upper())
    else:
        novo_arquivo.write(i) 


    
arquivo.close()
