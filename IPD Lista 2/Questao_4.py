vet = []
n = 30
contador = int()
for i in range(n):
    vet.append(int(input('Digite um inteiro: ')))
x = int(input('Digite um número: '))

for i in vet:
    if x == i:
        contador += 1
print("O número {:d} aparece {:d} vezes no vetor".format(x, contador))
