function createGrid(num) {
    let container = document.querySelector('.container');
    container.style.cssText += `grid-template-columns: repeat(${num}, 1fr)`;
 
    for (i=0; i<(num * num); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

createGrid(16);

let cells = document.querySelectorAll('.cell');

cells.forEach(x => {
    x.addEventListener('mouseenter', (e) => {
        x.classList.add('color');
    })
})
