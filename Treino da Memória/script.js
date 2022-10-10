
var elem = document.querySelector('.main');
var tela = document.querySelector('.mensagens');
var nivel = 1;
var array_user = [];
var array_jogo = [];
const doh = new Audio("audio/do2S.mp3");
const re = new Audio("audio/re2S.mp3");
const mi = new Audio("audio/mi2S.mp3");
const fa = new Audio("audio/fa2S.mp3");
const sol = new Audio("audio/sol2S.mp3");
var array_songs = [doh,re,mi,fa, sol];
// var botao_apagado = ['#ffff99','#32CD32','#AFEEEE','#DDA0DD','#FA8072'];
var botao_aceso = ['#ffff00','#00FF00','#00FFFF', '#9370DB','#FF0000'];
var cont = 0;
var jogo_work = false;

function sorteia(level){
    min = Math.ceil(0);
    max = Math.floor(5);
   for( i=0; i <= level; i++){
         array_jogo.push(Math.floor(Math.random() * (max - min) + min));
     } 
}


// function exibe(){
//     for (i=0; i < array_jogo.length; i++){
//         tela.innerHTML = array_jogo[i];
//     }
// }



 async function escolha(num){
    if (jogo_work){
        array_user.push(num);
        elem.children[num].style.backgroundColor = botao_aceso[num];
        array_songs[num].play();  
        // elem.children[num].style.color = 'white';
        await laco(1);
        elem.children[num].style.backgroundColor = 'white';
        // elem.children[num].style.color = 'black';  
        confere(num);
    }
 }

 async function confere(num){
     if (array_user[cont] == array_jogo[cont]){
         cont++;
         console.log(array_user.length, array_jogo.length);
         if(array_user.length == array_jogo.length){
            // tela.innerHTML = "Muito Bem!";
            array_jogo = [];
            array_user = [];
            nivel++;
            cont =0;
            tela.innerHTML = 'Acertou Parábens!!'
            await laco(2);
            tela.innerHTML = "Próxima Fase";
            await laco(1);
            comeca();
            // para garantir que acertou tudo
         }
     }else{
         cont =0;
         nivel = 0;
         jogo_work = false;
         array_jogo = [];
         array_user = [];
         tela.innerHTML = 'Game Over!'
     }
 }

 function laco(n){ 
     return new Promise (function(resolve){
        setTimeout(resolve, n*1000
            );
    });
 }  



async function comeca(){

    tela.innerHTML = 'Nivel ' + nivel;
    sorteia(nivel);
    jogo_work = true;
    for (i=0; i <=   nivel; i++){
            elem.children[array_jogo[i]].style.backgroundColor = botao_aceso[array_jogo[i]];
            // elem.children[array_jogo[i]].style.color = 'white';
             array_songs[array_jogo[i]].play(); 
            //  array_songs[array_jogo[i]].duration = 0.1;                                    
            await laco(0.5);
            elem.children[array_jogo[i]].style.backgroundColor = 'white';
            // elem.children[array_jogo[i]].style.color = 'black';
            // await laco(.5);  
    }
    
}
    
    // console.log("Eu sei o que está acontecendo");
        
 
    // console.log('entrou');
