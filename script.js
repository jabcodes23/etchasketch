// Get container div
let container_div = document.getElementById('container_div');

let left_div = document.createElement('div');
left_div.style.float = 'left';
left_div.style.backgroundColor = 'blue';
document.body.appendChild(left_div);

let right_div = document.createElement('div');
right_div.style.float = 'right';
right_div.style.backgroundColor = 'blue';
document.body.appendChild(right_div);

let drawingEnabled = false;

// Add a listener to the container to toggle the drawing ability
container_div.addEventListener('click', function (e) {
    drawingEnabled = !drawingEnabled;
});

// Create a 16x16 layout of squares
// Add the squares to the container div
// Add a listener to each square
for(var i = 0; i < 256; i++) {
    let grid_square = document.createElement('div');
    let id = 'square_' + i;
    
    grid_square.style.backgroundColor = 'white';
    grid_square.id = id;
    grid_square.classList.add('square');
    
    container_div.appendChild(grid_square);

    grid_square.addEventListener('mouseover', function(e) {
        if(drawingEnabled) {
            e.target.style.backgroundColor = 'black';
        }
    });
}