const bolas = document.querySelectorAll('.imagens');
var timeazul = document.querySelector('.timeazul');
var timevermelho = document.querySelector('.timevermelho');
var jogo = false;
function iniciar(){
    jogo = !jogo;
}

function rotate(){
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