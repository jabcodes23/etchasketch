//Get container div
let container_div = document.getElementById('container_div');

//Create a 16x16 layout of squares
for(var i = 0; i < 256; i++) {
    let grid_square = document.createElement('div');

    grid_square.style.height = '50px';
    grid_square.style.width = '50px';
    grid_square.style.float = 'left';
    grid_square.style.border = '1px solid black';

    container_div.appendChild(grid_square);
}