//scripts.js
const cards = document.querySelectorAll('.memory-card');

console.log(cards);
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard= false; // lockboard bloqueia o tabuleiro
// quando duas cartas são viradas, as outras não podem ser clicadas

function flipCard() { // essa função vira as cartas
  // this.classList.toggle('flip'); // this faz referência a o elemento atual do array
  // o toggle alterna, colocando flip e retirando caso ele já tenha o elemento flip
  if (!lockboard){
    
    if (!hasFlippedCard){
      this.classList.add('flip');
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
    else if (this === firstCard){
      return;
    }
    else{
      this.classList.add('flip');
      secondCard = this;
      console.log(secondCard)
      hasFlippedCard = false;
      checkForMatch();
    }
  }
 
}

function checkForMatch(){
  if (firstCard.dataset.framework === secondCard.dataset.framework){
    disableCards();
  } else{
    unflipCards();
  }
// /  zera_Variaveis();
}

function disableCards(){
  firstCard.removeEventListener('click',flipCard);
  // Retira o evento Listener da carta, agora se ela for clicada
  // não vai acontecer nada
  secondCard.removeEventListener('click',flipCard);
  zera_Variaveis();
}

function unflipCards(){
  lockboard = true;
  // console.log(firstCard, secondCard);
  setTimeout(() =>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    zera_Variaveis();
    // A função que zera as variáveis deve ser declarada aqui dentro da função que marca o tempo
    // porque se for declarada depois, por algum motivo, a função que reseta parece ser executa antes do temporizador terminar o que 
    // faz dar erro no código
  },1500);
  
}

function zera_Variaveis(){
  [hasFlippedCard, lockboard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
     cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 12);
       card.style.order = ramdomPos;
     });
   })
();


cards.forEach(card => card.addEventListener("click", flipCard));


// a carta fica configurada para esperar um click do usuário
// e quando isso acontece a função flipCard é chamada

// Estudo do for Each
/* 
  cards.forEach(card => console.log(card.children[0])); card é uma div com dois filhos, que são duas imagens
  então para acessar o filho uso o comando children, dessa forma, posso manipular os elementos que são filhos da div
  nessa caso o primeiro filho está no índice 0, o segundo no índice 1 e assim por diante

  cards.forEach(card => card.innerHTML += 'Olá mundo'); // Essa função executa em cada elemento do array 
  essa função ->>> card.innerHTML += 'Olá mundo', que escreve olá mundo dentro do elemento
  
  // var array = ['lucas', 'hugo', 'matheus', 'guilherme','joão']

// array.forEach((numero, id)  => { // os dois primeiros parâmetros sempre serão valor e índice de um array, não importa o nome 
das variáveis, eles sempre serão valor e índice
//   console.log(numero + " índice -> " + id);
//   console.log(numero.length + "  " + numero[0]);
// })

*/