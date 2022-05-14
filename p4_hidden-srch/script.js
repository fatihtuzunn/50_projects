const d = document;

const search = d.querySelector('.search');
const btn = d.querySelector('.btn');
const input = d.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})

