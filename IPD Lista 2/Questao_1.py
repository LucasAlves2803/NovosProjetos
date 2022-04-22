soma_temp_Celsius = float()
temp_farenheit = float()
soma_temp_Farenheit = float()
cont = int()
farenheit = []
n = 50
for i in range(n):
    temp_Celsius = int(input("Temperatura {:} ".format(i+1)))
    temp_farenheit = (temp_Celsius * 9/5) + 32
    farenheit.append(temp_farenheit)
    soma_temp_Celsius += temp_Celsius
for i in farenheit:
    soma_temp_Farenheit += i
media_temp_Farenheit = soma_temp_Farenheit/ n
for i in farenheit:
    if i > media_temp_Farenheit:
        cont = cont + 1
        # print("{:f}".format(i))
media_temp_Celsius = soma_temp_Celsius / n
print("A média das temperaturas em Celsius é {:.2f}".format(media_temp_Celsius))
print("A média das temperaturas em Farenheit é {:.2f}".format(media_temp_Farenheit))
print("{:d} superaram a média".format(cont))
