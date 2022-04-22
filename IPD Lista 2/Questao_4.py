vetor_de_inteiros = []
n = 10
cont = int()
for i in range(n):
    vetor_de_inteiros.append(int(input('Digite um inteiro: ')))
x = int(input('Digite un número: '))

for i in vetor_de_inteiros:
    if x == i:
        cont += 1
print("O número {:d} aparece {:d} vezes no vetor".format(x, cont))