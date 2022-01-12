var notas_on = false;
var letras_on = true;
var sus = true;


function tecla(nota){
	if (nota === 'do'){
		tecla1 = document.querySelector('#do')
		tecla1.style.marginBottom='10px';
		tecla1.style.color = 'black';	
		console.log("Toca o " + nota);
		new Audio('Notes/Recording/do.mp3').play();
	}
	else if ( nota === 're'){
		console.log("Toca o " + nota);
		new Audio('Notas/d3.mp3').play();
	}
	else if (nota === 'mi'){
		console.log("Toca o " + nota);
		new Audio('Notas/e3.mp3').play();		
	}else if (nota === 'fa'){
		console.log("Toca o " + nota);
		new Audio('Notas/f3.mp3').play();
	}
	else if (nota === 'sol'){
		console.log("Toca o " + nota);
		new Audio('Notas/g3.mp3').play();
	}
	else if (nota === 'la'){
		console.log("Toca o " + nota);
		new Audio('Notas/a3.mp3').play();
	}
	else if (nota === 'si'){
		console.log("Toca o " + nota);
		new Audio('Notas/b3.mp3').play();		
	}
	else if (nota === 'do2'){
		console.log("Toca o " + nota);
		new Audio('Notas/c4.mp3').play();
	}
	else if ( nota === 're2'){
		console.log("Toca o " + nota);
		new Audio('Notas/d4.mp3').play();
	}
	else if (nota === 'mi2'){
		console.log("Toca o " + nota);
		new Audio('Notas/e4.mp3').play();		
	}else if (nota === 'fa'){
		console.log("Toca o " + nota);
		new Audio('Notas/f4.mp3').play();
	}
	else if (nota === 'sol2'){
		console.log("Toca o " + nota);
		new Audio('Notas/g4.mp3').play();
	}
	else if (nota === 'la2'){
		console.log("Toca o " + nota);
		new Audio('Notas/a4.mp3').play();
	}
	else if (nota === 'si2'){
		console.log("Toca o " + nota);
		new Audio('Notas/b4.mp3').play();		
	} else if (nota === 'do3'){
		console.log("Toca o " + nota);
		new Audio('Notas/c5.mp3').play();
	}
	else if ( nota === 're3'){
		console.log("Toca o " + nota);
		new Audio('Notas/d5.mp3').play();
	}
	else if (nota === 'mi3'){
		console.log("Toca o " + nota);
		new Audio('Notas/e5.mp3').play();		
	}else if (nota === 'fa3'){
		console.log("Toca o " + nota);
		new Audio('Notas/f5.mp3').play();
	}
	else if (nota === 'sol3'){
		console.log("Toca o " + nota);
		new Audio('Notas/g5.mp3').play();
	}
	else if (nota === 'la3'){
		console.log("Toca o " + nota);
		new Audio('Notas/a5.mp3').play();
	}
	else if (nota === 'si3'){
		console.log("Toca o " + nota);
		new Audio('Notas/b5.mp3').play();		
	}
	else if (nota === 'doS'){
		console.log("Toca o " + nota);
		new Audio('Notas/c-3.mp3').play();
	}
	else if (nota === 'reS'){
		console.log("Toca o " + nota);
		new Audio('Notas/d-3.mp3').play();
	}
	else if (nota === 'faS'){
		console.log("Toca o " + nota);
		new Audio('Notas/f-3.mp3').play();
	}
	else if (nota === 'solS'){
		console.log("Toca o " + nota);
		new Audio('Notas/g-3.mp3').play();
	}
	else if (nota === 'laS'){
		console.log("Toca o " + nota);
		new Audio('Notas/a-3.mp3').play();
	}
	else if (nota === 'do2S'){
		console.log("Toca o " + nota);
		new Audio('Notas/c-3.mp3').play();
	}
	else if (nota === 're2S'){
		console.log("Toca o " + nota);
		new Audio('Notas/d-3.mp3').play();
	}
	else if (nota === 'fa2S'){
		console.log("Toca o " + nota);
		new Audio('Notas/f-3.mp3').play();
	}
	else if (nota === 'sol2S'){
		console.log("Toca o " + nota);
		new Audio('Notas/g-3.mp3').play();
	}
	else if (nota === 'la2S'){
		console.log("Toca o " + nota);
		new Audio('Notas/a-3.mp3').play();
	} else if (nota === 'do3S'){
		console.log("Toca o " + nota);
		new Audio('Notas/c-3.mp3').play();
	}
	else if (nota === 're3S'){
		console.log("Toca o " + nota);
		new Audio('Notas/d-3.mp3').play();
	}
	else if (nota === 'fa3S'){
		console.log("Toca o " + nota);
		new Audio('Notas/f-3.mp3').play();
	}
	else if (nota === 'sol3S'){
		console.log("Toca o " + nota);
		new Audio('Notas/g-3.mp3').play();
	}
	else if (nota === 'la3S'){
		console.log("Toca o " + nota);
		new Audio('Notas/a-3.mp3').play();
	}
	
}

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
	if (key === 188){
		key = 44;
		return String.fromCharCode(key);
	}
	else if (key === 190){
		key = 46;
		return String.fromCharCode(key);
	}
	else if (key === 191){
		key = 59;
		return String.fromCharCode(key);
	}
	else if (key === 193){
		key = 47;
		return String.fromCharCode(key);
	}
	else if (key === 186){
		key = 35;
		return String.fromCharCode(key);
	}
	else if (key === 222){
		key = 126;
		return String.fromCharCode(key);
	}else{
        return String.fromCharCode(key).toLowerCase(); 
	}
}


window.onload = function (){
  letras();		
}



document.onkeydown = function(evt) {
    var str = keyPressed(evt);
	console.log(str);
    tecla_pressionada(str);
};

document.onkeyup = function(evt) {
    var str = keyPressed(evt);
    tecla_despressionada(str);
};

function notas_teclas_brancas(){
	teclas = document.querySelectorAll('#teclado');
		key = ['do', 're', 'mi', 'fa', 'sol', 'la' ,'si']
		console.log(teclas.length);
		for(let j =0; j < teclas.length; j++){
		teclaz = teclas[j];
			for(let i=0; i < teclaz.children.length; i++){
				 // += PARA ADICIONAR O TEXTO SEM APAGAR O CONTEÚDO QUE JÁ EXISTE
				if (teclaz.children[i].id.slice(0,2) === 're' || teclaz.children[i].id.slice(0,2) === 'so' || teclaz.children[i].id.slice(0,2) === 'la'){
					teclaz.children[i].innerHTML += '<div class="linha3" style="font-size: 50px; text-align: center"> <p> ' + key[i] + '</p> </div>';
				}else{
					teclaz.children[i].innerHTML += '<div class="linha3" style="font-size: 50px; text-align: center"> <p>' + key[i] + '</p> </div>';			
				}
			}
		}
}

function apaga_notas_teclas_brancas(){
	teclas = document.querySelectorAll('#teclado');
		key = ['do', 're', 'mi', 'fa', 'sol', 'la' ,'si']
		console.log(teclas.length);
		for(let j =0; j < teclas.length; j++){
			teclaz = teclas[j];
			for(let i=0; i < teclaz.children.length; i++){
				filho = teclaz.children[i].querySelector(".linha3");
				 // += PARA ADICIONAR O TEXTO SEM APAGAR O CONTEÚDO QUE JÁ EXISTE
				if (teclaz.children[i].id.slice(0,2) === 're' || teclaz.children[i].id.slice(0,2) === 'so' || teclaz.children[i].id.slice(0,2) === 'la'){
					teclaz.children[i].removeChild(filho);
				}else{
					teclaz.children[i].removeChild(filho);
				}
			}
		}
}


function teclas_pretas(){
	teclas_pt = document.querySelectorAll("#tecla_preta");
	keyS = ['do#','re#','fa#','sol#','la#'];
	for (let i=0; i < teclas_pt.length; i++){
		teclas_pt[i].innerHTML += "<div class='notas_pt'>" + keyS[i%5] + "</div>";
		teclas_pt[i].style.fontSize = "20px";
		teclas_pt[i].style.color = "white";
	}
}



function apaga_teclas_pretas(){
	teclas_pt = document.querySelectorAll("#tecla_preta");
	keyS = ['do#','re#','fa#','sol#','la#'];
	for (let i=0; i < teclas_pt.length; i++){
		filho_pt = teclas_pt[i].querySelector(".notas_pt");
		if (filho_pt != null){
			teclas_pt[i].removeChild(filho_pt);
		}else{
			console.log(teclas_pt);
		}
	}
}

function notas(){
	if (!notas_on){
		  notas_teclas_brancas();
		  teclas_pretas();
		  btn = document.querySelector("#notas");
		  btn.style.backgroundColor = "red";
		  btn.style.color = "white";
		  notas_on = true;  		  
	}else{
		apaga_notas_teclas_brancas();
		apaga_teclas_pretas();
		btn = document.querySelector("#notas");
		btn.style.backgroundColor = "white";
		btn.style.color = "black";
		notas_on = false;	
	}
	
	
}

function letra_preta(){
	teclas_pt = document.querySelectorAll("#tecla_preta");
	keyS = ['do#','re#','fa#','sol#','la#'];
	for (let i=0; i < teclas_pt.length; i++){
	    teclas_pt[i].innerHTML += "<div class='notas_pt'>" + desassocia.get(teclas_pt[i].classList.value).toUpperCase() + "</div>";
		teclas_pt[i].style.fontSize = "20px";
		teclas_pt[i].style.color = "white";
	}
	
}

function escreve_letras(){
	let teclados = document.querySelectorAll("#teclado");
	for(let i =0; i < teclados.length; i++){
		teclado = teclados[i];
		for (let j=0; j < teclado.children.length; j++){
			teclado.children[j].children[1].innerHTML += '<p>' + desassocia.get(teclado.children[j].id) + '</p>'
			teclado.children[j].children[1].style.fontSize = "50px";
			teclado.children[j].children[1].style.textAlign = "center";
		}
	}
}

function apaga_letras(){
	let teclados = document.querySelectorAll("#teclado");
	for(let i =0; i < teclados.length; i++){
		teclado = teclados[i];
		for (let j=0; j < teclado.children.length; j++){
			teclado.children[j].children[1].innerHTML = '';
		}
	}
}
function apaga_letra_preta(){
	teclas_pt = document.querySelectorAll("#tecla_preta");
	keyS = ['do#','re#','fa#','sol#','la#'];
	for (let i=0; i < teclas_pt.length; i++){
	    teclas_pt[i].innerHTML = "";
	}
	
}

function letras(){
	if (letras_on){
		escreve_letras();
		letra_preta();
		btn = document.querySelector("#letras");
		btn.style.backgroundColor = 'red';
		btn.style.color = 'white';
		letras_on = false;
	}
	else{
	  apaga_letras();
	  apaga_letra_preta();
      btn = document.querySelector("#letras");
	  btn.style.backgroundColor = 'white';
	  btn.style.color = 'black';	  
	  letras_on = true;	
	}
}

var associa = new Map();
// Primeira Parte do Teclado
associa.set('q','do');
associa.set('2','doS');
associa.set('w','re');
associa.set('3','reS');
associa.set('e','mi');
associa.set('r','fa');
associa.set('5','faS');
associa.set('t','sol');
associa.set('6','solS');
associa.set('y','la');
associa.set('7','laS');
associa.set('u','si');
// Segundo Parte do Teclado
associa.set('i','do2');
associa.set('9','do2S');
associa.set('o','re2');
associa.set('0','re2S');
associa.set('p','mi2');
associa.set('z','fa2');
associa.set('s','fa2S');
associa.set('x','sol2');
associa.set('d','sol2S');
associa.set('c','la2');
associa.set('f','la2S');
associa.set('v','si2');
// Terceira Parte do Teclado
associa.set('b','do3');
associa.set('h','do3S');
associa.set('n','re3');
associa.set('j','re3S');
associa.set('m','mi3');
associa.set(',','fa3');
associa.set('l','fa3S');
associa.set('.','sol3');
associa.set('#','sol3S');
associa.set(';','la3');
associa.set('~','la3S');
associa.set('/','si3');

var desassocia = new Map();


function sustain(){
	if (sus){
		sus = false;
	}
	else{
		sus = true;
	}
}


for (var [chave, valor] of associa){
	desassocia.set(valor,chave);
}
console.log(desassocia);

function tecla_despressionada(nota){
	if (associa.get(nota) === 'do'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';		
		console.log("Toca o " + nota);
	}
	else if ( associa.get(nota) === 're'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'mi'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}else if (associa.get(nota) === 'fa'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'sol'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'la'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'si'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'do2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom="0px";
		son.style.marginTop="0px";
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if ( associa.get(nota) === 're2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'mi2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);		
	}else if (associa.get(nota) === 'fa2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + associa.get(nota));
	}
	else if (associa.get(nota) === 'sol2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + associa.get(nota));
	}
	else if (associa.get(nota) === 'la2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + associa.get(nota));
	}
	else if (associa.get(nota) === 'si2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		son.style.marginBottom = '0px';
		son.style.marginTop = '0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	
	} else if (associa.get(nota) === 'do3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom="0px";
		son.style.marginTop="0px";
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);	
	}
	else if ( associa.get(nota) === 're3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'mi3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom="0px";
		son.style.marginTop="0px";
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);		
	}else if (associa.get(nota) === 'fa3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'sol3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'la3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < 2 ; i++){
				son = tecla.children[i];
				son.style.marginBottom = '0px';
				son.style.marginTop = '0px';
		}
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'si3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom="0px";
		son.style.marginTop="0px";
		tecla.style.marginTop='0px';
		tecla.style.marginBottom='0px';
		tecla.style.backgroundColor = 'Ivory';	
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'doS'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'reS'){
			tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'faS'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'solS'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'laS'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'do2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 're2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'fa2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'sol2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'la2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	} else if (associa.get(nota) === 'do3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		console.log("Toca o " + nota);
		}
	}
	 else if (associa.get(nota) === 're3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'fa3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'sol3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
	else if (associa.get(nota) === 'la3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '0px';
			tecla[i].style.marginBottom = '0px';
			tecla[i].style.backgroundColor = 'Black';
			tecla[i].style.border = '1px solid Black';
		}
		console.log("Toca o " + nota);
	}
}

function tecla_pressionada(nota){
	console.log("Tamanho  " + associa.size);
	console.log("tecla pressionada " + associa.get(nota));
	if (associa.get(nota) === 'do'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/doS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/do.mp3').play();
		}
	
	}
	else if ( associa.get(nota) === 're'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/reS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/re.mp3').play();
		}
	}
	else if (associa.get(nota) === 'mi'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		if (sus){
			new Audio('Notes/Recording/miS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/mi.mp3').play();
		}		
	}else if (associa.get(nota) === 'fa'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/faS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/fa.mp3').play();
		}
	}
	else if (associa.get(nota) === 'sol'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';	
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/solS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/sol.mp3').play();
		}
	}
	else if (associa.get(nota) === 'la'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
				console.log(son);
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';	
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/laS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/la.mp3').play();
		}
	}
	else if (associa.get(nota) === 'si'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/siS.mp3').play();
		}
		else{
			new Audio('Notes/Recording/si.mp3').play();
		}	
	}
	else if (associa.get(nota) === 'do2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/do2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/do2.mp3').play();
		}
	}
	else if ( associa.get(nota) === 're2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';
		if (sus){
			new Audio('Notes/Recording/re2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/re2.mp3').play();
		}
	}
	else if (associa.get(nota) === 'mi2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/mi2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/mi2.mp3').play();
		}		
	}else if (associa.get(nota) === 'fa2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		console.log("Toca o " + associa.get(nota));
		if (sus){
			new Audio('Notes/Recording/fa2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/fa2.mp3').play();
		}
	}
	else if (associa.get(nota) === 'sol2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';
		if (sus){
			new Audio('Notes/Recording/sol2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/sol2.mp3').play();
		}
	}
	else if (associa.get(nota) === 'la2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';
		if (sus){
			new Audio('Notes/Recording/la2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/la2.mp3').play();
		}
	}
	else if (associa.get(nota) === 'si2'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/si2S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/si2.mp3').play();
		}		
	} else if (associa.get(nota) === 'do3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		if (sus){
			new Audio('Notes/Recording/do3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/do3.mp3').play();
		}
	}
	else if ( associa.get(nota) === 're3'){
	    tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';
		if (sus){
			new Audio('Notes/Recording/re3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/re3.mp3').play();
		}
	}
	else if (associa.get(nota) === 'mi3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		if (sus){
			new Audio('Notes/Recording/mi3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/mi3.mp3').play();
		}		
	}else if (associa.get(nota) === 'fa3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';		
		console.log("Toca o " + nota);
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/fa3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/fa3.mp3').play();
		}
	}
	else if (associa.get(nota) === 'sol3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';	
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/sol3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/sol3.mp3').play();
		}
	}
	else if (associa.get(nota) === 'la3'){
	tecla = document.querySelector(`#${associa.get(nota)}`);
		for (let i=0; i < tecla.children.length-1; i++){
				son = tecla.children[i];
				son.style.marginBottom = '20px';
				son.style.marginTop = '-20px';
		}
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';	
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/la3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/la3.mp3').play();
		}
	}
	else if (associa.get(nota) === 'si3'){
		tecla = document.querySelector(`#${associa.get(nota)}`);
		son = tecla.children[0];
		son.style.marginBottom = '20px';
		son.style.marginTop = '-20px';
		tecla.style.marginTop='20px';
		tecla.style.marginBottom="-20px";
		tecla.style.backgroundColor = 'DeepSkyBlue';	
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/si3S.mp3').play();
		}
		else{
			new Audio('Notes/Recording/si3.mp3').play();
		}		
	}
	else if (associa.get(nota) === 'doS'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/doST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/doT.mp3').play();
		}	
	}
	else if (associa.get(nota) === 'reS'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/reST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/reT.mp3').play();
		}
	}
	else if (associa.get(nota) === 'faS'){
		console.log("Toca o " + nota);
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		if (sus){
			new Audio('Notes/Recording/faST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/faT.mp3').play();
		}
	}
	else if (associa.get(nota) === 'solS'){
		console.log("Toca o " + nota);
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		if (sus){
			new Audio('Notes/Recording/solST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/solT.mp3').play();
		}
	}
	else if (associa.get(nota) === 'laS'){
		console.log("Toca o " + nota);
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		if (sus){
			new Audio('Notes/Recording/laST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/laT.mp3').play();
		}
	}
	else if (associa.get(nota) === 'do2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/do2ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/do2T.mp3').play();
		}
	}
	else if (associa.get(nota) === 're2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/re2ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/re2T.mp3').play();
		}
	}
	else if (associa.get(nota) === 'fa2S'){
		console.log("Toca o " + nota);
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		if (sus){
			new Audio('Notes/Recording/fa2ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/fa2T.mp3').play();
		}
	}
	else if (associa.get(nota) === 'sol2S'){
		console.log("Toca o " + nota);
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		console.log(tecla);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		if (sus){
			new Audio('Notes/Recording/sol2ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/sol2T.mp3').play();
		}
	}
	else if (associa.get(nota) === 'la2S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/la2ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/la2T.mp3').play();
		}
	} else if (associa.get(nota) === 'do3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		console.log(tecla);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/do3ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/do3T.mp3').play();
		}
	}
	else if (associa.get(nota) === 're3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		if (sus){
			new Audio('Notes/Recording/re3ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/re3T.mp3').play();
		}
	}
	else if (associa.get(nota) === 'fa3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/fa3ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/fa3T.mp3').play();
		}
	}
	else if (associa.get(nota) === 'sol3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/sol3ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/sol3T.mp3').play();
		}
	}
	else if (associa.get(nota) === 'la3S'){
		tecla = document.querySelectorAll(`.${associa.get(nota)}`);
		for (let i =0; i < tecla.length; i++){
			tecla[i].style.marginTop = '20px';
			tecla[i].style.marginBottom = '-20px';
	
		}
		console.log("Toca o " + nota);
		if (sus){
			new Audio('Notes/Recording/la3ST.mp3').play();
		}
		else{
			new Audio('Notes/Recording/la3T.mp3').play();
		}
	}
	
}