var cont = 0;

var objdiv ={
    Dividendo: 0,
    Dividendo_inicial:0,
    Divisor: 0,
    fim: 'false',
    resto: 0,
    soma_q: 0,
    quociente: 0,
    linha: 0
}

var nomes = ['D','d', 'D >= d', 'q','d*q', 'D- (d*q)','r', 'D=r'];
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
    var produto = objdiv.quociente * objdiv.Divisor;
    objdiv.resto = objdiv.Dividendo - produto;
    
    
    console.log(`${objdiv.Dividendo} / ${objdiv.Divisor} tem quociente = ${objdiv.quociente} e resto = ${objdiv.resto} como fim = ${objdiv.fim}`);
    objdiv.Dividendo = objdiv.resto;
    if (objdiv.Dividendo < objdiv.Divisor){
        objdiv.fim= true;
    }else{
         console.log(`então, a divisão continua e o novo dividendo é  ${objdiv.Dividendo}`);
    }
    
    // main();
}

function exibe(design, cont){
    if (cont <=1 ){
        
    }else{

    }
}

// function atualiza_info(opcao){
//   if (op <= 1){

//   }
// }

function trocar_design(design){;
    // design.children[1].innerHTML = 'espaço em obra';
    // design.children[2].innerHTML = 'espaço em obra';
    design.removeChild(design.children[1]); // remove um filho do nó child
    // apaga o título divisão inteira
    // apaga os imputs  
    design.removeChild(design.children[1]);
    var grid_principal,resultado_final;
    grid_principal = '<div class="grid_principal"> </div>';
    resultado_final = '<div class="resultado_final"> <div>';
    design.innerHTML += grid_principal + resultado_final;
    console.log(design);
    var grid = design.children[1];
    // for (let i=0;  i < 8; i++){
    //         cabecalho(grid, nomes[i]);        
    // }
    for(let j=0;j<8; j++){
        for (let i=0;  i < 8; i++){
            if (j == 0){
                cabecalho(grid, nomes[i]);  
            }else{
                    classe(grid,j,i);
                }
            }
    }                
    botoes(design.children[2]);
}

function botoes(botoes_finais){
    botoes_finais.innerHTML = '<button class="botao" onclick="avancar()">Próximo</button>';
    botoes_finais.innerHTML+= '<button class="botao" onclick="voltar()">Voltar</button>';
    botoes_finais.innerHTML+= '<button class="botao" onclick="voltar()">Fim</button>';
}

function cabecalho(grid,nome){
    grid.innerHTML+= `<div  class="celula">${nome}</div>`;
}

function classe(grid,linha,coluna){   
    let nome = 'celula Valor' + "" + linha + "" + coluna; 
    grid.innerHTML+= `<div class='${nome}' ></div>`
}

function iniciar_valores(){
    objdiv.Dividendo = document.querySelector("#dividendo").value;
    objdiv.Divisor = document.querySelector("#divisor").value;
    
    // apaga o design inicial
    if (objdiv.Dividendo >= 0 && objdiv.Divisor >= 0 ){
        objdiv.Dividendo_inicial = objdiv.Dividendo;
        let design = document.querySelector('.main');
        design.className = 'main2';
        trocar_design(design);
        main(design);
        exibe(cont,design);
    }
}





function main(design){
    if (objdiv.Dividendo >= objdiv.Divisor){
        if (cont == 0){
            divisao();
        }        
        exibe(design,cont);
        cont = (cont+1) % 7;
        
    }else if (objdiv.fim){
        console.log(`${objdiv.Dividendo_inicial} / ${objdiv.Divisor} = ${objdiv.soma_q}`)
    }else{
        console.log('Os números não podem ser divididos');
    } 
}
