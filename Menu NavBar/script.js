let open = document.getElementById('open'),
    close = document.getElementById('close'),
    menu = document.getElementById('menu');


common = (x,y,z) =>{
    x.addEventListener('click', ()=>{
        x.classList.toggle('hide');
        y.classList.toggle('hide');

        if (z == 'slide-in'){
            menu.classList.toggle('slide');
        }
        if (z =='slide-out'){
            menu.classList.toggle('slide');
        }
    })
}

common(open,close,'slide-in');
common(close, open, 'slide-out');