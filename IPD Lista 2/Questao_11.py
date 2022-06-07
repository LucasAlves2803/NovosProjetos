from math import sqrt


pi = float()
pi = 0.0
n= int(input("Digite a quantidade de termos: "))
for i in range(1,n+1):
    if (i % 2 == 0):
        pi -= (1/(i**2))
    else:
        pi += (1/(i**2))
pi*= 12
print("{:.5f}".format(sqrt(pi)))
  
