const bolas = document.querySelectorAll('.imagens');
var timeazul = document.querySelector('.timeazul');
var timevermelho = document.querySelector('.timevermelho');
var crono = document.querySelector('.time');
var jogo = false;
var mm,ss;
var log = false;

function iniciar(){
    jogo = !jogo;
    cronometro();
}

function cronometro(){
    
    mm= 10;
    ss = 0;
    tempo = crono.children[1];
    console.log(tempo);
    iniciar_crono();
}


// cronometro do jogo

function pausar(){
    if (!log){
        clearInterval(()=> {timer();});
        log = !log;
    }
    else{
        iniciar_crono();
        log = !log;
    }
}

function parar(){
    clearInterval(() => {timer();},1000);
    mm= 0;
    ss = 0;
}
function iniciar_crono(){
    setInterval(()=> {timer();},1000);
}

function timer(){
       
    if (ss === 0){
        ss = 59;
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