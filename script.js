// Diasble ability to sketch by default
let sketchingEnabled = false;

// Get container div
let container_div = document.getElementById('container_div');

// Add a listener to the container to toggle the sketching ability
container_div.addEventListener('click', function (e) {
    sketchingEnabled = !sketchingEnabled;
});

// Create and style logo div on left
let left_div = document.createElement('div');
left_div.style.width = '33%';
container_div.appendChild(left_div);

// Create and center the pixel grid
let grid_div = document.createElement('div');
grid_div.classList.add('grid_div');
grid_div.style.backgroundColor = 'black';
grid_div.style.flex = 1;
grid_div.style.width = 'min-content';

// Use a loop to create a 16 by 16 grid of 'pixels' 
for(var i = 0; i < 256; i++) {
    // Create and style one pixel
    let pixel = document.createElement('div');
    let id = 'square_' + i;
    
    pixel.style.backgroundColor = 'white';
    pixel.id = id;
    pixel.classList.add('square');
    
    // Add each pixel to the container div
    grid_div.appendChild(pixel);

    // Add a listener to each pixel
    pixel.addEventListener('mouseover', function(e) {
        if(drawingEnabled) {
            e.target.style.backgroundColor = 'black';
        }
    });
}

// Add the pixel grid to the container div
container_div.appendChild(grid_div);

// Create and style options div on right
let right_div = document.createElement('div');
right_div.style.width = '33%';
container_div.appendChild(right_div);