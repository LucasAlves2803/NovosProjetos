

var string;

string = document.getElementById('entrada');




var display = document.querySelector('.display');
display.innerHTML = '';


function limpar(){
    display.innerHTML=''
    string.value = '';
}





var vet = display.children;

// Ordenação por índice
function indice_insertion_sort(){
    for (let i =0; i < vet.length-1; i++){
        j = i+1;
        // aux = parseInt(vet[j].children[0].innerHTML);
        aux = vet[j].innerHTML;
        num = parseInt(vet[j].children[0].innerHTML);
        while (i > -1 && num < parseInt(vet[i].children[0].innerHTML)){
            vet[j].innerHTML = vet[i].innerHTML;
            i--;
            j--;
        }
        vet[j].innerHTML = aux;
        vet[j].id = num;
    }
}

// Ordenação por moda
function moda_insertion_sort(){
    for (let i =0; i < vet.length-1; i++){
        j = i+1;
        aux = vet[j].innerHTML;
        num = parseInt(vet[j].children[2].innerHTML);
        while (i > -1 && num > parseInt(vet[i].children[2].innerHTML)){
            vet[j].innerHTML = vet[i].innerHTML;
            i--;
            j--;
        }
        vet[j].innerHTML = aux;
        vet[j].id = num;
    }
}

function inseri_dados(num){
    display.innerHTML += `<div class="minicontainer" id='${num}'>  
                                <p> ${num} </p>
                                <div class="barra">
                                    <div class='barrinhas'> </div>
                                </div>
                                <div class="quantidade"> 1 </div>
                           </div>`
}


function soma_contador(num){
    console.log(`o id é ${num}`);
    let elem = document.getElementById(num);
    let div = elem.children[2];
    let barra = elem.children[1];
    barra.innerHTML += `<div class='barrinhas'> </div> `
    div.innerHTML++;
}

function verifica_dados(num){
    indice_insertion_sort();
    // console.log(vet);
    binary_search(num);
}

function binary_search(num){
    let f = vet.length-1;
    let i=0;
    let meio = ~~((i+f)/2);
    let log = false;
    while (i <= f && !log){
        if (parseInt(num) === parseInt(vet[meio].id)){
            log = true;
            break;
        }
        else if ( parseInt(num) > parseInt(vet[meio].id)){
            i = meio+1;
        }else{
            f = meio-1;
        }
        meio = ~~((i+f)/2);
    }

    if (log){
        soma_contador(num);
    }
    else{
        inseri_dados(num);
    }
    indice_insertion_sort();
}

function percorre_string(){
    
    let text = string.value;
    let num = '';
    for (let i=0; i < text.length; i++){
        if (text[i] != ','){
            num += text[i];
        }else{
       
            if (num != ''){
                console.log(`${num}`)
                verifica_dados(num);
            }
            
            num = '';
        }        
    }
    if (num != ''){
        verifica_dados(num);
    }
}
