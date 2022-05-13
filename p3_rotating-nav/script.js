const d = document;

const open = d.getElementById('open');
const close = d.getElementById('close');
const container = d.querySelector('.container')
const nav = d.getElementById('nav')

open.addEventListener('click', 
()=> {
    container.classList.add('show-nav')
    nav.style.setProperty('display', 'block')
})

close.addEventListener('click', 
()=> {
    container.classList.remove('show-nav')
    nav.style["display"]="none";
})

