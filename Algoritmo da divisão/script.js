var cont = 0;
var celula, celula_aux;
var classe;
var design,filho1,filho2;
var restos,quocientes;
var objdiv ={
    Dividendo: 0,
    Dividendo_inicial:0,
    Divisor: 0,
    fim: false,
    resto: 0,
    soma_q: 0,
    quociente: 0,
    linha: 1
}

var nomes = ['Dividendo (D)','Divisor (d)', 'D >= d', 'Quociente (q)','d*q', 'D- (d*q)','Resto', 'Novo Dividendo'];
var cab_final = ['Dividendo','Divisor', 'Quociente','Resto'];
var classe_das_colunas = []

function casas_decimais(d){
    let cont = 0;
    while (d > 10){
        d = ~~(d / 10);
        cont++;
    }
    return d * 10**cont;
}

function decimais(i,f){
    var a,b;
    if (i - f == 1){
        return f;
    }
    a = casas_decimais(i);
    b = casas_decimais(f);
    if (a == b){
        return a;
    }else{
        return 0;
    }
}

function pesquisa_bin(){
    var i = objdiv.Dividendo;
    var f = 1;
    var n,m = 0;
    while(!n){
        m = ~~((i+f)/2);
        if (objdiv.Divisor * m > objdiv.Dividendo){
            i = m;
        }else{
            f = m;
        }
        n = decimais(i,f);
        console.log("Pesquisa bin",n);
    }
    return n;
}

function divisao(){
    objdiv.quociente = pesquisa_bin();
    objdiv.soma_q += objdiv.quociente;
    let produto = objdiv.quociente * objdiv.Divisor;
    objdiv.resto = objdiv.Dividendo - produto;
    
    
    objdiv.Dividendo_inicial = objdiv.Dividendo;
    objdiv.Dividendo = objdiv.resto;
    if ( parseInt(objdiv.Dividendo) < parseInt(objdiv.Divisor)){
        objdiv.fim= true;
    }
    console.log(`${objdiv.Dividendo_inicial} / ${objdiv.Divisor} tem quociente = ${objdiv.quociente} e resto = ${objdiv.resto} como fim = ${objdiv.fim}`);
    if(objdiv.fim){
        console.log(`então, a divisão termina, pois o novo dividendo ${objdiv.Dividendo} é menor que ${objdiv.Divisor}`);
    }else{
        console.log(`então, a divisão continua e o novo dividendo é  ${objdiv.Dividendo}`);
    }
    
    
}

function exibicao_inicial(){
    if (!objdiv.fim){
        divisao();
    }else{
        objdiv.Dividendo_inicial = objdiv.Dividendo;
    }
    cont =1;
    for ( let i=0;i < 2; i++){
        // classe = 'Valor' + objdiv.linha + '' + i;
        classe = '#Valor' + "" + objdiv.linha + "" + i;
        celula = document.querySelector(classe);
        // celula.style.backgroundColor = 'greenyellow';
        // console.log(celula);
        if (i ==0){
            celula.innerHTML = objdiv.Dividendo_inicial;      
        }else{
            celula.innerHTML = objdiv.Divisor;
        }       
    }

}

function exibe(){

    
    if (cont <= 1){
        exibicao_inicial();
        if (objdiv.linha > 1){
            let num = objdiv.linha -1;
            classe = '#Valor' + "" + num + "" + 7;
            celula = document.querySelector(classe);
            celula.style.backgroundColor = 'white';
        }

    }
    else{
        let num = cont-1;
        classe = '#Valor'+ "" + objdiv.linha + "" + num;
        console.log(classe);
        celula = document.querySelector(classe);
        if (celula.style.backgroundColor == 'greenyellow'){
            celula.style.backgroundColor = 'white';
        }
        classe = '#Valor'+ "" + objdiv.linha + "" + cont;

        celula = document.querySelector(classe);
        celula.style.backgroundColor = 'greenyellow';    
        if(cont == 2){
            let log;
            if (parseInt(objdiv.Dividendo_inicial) >= parseInt(objdiv.Divisor) ){
                log = 'sim';
                celula.innerHTML = log;
            }else{
                log = 'não';
                celula.style.color = 'white';
                celula.style.backgroundColor = 'red';

                let val = filho2.removeChild(filho2.children[3]);
                console.log(val);
                resto();
                celula.innerHTML = log;
                filho2.innerHTML += 'A divisão acabou!';
            }
            
    }else if (cont == 3){
            celula.innerHTML = objdiv.quociente;
            quociente();
            novo_quociente();

    }else if (cont == 4){
            celula.innerHTML = objdiv.quociente + " * "+ objdiv.Divisor ;
            novo_resto(objdiv.quociente * objdiv.Divisor);
    }else if (cont == 5){
            celula.innerHTML = objdiv.Dividendo_inicial  + '- ' + '(' + objdiv.Divisor + '*' + objdiv.quociente + ')';

    }else if (cont == 6){
            celula.innerHTML = objdiv.resto;
        }
    else if (cont == 7){
            celula.innerHTML = 'D =' + objdiv.resto;
            // if (!objdiv.fim){
            //     objdiv.linha++;
            //     cont = 0;
            // }
            // if (!objdiv.fim){
            //     divisao();
            // }else{
            //     objdiv.Dividendo_inicial = objdiv.Dividendo;
            //     objdiv.linha++;
            // }
            objdiv.linha++;
            cont=0;
        }
    }
    cont++;
    cont = cont % 8;
    
}

function quociente() 
{
    celula_aux = document.querySelector("#" + cab_final[2]);
    celula_aux.innerHTML = objdiv.soma_q;    
}

function novo_quociente(){
    console.log('função novo quociente');
    // if (!objdiv.fim){
        quocientes.innerHTML += `<p class='osquocientes'> ${objdiv.quociente} </p>`;
    // }
}

function novo_resto(num){
    // if (!objdiv.fim){ 
        restos.innerHTML += `<p class='osrestos'>  -${num} <hr> ${objdiv.Dividendo_inicial - num} </p>`;
    // }    
}

function resto(){
    celula_aux = document.querySelector("#" + cab_final[3]);
    celula_aux.innerHTML = objdiv.resto;
}
// function atualiza_info(opcao){
//   if (op <= 1){

//   }
// }

function trocar_design(clone){ // essa funcão altera apenas a variável clone
    // design.children[1].innerHTML = 'espaço em obra';
    // design.children[2].innerHTML = 'espaço em obra';
    
    console.log(clone);
    clone.removeChild(clone.children[1]); // remove um filho do nó child
    // apaga o título divisão inteira
    // apaga os imputs  
    clone.removeChild(clone.children[1]);
    var grid_principal,resultado_final,tabela_aux;
    grid_principal = '<div class="grid_principal"> </div>';
    resultado_final = '<div class="resultado_final"> </div>';
    tabela_aux = '<div class="tabela_aux"> </div>';
    clone.innerHTML += grid_principal +  tabela_aux + resultado_final;
    var grid = clone.children[1];
    for(let j=0;j<8; j++){
        for (let i=0;  i < 8; i++){
            if (j == 0){
                cabecalho(grid, nomes[i]);  
            }else{
                    classe(grid,j,i);
                }
            }
    }                
    botoes(clone.children[3]);
    tabela(clone.children[2]);
    console.log(clone);
}


function tabela(tabela){
    tabela.innerHTML += `<div class='titulo'> </div>` + `<div class='resultado'> </div>`;
    // tabela.children[0].innerHTML = 'naruto';
    for (let i=0; i < 2; i++){
        for (let j=0; j < 4; j++){
            if ( i == 0){
                console.log('entrou no if');
                tabela.children[i].innerHTML += `<div class='celula'> ${cab_final[j]} </div>`;
            }else{
                tabela.children[i].innerHTML += `<div class='celula' id=${cab_final[j]}>  </div>`
            }
        }
    }
}


function botoes(botoes_finais){
    botoes_finais.innerHTML = '<button class="botao" onclick="exibe()">Próximo</button>';
    botoes_finais.innerHTML+= '<button class="botao" onclick="voltar()">Voltar</button>';
    botoes_finais.innerHTML+= '<button class="botao" onclick="voltar()">Fim</button>';
}

function cabecalho(grid,nome){
    grid.innerHTML+= `<div  class="celula">${nome}</div>`;
}

function classe(grid,linha,coluna){   
    // let nome = 'celula Valor' + "" + linha + "" + coluna; 
    grid.innerHTML+= `<div class='celula' id='Valor${linha}${coluna}'  ></div>`;
}

function iniciar_valores(){
    objdiv.Dividendo = document.querySelector("#dividendo").value;
    objdiv.Divisor = document.querySelector("#divisor").value;
    
    // apaga o design inicial
    if ((objdiv.Dividendo >= 0 && objdiv.Divisor >= 0) && (parseInt(objdiv.Dividendo) > parseInt(objdiv.Divisor))  ){
        design = document.querySelector('.main');
        let clone = design.cloneNode(true); // cria um clone do elemento do elemento design
        // filho2 = design.innerHTML;
        // filho2.className = 'main2';
        trocar_design(clone); // a tabela será construída na variável clone
        design.innerHTML = `<div class='division'> </div>`  // os valores do design serão apagados
        design.innerHTML += `<div class='main2'> ${clone.innerHTML} </div>`; 
        // e dois novos valores são atrubuídos, o primeiro é a div divisão e o segundo é o novo design que
        // foi criado na varíavel clone
        filho1 = design.children[0];
        // as variáveis filho1 e filho2 recebem, respectivamente, a div divisão e a div main2, que são os 
        // filhos da div design
        filho2 = design.children[1];
        design.className = 'tela2';
        // filho2.innerHTML += 'naruto';      
        exibicao_inicial();
        valores_iniciais();
        division_design();
        cont++;
    }
}


function division_design(){
    filho1.innerHTML += `<div class='restos'> </div>`;
    filho1.innerHTML += `<div class='quocientes'> </div>`;
    restos = filho1.children[0];
    quocientes = filho1.children[1];
    quocientes.innerHTML = `<p class="div"> ${objdiv.Divisor}</p>`;
    restos.innerHTML = `<p class="osrestos"> ${objdiv.Dividendo_inicial}</p>` ;
    
}


function valores_iniciais(){
    for(let i=0; i < 2; i++){
        celula_aux = document.querySelector("#" + cab_final[i]);
        if (i == 0){
            celula_aux.innerHTML = objdiv.Dividendo_inicial;
        }else{
            celula_aux.innerHTML = objdiv.Divisor;
        }
    }
}




// function main(design){
//     if (objdiv.Dividendo >= objdiv.Divisor){
//         if (cont == 0){
//             divisao();
//         }        
//         exibe(design,cont);
//         cont = (cont+1) % 7;
        
//     }else if (objdiv.fim){
//         console.log(`${objdiv.Dividendo_inicial} / ${objdiv.Divisor} = ${objdiv.soma_q}`)
//     }else{
//         console.log('Os números não podem ser divididos');
//     } 
// }
