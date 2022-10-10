// var a = parseInt(document.form.a.value);
// var b = parseInt(document.form.b.value);
// var c = parseInt(document.form.c.value);
var log = false;


function calcular(){
    let resultado = document.querySelector(".raizes");
    var a = parseInt(document.form.a.value);
    var b = parseInt(document.form.b.value);
    var c = parseInt(document.form.c.value);
    if (a != 0 && !isNaN(c) && !isNaN(a) && !isNaN(b)){
        raizes = baskara(a,b,c);
        resultado.innerHTML = raizes;
        if (log){
            document.form.a.style.backgroundColor = 'white';
            document.form.a.style.color = 'black';
            document.form.b.style.backgroundColor = 'white';
            document.form.b.style.color = 'black';
            document.form.c.style.backgroundColor = 'white';
            document.form.c.style.color = 'black';
            log = false;
        }
        

    }else if (a == 0 || isNaN(a) || isNaN(b) || isNaN(c)){
        log = true;
        if (a === 0){
            resultado.innerHTML = "O valor de a não pode ser 0";
            document.form.a.style.backgroundColor = 'red';
            document.form.a.style.color = 'white';
            
        }else {
            resultado.innerHTML = "Está faltando números";
            document.form.a.style.backgroundColor = 'red';
            document.form.a.style.color = 'white';
            document.form.b.style.backgroundColor = 'red';
            document.form.b.style.color = 'white';
            document.form.c.style.backgroundColor = 'red';
            document.form.c.style.color = 'white';
        }
        
    } 

    
}





function baskara(a,b,c){
    let delta = ((b * b) - (4 * a *c));
    if (delta < 0){
        return "Não existem raizes reais porque delta = " + delta;
    }else if (delta >= 0){
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return "Primeira Raiz = " + x1 + " Segundo Raiz = " + x2;
    }
}



























// function baskara(a,b,c){
//     let delta=0;
//     delta = (b*b) - (4*a*c);
//     if (delta < 0){
//         return "<p class='xis'> " + "Não há raízes reais, pois <br> Delta = " + delta  +"</p>";
//     }else{
//         let delta_raiz = Math.sqrt(delta);
//         let x1 = (-b + delta_raiz)/(2*a);
//         let x2 = (-b - delta_raiz)/(2*a);
//         return  " <p class='xis'> x1 = " + Math.round(x1 * 1000) / 1000 + " x2 = " + Math.round(x2 * 1000) / 1000s + "</p>";
//     }

// }