#código para decriptogragar

dic ={'a':0,
        'b':1,
        'c':2,
        'd':3,
        'e':4,
        'f':5,
        'g':6,
        'h':7,
        'i':8,
        'j':9,
        'k':10,
        'l':11,
        'm':12,
        'n':13,
        'o':14,
        'p':15,
        'q':16,
        'r':17,
        's':18,
        't':19,
        'u':20,
        'v':21,
        'w':22,
        'x':23,
        'y':24,
        'z':25}




p1 = input('palavra codificada]:')
p2 = input('palavra chave:')

cid = {v: k for k, v in dic.items()}
p1 = p1.lower()
p2 = p2.lower()


def criptografa(p1,p2):
    pr = ''
    for i in range(len(p1)):
        n = (dic[p1[i]] + dic[p2[i%len(p2)]]) % 26
        pr = pr + cid[n]
    return pr

def descriptografa(pr,p2):
    npr = ''
    for i in range(len(pr)):
                   n = (dic[pr[i]] - dic[p2[i%len(p2)]]  + 26) % 26
                   npr = npr + cid[n]
    return npr

print(descriptografa(p1,p2))
##
##for i in range(26):
##    cid = {i: dic[i]}
