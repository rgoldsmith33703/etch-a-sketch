function createGrid(num) {
    let container = document.querySelector('.container');
    container.style.cssText += `grid-template-columns: repeat(${num}, 1fr)`;
 
    for (i=0; i<(num * num); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    colorChange();
}

function colorChange() {
    let cells = document.querySelectorAll('.cell');

    cells.forEach(x => {
        x.addEventListener('mouseenter', (e) => {
            x.classList.add('color');
        })
    })
}

createGrid(16); /* starts page with 16x16 grid */

let button = document.querySelector('button');

button.addEventListener('click', (e) => {
    let container = document.querySelector('.container');
    container.replaceChildren();
    let gridSize = prompt('Enter a grid size no more than 100: ');
    createGrid(gridSize);
    colorChange();
})
