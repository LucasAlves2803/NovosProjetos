vetor = []
n = 4
for i in range(n):
    vetor.append(input("Digite algo:"))
for i in vetor:
    print('{}'.format(i))
#troca as posições
vetor[0:n//2],vetor[n//2:n] = vetor[n//2:n],vetor[0:n//2]
for i in vetor:
    print('{}'.format(i))
