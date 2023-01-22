const container = document.createElement('div');
container.classList.toggle('container');
const body = document.querySelector('body');
body.appendChild(container);
function createDiv (number) {
    for (let i = 1; i <= number*number; i++) {
        const div = document.createElement('div');
        div.classList.add('grid')
        container.appendChild(div);
    }
    console.log(container.children.length)
}
createDiv(16);