import math

def chama_excecoes(a,b,c):
    if(not a.isdigit() or not b.isdigit() or not c.isdigit()):
        raise TypeError
    if ( int(a) <= 0 or int(b) <= 0 or int(c) <= 0):
        raise ValueError

        
def mdc(a,b,c):
    try:
        chama_excecoes(a,b,c)
    except(ZeroDivisionError,ValueError,TypeError):
        return 'Erro'
    else:
        a = algoritmo_de_euclides(int(a),int(b))
        Mdc = algoritmo_de_euclides(a,int(c))
        return Mdc
        
            
    

def algoritmo_de_euclides(a,b):
    r=1
    while (r != 0):
        q = a // b
        r = a % b
        a = b
        b = r
    return a



def mmc(a,b,c):
    try:
        chama_excecoes(a,b,c)
    except(ZeroDivisionError,ValueError,TypeError):
        return "Erro"
    else:
        a = algoritmo_do_mmc(int(a),int(b))
        Mmc = algoritmo_do_mmc(a,int(c))
        
    return Mmc


def algoritmo_do_mmc(a, b):
    div = 2
    mmc = 1
    while (a != 1 or b != 1):
        if (a % div == 0) and (b % div == 0):
            a = a // div
            b = b // div
            mmc = mmc * div
        elif (b % div == 0):
            b = b // div
            mmc = mmc * div
        elif (a % div ==0):
            a = a // div
            mmc = mmc * div
        else:
            div+=1
    return mmc
            
def avalia_entrada(a,b,c):
    if(not a.isdigit() or not b.isdigit() or not c.isdigit()):
        raise TypeError
    elif( (int(b) <= 0 and (int(c) <= 0 or int(a) <= 0)) or (int(c) <= 0 and (int(b) <= 0 or int(a) <= 0))):
        raise ValueError
    elif (int(c) > 0 and (int(c) <= int(a) or int(c) <= int(b))):
        raise ValueError

def algoritmo_de_pitagoras(b,a,c):
    Aang = float() # Angulo Â
    Bang = float() # Angulo B
    if (a == 0):
        Aang = math.degrees(math.acos(b/c))
    elif(b == 0):
        Aang = math.degrees(math.asin(a/c))
    elif(c==0):
        Aang = math.degrees(math.atan(a/b))
    
    Bang = 90 - Aang
    # print(b,a,c)
    # print("{:2f} {:2f}".format(round(Aang,2),round(Bang,2)))
    return  "{:.2f} {:.2f}".format(round(Aang,2),round(Bang,2))



def pitagoras(b,a,c):
    try:
        avalia_entrada(b,a,c)
    except(ValueError,TypeError):
        return 'Error'
    else:
        return algoritmo_de_pitagoras(int(b),int(a),int(c))