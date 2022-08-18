function createGrid(num) {
    let container = document.querySelector('.container');
    container.style.cssText += `grid-template-columns: repeat(${num}, 1fr)`;
 
    for (i=0; i<(num * num); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
/*     for (i=0; i<num; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (j=0; j<num; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    } */
}

createGrid(16);