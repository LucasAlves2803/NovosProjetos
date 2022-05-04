from mdc import chama_excecoes


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
            
