import math
def avalia_entrada(a,b,c):
    if(not a.isdigit() or not b.isdigit() or not c.isdigit()):
        raise TypeError
    elif( (int(b) <= 0 and (int(c) <= 0 or int(a) <= 0)) or (int(c) <= 0 and (int(b) <= 0 or int(a) <= 0))):
        print(a,b,c)
        raise ValueError
    elif (int(c) > 0 and (int(c) <= int(a) or int(c) <= int(b))):
        raise ValueError

def algoritmo_de_pitagoras(b,a,c):
    Aang = float()
    Bang = float()
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