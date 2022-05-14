const d = document;

const loadingText = d.querySelector('.loading-text')
const bg = d.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30)


function blurring(){
    load++
    
    load>99 && (clearInterval(int));

    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`;
}

/* https://stackoverflow.com/questions/10756313/javascript-
jquery-map-a-range-of-numbers-to-another-range-of-numbers */
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

