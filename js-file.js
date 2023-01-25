const container = document.createElement('div');
container.classList.toggle('container');
const body = document.querySelector('body');
body.appendChild(container);
createDiv(16);
function createDiv (number) {
    for (let i = 1; i <= number*number; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        let size = 500/number +'px';
        div.style.width = size;
        div.style.height = size;
    }
    console.log(container.children.length);
}

function randomHSL(){
    return 'hsl(' + (360 * Math.random()) + ','
            + (40 + 40 * Math.random()) + '%,'
            + (65 + 20 * Math.random()) + '%'
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = randomHSL();
    })
})

