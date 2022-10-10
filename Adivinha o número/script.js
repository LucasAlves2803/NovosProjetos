var cont = 0;
var mensagem = document.querySelector("#mx");

function opcoes(){
    let x =0;
    if (cont==0){
        mensagem.innerHTML = "Soma de 3 ao número que pensou";
        cont++;
    }else if (cont == 1){
        mensagem.innerHTML = "Multiple por 2";
        cont++;
    }else if (cont==2){
        mensagem.innerHTML = " <p>Digite o resultado </p>  <form name='form' > <input type='number' name='valor'> </input> </form>"
        cont++;
    }else if (cont == 3){
        x = document.form.valor.value;
        x = descobre(x); // função que descobre o número pensado
        mensagem.style.fontSize = "30px";
        mensagem.innerHTML = "O número que você pensou foi <br> <h2> " + x + "</h2>";
        cont++;
    }else{
        elem = document.querySelector(".bt");
        elem.innerHTML = "";
    }
}



function descobre(n){
    let novo_n = (n/2)-3;
    return novo_n;
}