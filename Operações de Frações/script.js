
var vetor = []; 
// declara um vetor

// fra1 = {'num': '',
//         'den': '',
//          this.mdc = function () {
//              r = this.num % this.den;
//              if (r === 0){
//                  return this.den;
//              }
//              else {
//                  return
//              }
//          }
//        }
var fra1 =  new Fracao(document.getElementById("fr1num"), document.getElementById("fr1den"));
var fra2 =  new Fracao(document.getElementById("fr2num"), document.getElementById("fr2den"));
var fra3 =  new Fracao(document.getElementById("fr3num"), document.getElementById("fr3den"));

// fra2 = {'num': '',
//        'den': '' 
// }
// fra3 = {'num': '',
//        'den': '', 
// }

// fra1['num'] = document.getElementById("fr1num");
// fra1['den'] = document.getElementById("fr1den");
// fra2['num'] = document.getElementById('fr2num');
// fra2['den'] = document.getElementById("fr2den");
var oper = document.getElementById("operador");

vetor.push(fra1);
// empilha os elementos, empilhar é colocar no próximo índice, os próximo elemento sempre entra no final
vetor.push(oper);
vetor.push(fra2);




var cont = 0;
var log = false;
var barrapertada = false;

function verifica_Escolha(cont,number){
    
    if (number === '/'){
        return true;
    }
    else if ((cont === 0) || (cont === 2) ){
       return (!isNaN(number));
       
    }
    else if (cont === 1) {
        return isNaN(number);
    }
     
}

function funcoes(barra){
    number();
    fra(barra);
}

function number(){
   if ((!log && vetor[cont].num.innerHTML !== '') || (log && vetor[cont].den.innerHTML !== '') ){
    log = !log;
   }
}

function fra(numero){

    if (verifica_Escolha(cont,numero)){
        if (cont === 0){
            if (!log && numero !== '/') {
                   if (vetor[cont].num.innerHTML === ''){
                       if (numero !== 0){
                        vetor[cont].num.innerHTML += numero;        
                       }
                   }else{
                    vetor[cont].num.innerHTML += numero;   
                   }
                }
            else if (log && numero === '/' && vetor[cont].num.innerHTML !== ""){
                vetor[cont].num.style.backgroundColor = 'whitesmoke';
                vetor[cont].den.style.backgroundColor = '#FFA07A';
            }else if (log && numero !== '/' && numero !== '0'){
                if (vetor[cont].den.innerHTML === ''){
                    if (numero !== 0){
                     vetor[cont].den.innerHTML += numero;        
                    }
                }else{
                 vetor[cont].den.innerHTML += numero;   
                }
            }else if (!log && numero === '/' && vetor[cont].den.innerHTML !== ''){ 
                vetor[cont].den.style.backgroundColor = 'whitesmoke';
                vetor[++cont].style.backgroundColor = '#FFA07A';
            }
        }else if (cont === 1){
            vetor[cont].innerHTML = numero;
            vetor[cont].style.backgroundColor = 'bisque';
            vetor[++cont].num.style.backgroundColor = '#FFA07A';
            // O elemento acima é um operador, por isso tem menos atributos 
        }else if (cont === 2){

            if (!log && numero !== '/') {
                if (vetor[cont].num.innerHTML === ''){
                    if (numero !== 0){
                     vetor[cont].num.innerHTML += numero;        
                    }
                }else{
                 vetor[cont].num.innerHTML += numero;   
                }
            }
            else if (log && numero === '/' && vetor[cont].num.innerHTML !== "" ){
                vetor[cont].num.style.backgroundColor = 'whitesmoke';
                vetor[cont].den.style.backgroundColor = '#FFA07A';
            }else if (log && numero !== '/'){
                if (vetor[cont].den.innerHTML === ''){
                    if (numero !== 0){
                     vetor[cont].den.innerHTML += numero;        
                    }
                }else{
                 vetor[cont].den.innerHTML += numero;   
                }
            }else if (!log && numero === '/' && vetor[cont].num.innerHTML !== ""){
                vetor[cont].den.style.backgroundColor = 'whitesmoke'; 
                cont++;
            }

       }
    }
}

function operbas(){
    for(i=0; i < 3; i++){
        if (i == 1){
            continue;
        }else{
            vetor[i].mDC();
            vetor[i].simplifica();
            console.log(vetor[i].denominador + " " + vetor[i].numerador)
        }
        
    }
}

function mmc(a,b){
    return  (a * b)/ MDC(a,b);
}

function ajeita(mc){
    let mult;
    for(i=0;i < 3; i++){
        if (i == 1){
            continue;
        }
        else{
            mult = mc / vetor[i].denominador;
            vetor[i].numerador *= mult;
        }
        
    }
}

function fazoper(op){
    var mc;
    switch (op){
        case '+':
            mc = mmc(fra1.denominador,fra2.denominador);
            ajeita(mc);
            fra3.num.innerHTML = fra1.numerador + fra2.numerador;
            fra3.den.innerHTML = mc;
            break;
        case '-':
            mc = mmc(fra1.denominador,fra2.denominador);
            ajeita(mc);
            fra3.num.innerHTML = fra1.numerador - fra2.numerador;
            fra3.den.innerHTML = mc;
            break;
        case 'x':
            fra3.num.innerHTML = fra1.numerador * fra2.numerador;
            fra3.den.innerHTML = fra1.denominador * fra2.denominador;
            break;
        case '/':
            fra3.num.innerHTML = fra1.numerador * fra2.denominador;
            fra3.den.innerHTML = fra1.denominador * fra2.numerador;
            break;
    }
}

function calc(){
    let op = oper.innerHTML;
    if (fra2.den !== '' && cont === 2){
        cont++;
        operbas(); 
        fazoper(op); 
    }
}

function apaga_digitos(){
    let tam;
    if (cont === 0){
        if (!log){
            tam = fra1.num.innerHTML['length'];
            fra1.num.innerHTML = fra1.num.innerHTML.slice(0,tam-1);
        }
        else{
            tam = fra1.den.innerHTML['length'];
            fra1.den.innerHTML = fra1.den.innerHTML.slice(0,tam-1);
        }
    } else if (cont === 2){
        if (!log && fra2.num.innerHTML !== ''){
            tam = fra2.num.innerHTML['length'];
            fra2.num.innerHTML = fra2.num.innerHTML.slice(0,tam-1); 
        }
        else if (!log && fra2.num.innerHTML === ""){
            cont--;
            fra2.num.style.backgroundColor = 'whitesmoke';
            oper.style.backgroundColor = '#FFA07A';
            oper.innerHTML = '';
        }
        else{
            tam = fra2.den.innerHTML['length'];
            fra2.den.innerHTML = fra2.den.innerHTML.slice(0,tam-1);
        }
    }
}
    

function apaga(){
     if (cont === 0){
        if (!log){
            vetor[cont].num.innerHTML = '';
            // vetor[cont].den.style.backgroundColor = 'whitesmoke';
            // vetor[cont].num.style.backgroundColor = '#FFA07A';
        }else if (log){
            vetor[cont].den.innerHTML = '';
        }
     }
     else if (cont === 2){
         if (!log && vetor[cont].num.innerHTML === ''){
            vetor[cont].num.style.backgroundColor = 'whitesmoke';
            cont--
            // vetor[--cont].innerHTML = '';
            vetor[cont].innerHTML = '';
            vetor[cont].style.backgroundColor = '#FFA07A';
        }else if (!log && vetor[cont].num.innerHTML !== ''){
            // vetor[cont].num.style.backgroundColor = '#FFA07A';
            vetor[cont].num.innerHTML = '';
            // vetor[cont].den.style.backgroundColor= 'whitesmoke';
            // log = false;
        }else if (log){
            vetor[cont].den.innerHTML ='';
        }

     }
     else if (cont === 3){
        if (!log){
            vetor[--cont].den.innerHTML ='';
            vetor[cont].den.style.backgroundColor = '#FFA07A';
            log = true;
        }
     } 
}

function zera_Variaveis() {
  [fra1.num.innerHTML, fra1.num.style.backgroundColor, fra1.den.innerHTML, fra1.den.style.backgroundColor] = ['', 'whitesmoke', '', 'whitesmoke'];
  [fra2.num.innerHTML, fra2.num.style.backgroundColor, fra2.den.innerHTML, fra2.den.style.backgroundColor] = ['', 'whitesmoke','', 'whitesmoke'];
  [fra3.num.innerHTML, fra3.num.style.backgroundColor, fra3.den.innerHTML, fra3.den.style.backgroundColor] = ['', 'whitesmoke','', 'whitesmoke'];
  oper.innerHTML = '';
  log = false;
  cont = 0;
} 


function iniciou(){
    zera_Variaveis();
    fra1.num.style.backgroundColor = '#FFA07A';
}

function MDC(D, d) {
    let r = D % d;
    console.log(D + " / " + d);
    if (r === 0){
        return d;
    }
    else {
        return MDC(d,r);
    }
}



function Fracao(num, den){
    
    this.num = num;
    this.den = den;
    this.numerador = '';
    this.denominador = '';
    this.mdc = '';
    this.frac = function (){
        this.denominador = parseInt(this.den.innerHTML); 
        this.numerador = parseInt(this.num.innerHTML);
    };
    this.simplifica = function(){
        this.denominador = this.denominador / this.mdc;
        this.numerador = this.numerador / this.mdc;
    };
    this.mDC = function () {
        this.frac();
        this.mdc = MDC(this.numerador,this.denominador);
    };
    this.mostra = function (){
        console.log("A fracão é " + this.numerador + "/" + this.denominador);
    }
}