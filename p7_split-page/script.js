const d = document;

const btns = d.querySelectorAll('.btn');
const container = d.querySelector('.container')

btns[0].addEventListener('mouseover',()=>{
    container.classList.remove('hover-right')
    container.classList.add('hover-left')
} )

btns[1].addEventListener('mouseover',()=>{
    container.classList.remove('hover-left')
    container.classList.add('hover-right')
} )