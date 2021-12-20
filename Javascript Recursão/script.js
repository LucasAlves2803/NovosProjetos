var elem_nome = document.querySelector('.container');
const nomeuser = document.querySelector('.user');

console.log(elem_nome);
var nome_do_usuario;

function mensagem(name, tam){
        if (tam != nome_do_usuario.length)
        elem_nome.children[0].innerHTML += name[tam];
      
}

function recursion(name,tam){
    console.log(tam);
    if (tam > 0){
        recursion(name,tam-1);
        mensagem(name,tam);
    }else{
        mensagem(name,0);
    }
}
function nome(){
    nome_do_usuario = nomeuser.value;
    elem_nome.children[0].innerHTML = '';
    recursion(nome_do_usuario,nome_do_usuario.length);
} 
