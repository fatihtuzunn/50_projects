const d = document;

const panels= d.querySelectorAll('.panel');
console.log(panels)
panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        
        panels.forEach(panel=>{
            panel.classList.remove('active')
        })
        
        panel.classList.add('active')

    })
});



/* 
MY SPAGETTI CODES

panels[0].addEventListener('click', ()=>{
    

    for (let i = 0; i < panels.length; i++) {
        panels[i].setAttribute('class', 'panel')
        
    }

    panels[0].setAttribute('class', 'panel active');
})
panels[1].addEventListener('click', ()=>{
    

    for (let i = 0; i < panels.length; i++) {
        panels[i].setAttribute('class', 'panel')
        
    }

    panels[1].setAttribute('class', 'panel active');
})
panels[2].addEventListener('click', ()=>{
    

    for (let i = 0; i < panels.length; i++) {
        panels[i].setAttribute('class', 'panel')
        
    }

    panels[2].setAttribute('class', 'panel active');
})
panels[3].addEventListener('click', ()=>{
    

    for (let i = 0; i < panels.length; i++) {
        panels[i].setAttribute('class', 'panel')
        
    }

    panels[3].setAttribute('class', 'panel active');
})
panels[4].addEventListener('click', ()=>{
    

    for (let i = 0; i < panels.length; i++) {
        panels[i].setAttribute('class', 'panel')
        
    }

    panels[4].setAttribute('class', 'panel active');
}) */