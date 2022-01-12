console.log("Olá Mundo!!");
console.log("Esse ano de 2022 não tem para ninguém, eu vou mitar!")
var x, y;
var div;
div = document.querySelector(".container");
for (let i=0; i < 10; i++){
    div.innerHTML += '<div> Pessoas legais com caráter </div>';
}  // É possível fazer ordenação de doms, só devo usar o innerHTML ao invés de
// fazer uma simples atribuição

function trocadivs(){
    for (let i=5; i < 10; i++){
        div.children[i].innerHTML = '<div> Pessoas devem ter caráter </div>';
    }
}


function soma(){
    // console.log(x+y);
    return x+y;
}

function subtracao(){
    return x - y;
}

function multiplicacao(){
    return x * y;
}

function divisao(){
    return x / y;
}

function ehpar(varr){
    if (varr % 2 == 0){
        return 'sim'
    }
    else{
        return 'não'
    }
}