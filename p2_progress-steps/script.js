const d = document;

const progress = d.getElementById('progress');
const prev = d.getElementById('prev');
const next = d.getElementById('next');
const circles = d.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();

})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')

        } else {
            circle.classList.remove('active');
        }
    })

    const actives = d.querySelectorAll('.active');

    progress.style.width = (actives.length-1)/ (circles.length-1) *100 +'%'

    if (currentActive ===1) {
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled= true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}

/*
Mine Solution 
next.addEventListener('click',()=>{
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    circles.forEach(circle => {
        circle.classList.remove('active')
    })

    circles[currentActive-1].classList.add('active')

    currentActive>1 && prev.removeAttribute('disabled') 
    
    currentActive ===4 && next.setAttribute('disabled',true);

})
prev.addEventListener('click',()=>{
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    circles.forEach(circle => {
        circle.classList.remove('active')
    })

    circles[currentActive-1].classList.add('active')

    currentActive<4 && next.removeAttribute('disabled')
    currentActive ===1 && prev.setAttribute('disabled',true);

}) */