vet = []
n = 16
for i in range(n):
    vet.append(input("Digite algo:"))
for i in vet:
    print(' {}'.format(i), end=' ')
print('')
#troca as posições
vet[0:n//2],vet[n//2:n] = vet[n//2:n],vet[0:n//2]
for i in vet:
    print(' {}'.format(i), end=' ')
print('')
