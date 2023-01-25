const container = document.createElement('div');//all the square div's will be appended to this
container.classList.toggle('container');
const body = document.querySelector('body');
body.appendChild(container); 
createDiv(16); //creates default 16*16 square grid;

function randomHSL(){ 
    return 'hsl(' + (360 * Math.random()) + ','
            + (40 + 40 * Math.random()) + '%,'
            + (65 + 20 * Math.random()) + '%'
};
function squareColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = randomHSL();
        })
    })
};

function createDiv (number) { //this will create square div's and add color upon mouse enter
    for (let i = 1; i <= number*number; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        let size = 500/number +'px';
        div.style.width = size;
        div.style.height = size;
    }
    console.log(container.children.length);
    squareColor();
}
const gridNumber = document.querySelector('.grid-number');
gridNumber.addEventListener('click', () => {
    let number = prompt("Choose the number of squares per side for the new grid (maximum:100):", 16);
    if (number < 101 && number > 1) {
        container.replaceChildren();
        return createDiv(number);
    }
})



