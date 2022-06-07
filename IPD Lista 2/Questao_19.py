arq = open('texto.txt', 'r')

texto = arq.read()
texto_novo = []
texto = texto.split(' ')
for termos in texto:
    termos = ''.join([i for i in termos if not i.isdigit()])
    if termos.find('!?') != -1:
        if (termos.find('\n')):
            termos = termos.split('\n')
            for i in termos:
                if (i != '!?'):
                    texto_novo.append(i.replace('!?',''))
        else:
            if (termos != '!?'):
                texto_novo.append(termos.replace('!?',''))
    elif termos.find('.') != -1:
         if (termos.find('\n')):
            termos = termos.split('\n')
            for i in termos:
                if (i != '.'):
                    texto_novo.append(i.replace('.',''))
         else:
             if (termos != '.'):
                texto_novo.append(termos.replace('.',''))
    elif termos.find('!') != -1:
          if (termos.find('\n')):
            termos = termos.split('\n')
            for i in termos:
                if (i != '!'):
                    texto_novo.append(i.replace('!',''))
          else:
              if (termos != '!'):
                texto_novo.append(termos.replace('!',''))
    elif termos.find(',') != -1:
        if (termos.find('\n')):
            termos = termos.split('\n')
            for i in termos:
                if (i != ','):
                    texto_novo.append(i.replace(',',''))
        else:
            if (termos != ','):
                texto_novo.append(termos.replace(',',''))
    elif termos.find('-') != -1:
        if (termos.find('\n')):
            termos = termos.split('\n')
            for i in termos:
                if (i != '-'):
                    texto_novo.append(i.replace('-',''))
        else:
            if (termos != '-'):
                texto_novo.append(termos.replace('-',''))
    elif termos.find('?') != -1:
        if (termos.find('\n')):
            termos = termos.split('\n')
            for i in termos:
                if (i != '?'):
                    texto_novo.append(i.replace('?',''))
        else:
            if (termos != '?'):
                texto_novo.append(termos.replace('?',''))
    else:
        if (termos != ''):
            if (termos.find('\n')):
                termos = termos.split('\n')
                for i in termos:
                    texto_novo.append(i)
            else:
                 texto_novo.append(termos)


ocorrencia = {}
for i,valor in enumerate(texto_novo):
    if valor not in ocorrencia:
        ocorrencia[valor] = 0
        for j in texto_novo:
            if valor == j:
                ocorrencia[valor]+=1

arq.close()
print(ocorrencia)

    
    
