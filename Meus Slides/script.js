let totalSlides = document.querySelectorAll('.slide-item').length;
document.querySelector('.slide--width').style.width = `calc(100vw * ${totalSlides})`;

let slideAtual = 0;

function UpdateSlide(){
    if (slideAtual == totalSlides){
        slideAtual = 0;
    }
    let widthatual = document.querySelector('.slide-item').clientWidth;
    let newMargin = widthatual * slideAtual;
    document.querySelector('.slide--width').style.marginLeft = `-${newMargin}px`;
    slideAtual++;
}

setInterval(UpdateSlide,3000);

