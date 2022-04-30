arquivo = open('texto.txt', 'r')

texto = arquivo.read()
novo_texto = []
texto = texto.split(' ')
for palavras in texto:
    palavras = ''.join([i for i in palavras if not i.isdigit()])
    if palavras.find('!?') != -1:
        if (palavras.find('\n')):
            palavras = palavras.split('\n')
            for i in palavras:
                if (i != '!?'):
                    novo_texto.append(i.replace('!?',''))
        else:
            if (palavras != '!?'):
                novo_texto.append(palavras.replace('!?',''))
    elif palavras.find('.') != -1:
         print(palavras)
         if (palavras.find('\n')):
            palavras = palavras.split('\n')
            for i in palavras:
                if (i != '.'):
                    novo_texto.append(i.replace('.',''))
         else:
             if (palavras != '.'):
                novo_texto.append(palavras.replace('.',''))
    elif palavras.find('!') != -1:
          if (palavras.find('\n')):
            palavras = palavras.split('\n')
            for i in palavras:
                if (i != '!'):
                    novo_texto.append(i.replace('!',''))
          else:
              if (palavras != '!'):
                novo_texto.append(palavras.replace('!',''))
    elif palavras.find(',') != -1:
        if (palavras.find('\n')):
            palavras = palavras.split('\n')
            for i in palavras:
                if (i != ','):
                    novo_texto.append(i.replace(',',''))
        else:
            if (palavras != ','):
                novo_texto.append(palavras.replace(',',''))
    elif palavras.find('-') != -1:
        if (palavras.find('\n')):
            palavras = palavras.split('\n')
            for i in palavras:
                if (i != '-'):
                    novo_texto.append(i.replace('-',''))
        else:
            if (palavras != '-'):
                novo_texto.append(palavras.replace('-',''))
    elif palavras.find('?') != -1:
        if (palavras.find('\n')):
            palavras = palavras.split('\n')
            for i in palavras:
                if (i != '?'):
                    novo_texto.append(i.replace('?',''))
        else:
            if (palavras != '?'):
                novo_texto.append(palavras.replace('?',''))
    else:
        if (palavras != ''):
            if (palavras.find('\n')):
                palavras = palavras.split('\n')
                for i in palavras:
                    novo_texto.append(i)
            else:
                 novo_texto.append(palavras)


ocorrencia = {}
for i,valor in enumerate(novo_texto):
    if valor not in ocorrencia:
        ocorrencia[valor] = 0
        for j in novo_texto:
            if valor == j:
                ocorrencia[valor]+=1

arquivo.close()
print(ocorrencia)

    
    
