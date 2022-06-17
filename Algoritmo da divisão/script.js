var cont = 0;
var celula, celula_aux;
var classe;
var design;
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
        console.log(celula);
        if (i ==0){
            celula.innerHTML = objdiv.Dividendo_inicial;      
        }else{
            celula.innerHTML = objdiv.Divisor;
        }       
    }

}

function exibe(){
    classe = '#Valor'+ "" + objdiv.linha + "" + cont;
    celula = document.querySelector(classe);
    
    if (cont <= 1){
        exibicao_inicial();
    }
    else if(cont == 2){
            let log;
            if (parseInt(objdiv.Dividendo_inicial) >= parseInt(objdiv.Divisor) ){
                log = 'sim';
                celula.innerHTML = log;
            }else{
                log = 'não';
                design.removeChild(design.children[3]);
                resto();
                celula.innerHTML = log;
                design.innerHTML += 'A divisão acabou!';
            }
            
    }else if (cont == 3){
            celula.innerHTML = objdiv.quociente;
            quociente();

    }else if (cont == 4){
            celula.innerHTML = objdiv.quociente + " * "+ objdiv.Divisor ;

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
    cont++;
    cont = cont % 8;
    
}

function quociente() 
{
    celula_aux = document.querySelector("#" + cab_final[2]);
    celula_aux.innerHTML = objdiv.soma_q;    
}

function resto(){
    celula_aux = document.querySelector("#" + cab_final[3]);
    celula_aux.innerHTML = objdiv.resto;
}
// function atualiza_info(opcao){
//   if (op <= 1){

//   }
// }

function trocar_design(design){
    // design.children[1].innerHTML = 'espaço em obra';
    // design.children[2].innerHTML = 'espaço em obra';
    design.removeChild(design.children[1]); // remove um filho do nó child
    // apaga o título divisão inteira
    // apaga os imputs  
    design.removeChild(design.children[1]);
    var grid_principal,resultado_final,tabela_aux;
    grid_principal = '<div class="grid_principal"> </div>';
    resultado_final = '<div class="resultado_final"> </div>';
    tabela_aux = '<div class="tabela_aux"> </div>';
    design.innerHTML += grid_principal +  tabela_aux + resultado_final;
    var grid = design.children[1];
    for(let j=0;j<8; j++){
        for (let i=0;  i < 8; i++){
            if (j == 0){
                cabecalho(grid, nomes[i]);  
            }else{
                    classe(grid,j,i);
                }
            }
    }                
    botoes(design.children[3]);
    tabela(design.children[2]);
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
        design.className = 'main2';
        trocar_design(design); // apaga o design inicial
        exibicao_inicial();
        valores_iniciais();
        cont++;
    }
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
