word = str(input("Digite uma palavra: "))

# print(palavra[2])somos

def palindromo(palavra):
    for i in range(len(palavra)//2):
        if palavra[i] != palavra[len(palavra)-i-1]:
            return False
    return True

print("{:}".format(palindromo(word)))


