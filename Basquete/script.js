const bolas = document.querySelectorAll('.imagens');
var timeazul = document.querySelector('.timeazul');
var timevermelho = document.querySelector('.timevermelho');
var crono = document.querySelector('.time');
var jogo = false;
var mm,ss;
var log = false;
var intervalo;

function iniciar(){
    jogo = !jogo;
    cronometro();
}

function cronometro(){
    tempo = crono.children[1];
    temp = tempo.innerHTML.split(':');
    mm = temp[0];
    ss = temp[1];
    console.log(`minutos = ${mm} e segundos = ${ss}`);
    iniciar_crono();
}


// cronometro do jogo

function pausar(){
    if (!log){
        clearInterval(intervalo);
        log = !log;
    }
    else{
        iniciar_crono();
        log = !log;
    }
}

function parar(){
    clearInterval(intervalo);
    crono.children[1].innerHTML = '10:00';
}
function iniciar_crono(){
    intervalo = setInterval(()=> {timer();},1000);
}

function timer(){
    console.log("valor de ss =" + ss);   
    if (ss == 00){
        ss = 60;
        mm--;
    }
    ss--;
    if (mm == 0){
        ss= 0;
        parar();
    }
    let format = mm + ':' + (ss < 10 ? '0' + ss: ss);
    tempo.innerHTML = format;
}





function rotate(){
// controla o placar do jogo
    if (jogo){
        this.classList.toggle('rotate');
    var elem = this;
    console.log(elem);
    if (elem.classList[1] == 'dois' && (elem.classList[2] == 'azul')){
        let num = parseInt( timeazul.children[1].innerHTML);
        num+= 2;
        timeazul.children[1].innerHTML = num;
    }
    else if ((elem.classList[1] == 'dois') && (elem.classList[2] == 'vermelho')){
        let num = parseInt( timevermelho.children[1].innerHTML);
        num+= 2;
        timevermelho.children[1].innerHTML = num;

    }
    else if ((elem.classList[1] == 'tres') && (elem.classList[2] == 'vermelho')){
        let num = parseInt( timevermelho.children[1].innerHTML);
        num+= 3;
        timevermelho.children[1].innerHTML = num;
    }
    else if ((elem.classList[1] == 'tres') && (elem.classList[2] == 'azul')){
        let num = parseInt( timeazul.children[1].innerHTML);
        num+= 3;
        timeazul.children[1].innerHTML = num;
    }
    setTimeout(function(){
    elem.classList.toggle('rotate');
    elem = null;
    },6001)
    // a função setTimeOut executa um comando depois 
    // que um determinado tempo de espera tenha terminado
    
    }
    
}


for (let i=0; i < bolas.length; i++){
    bolas[i].addEventListener('click',rotate);
}