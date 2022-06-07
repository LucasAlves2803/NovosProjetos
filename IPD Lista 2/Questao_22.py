arquivo = open('entrada.txt', 'r')
novo_arquivo = open('saida.txt','w')
novo_texto = ''
ocorrencia = {}
for i in arquivo.read():
    if (i.isalpha()):
        novo_texto += i.lower()
    
for i,valor in enumerate(novo_texto):
    if valor not in ocorrencia:
        ocorrencia[valor] = 0
        for j in novo_texto:
            if valor == j:
                ocorrencia[valor]+=1

for i,valor in enumerate(ocorrencia):
    novo_arquivo.write("{:} {:d}\n".format(valor,ocorrencia[valor]))
arquivo.close()
novo_arquivo.close()
print(ocorrencia)
