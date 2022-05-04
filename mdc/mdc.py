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
