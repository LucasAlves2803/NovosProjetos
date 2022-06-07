vet = []
cont_pares = int()
n = 40
for i in range(n):
    vet.append(int(input("Digite um inteiro: ")))

for i in vet:
    if i % 2 == 0:
        cont_pares +=1
print("Há {:d} pares no vetor".format(cont_pares))
