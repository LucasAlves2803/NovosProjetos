Celsius = float()
temperatura_farenheit = float()
soma_Farenheit = float()
cont = int()
farenheit = []
n = 5
for i in range(n):
    temp_Celsius = int(input("Temperatura {:} ".format(i+1)))
    temperatura_farenheit = (temp_Celsius * 9/5) + 32
    farenheit.append(temperatura_farenheit)
    Celsius += temp_Celsius
for i in farenheit:
    soma_Farenheit += i
media_temp_Farenheit = soma_Farenheit/ n
for i in farenheit:
    if i > media_temp_Farenheit:
        cont = cont + 1
        # print("{:f}".format(i))
media_temp_Celsius = Celsius / n
print("A média das temperaturas em Celsius é {:.2f}".format(media_temp_Celsius))
print("A média das temperaturas em Farenheit é {:.2f}".format(media_temp_Farenheit))
print("{:d} superaram a média".format(cont))
