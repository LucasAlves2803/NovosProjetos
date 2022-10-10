

var calendario2 = ` 
<p class="dia">Seg</p>
<p class="dia">Ter</p>
<p class="dia">Qua</p>
<p class="dia">Qui</p>
<p class="dia">Sex</p>
<p class="dia">Sab</p>
<p class="dia">Dom</p> 
<p></p>
<p ></p>
<p>1</p>
<p class="color">2</p>
<p class="color">3</p>
<p>4</p>
<p>5</p>
<p class="color">6</p>
<p class="color">7</p>
<p>8</p>
<p >9</p>
<p class="color">10</p>
<p class="color">11</p>
<p>12</p>
<p>13</p>
<p class="color" >14</p>
<p class="color">15</p>
<p>16</p>
<p >17</p>
<p class="color">18</p>
<p class="color">19</p>
<p>20</p>
<p >21</p>
<p class="color">22</p>
<p class="color">23</p>
<p>24</p>
<p >25</p>
<p class="color">26</p>
<p class="color">27</p>
<p>28</p>
<p >29</p>
<p class="color">30</p>
<p class="color">31</p>
<p></p>
<p></p>`;

var calendario3 = ` <p class="dia">Seg</p>
<p class="dia">Ter</p>
<p class="dia">Qua</p>
<p class="dia">Qui</p>
<p class="dia">Sex</p>
<p class="dia">Sab</p>
<p class="dia">Dom</p> 
<p></p>
<p ></p>
<p>1</p>
<p>2</p>
<p>3</p>
<p class="color">4</p>
<p class="color">5</p>
<p class="color">6</p>
<p class="color">7</p>
<p>8</p>
<p >9</p>
<p >10</p>
<p >11</p>
<p class="color">12</p>
<p class="color">13</p>
<p class="color" >14</p>
<p class="color">15</p>
<p>16</p>
<p >17</p>
<p >18</p>
<p >19</p>
<p class="color">20</p>
<p class="color">21</p>
<p class="color">22</p>
<p class="color">23</p>
<p>24</p>
<p >25</p>
<p >26</p>
<p >27</p>
<p class="color">28</p>
<p class="color">29</p>
<p class="color">30</p>
<p class="color">31</p>
<p></p>
<p></p>`;

var calendario4 = `<p class="dia">Seg</p>
<p class="dia">Ter</p>
<p class="dia">Qua</p>
<p class="dia">Qui</p>
<p class="dia">Sex</p>
<p class="dia">Sab</p>
<p class="dia">Dom</p> 
<p></p>
<p ></p>
<p>1</p>
<p>2</p>
<p>3</p>
<p >4</p>
<p >5</p>
<p >6</p>
<p >7</p>
<p class="color">8</p>
<p class="color">9</p>
<p class="color">10</p>
<p class="color">11</p>
<p class="color">12</p>
<p class="color">13</p>
<p class="color" >14</p>
<p class="color">15</p>
<p>16</p>
<p >17</p>
<p >18</p>
<p >19</p>
<p >20</p>
<p >21</p>
<p >22</p>
<p >23</p>
<p class="color">24</p>
<p class="color">25</p>
<p class="color">26</p>
<p >27</p>
<p class="color">28</p>
<p class="color">29</p>
<p class="color">30</p>
<p class="color">31</p>
<p></p>
<p></p>`;

var calendario5 = ` <p class="dia">Seg</p>
        <p class="dia">Ter</p>
        <p class="dia">Qua</p>
        <p class="dia">Qui</p>
        <p class="dia">Sex</p>
        <p class="dia">Sab</p>
        <p class="dia">Dom</p> 
        <p></p>
        <p ></p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p >4</p>
        <p >5</p>
        <p >6</p>
        <p >7</p>
        <p >8</p>
        <p >9</p>
        <p >10</p>
        <p >11</p>
        <p >12</p>
        <p >13</p>
        <p  >14</p>
        <p >15</p>
        <p class="color">16</p>
        <p class="color">17</p>
        <p class="color">18</p>
        <p class="color">19</p>
        <p class="color">20</p>
        <p class="color">21</p>
        <p class="color">22</p>
        <p class="color">23</p>
        <p class="color">24</p>
        <p class="color">25</p>
        <p class="color">26</p>
        <p >27</p>
        <p class="color">28</p>
        <p class="color">29</p>
        <p class="color">30</p>
        <p class="color">31</p>
        <p></p>
        <p></p>`;

var array_calendario = [0,calendario2, calendario3, calendario4,calendario5];
var array_soma = [1,2,4,8,16];
function laco(n){ 
    return new Promise (function(resolve){
       setTimeout(resolve, n*1000
           );
   });
}
var cont = 0;
var array_dias  = [1,2,4,8,16];
var calendario = document.querySelector(".calendario");
var mensagem = document.querySelector("#pergunta");
var mensagem0 = document.querySelector('#pergunta0');
var bt = document.querySelector(".bt");
var dia = 0; 



async function escolha(resposta){
    if (resposta){
        dia += array_soma[cont];    
    }
    cont++;
    if (cont < 5){        
            calendario.innerHTML = " <h2>  Trocando Calendário...  </h2>";
            await laco(1);
            mensagem.innerHTML = "Calendário " + (cont+1) + " de 5";
            calendario.innerHTML = array_calendario[cont];  
    }else if (cont == 5){
        if (dia == 0){
            calendario.innerHTML = " <h2> Erro: Você não escolheu nenhum calendário </h2>";
        }else {
            cont=0;
            // calendario.innerHTML = " <h2> O dia do seu aniversário é " + dia + "</h2>";
            calendario.className = "Calendario2";
            calendario.innerHTML = "";
            mensagem0.innerHTML = "";
            mensagem.innerHTML = "<h2> Pegue uma calculadora </h2>";
            bt.innerHTML = "<button class='btn'  onclick='passos()'> Próximo </button>";
            passos();    
        }
           
    }
}

var valor=0;
var log = false;
function passos(){
    if (cont == 0){
        calendario.innerHTML =  "<h2> Pense no número do mês do seu aniversário </h2>"
    }else if (cont == 1){
        calendario.innerHTML = " <h2> Multiple esse número por 2 </h2>";
    }else if (cont == 2){
        calendario.innerHTML = '<h2> Some 5 </h2>';
    }else if (cont == 3){
        calendario.innerHTML = "<h2> Multiple por 50 (Use a calculadora) </h2>";
    }else if (cont == 4){
        calendario.innerHTML = "<h2> Some a sua idade </h2>";
    }else if (cont == 5){
        calendario.innerHTML = "<h2> Digite o resultado  <form name='form'> <input type='number' name='num' > </input> </form>  </h2> ";
    }else if (cont == 6){
        valor = document.form.num.value;    
            if (valor === '' || valor.length < 3 || valor.length > 5){
                cont=5;
                 if (!log){
                    calendario.innerHTML += "<h3 style='color:red;'>Digite um número! </h3>";
                    log = true;
                 }
            }else{
                calendario.innerHTML = " <h2> Voce já fez aniversário esse ano? </h2>";
                bt.innerHTML = "";
                calendario.innerHTML += ' <div class="bt"> <button onclick="calcula(0)" id="aparece">Sim</button> <button onclick="calcula(1)" id="naoaparece">Não</button></div>';    
                
            }   
    }
        cont++;
 }







function calcula(soma_a_idade){
    valor = valor - 250;
    const ano_atual = 2022;
    let valor_final = String(valor);
    meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto',
                'setembro', 'outubro', 'novembro', 'dezembro'];
    let idade = valor_final.slice(valor_final.length/2, valor_final.length);
    if (soma_a_idade){ // caso a pessoa não tenha feito aniversário soma uma unidade
        idade += soma_a_idade;
    }
    let mes = valor_final.slice(0,valor_final.length/2);
    mensagem.innerHTML = "<h2> A sua data de aniversário é </h2>";
    calendario.innerHTML = "<h1 style='font-size= 100px'>" + dia + " de " + meses[mes-1] + " de " + (ano_atual - idade) + "</h1>";
}


































 