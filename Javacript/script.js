console.log('eu sou o rei do mundo');
var a = document.querySelector(".tabela");
a.children[1].innerHTML = '<div class="naruto"> 1234</div>';
a.children[2].innerHTML = '<div class="naruto"> 2135 </div>';
var b = a.children;
// b[1].children[0].innerHTML = 'ninja';
// a.children[1].children[0].innerHTML = 'hogake';
c = b[1].querySelector('.naruto');
d = b[2].querySelector('.naruto')