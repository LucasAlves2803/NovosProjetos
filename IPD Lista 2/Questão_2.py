vetor_de_inteiros = []
cont_pares = int()
n = 10
for i in range(n):
    vetor_de_inteiros.append(int(input("Digite um inteiro: ")))

for i in vetor_de_inteiros:
    if i % 2 == 0:
        cont_pares +=1
print("Há {:d} pares no vetor".format(cont_pares))
