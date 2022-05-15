const d = document;

const boxes = d.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5*4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show') ;
    })
}