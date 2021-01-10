// Get container div
let container_div = document.getElementById('container_div');

// Create and style logo div on left
let left_div = document.createElement('div');
left_div.style.float = 'left';
left_div.style.backgroundColor = 'blue';
left_div.style.height = '50px';
left_div.style.width = '50px';
document.body.appendChild(left_div);

// Create and style options div on right
let right_div = document.createElement('div');
right_div.style.float = 'right';
right_div.style.backgroundColor = 'blue';
right_div.style.height = '50px';
right_div.style.width = '50px';
document.body.appendChild(right_div);

// Diasble ability to sketch by default
let sketchingEnabled = false;

// Add a listener to the container to toggle the sketching ability
container_div.addEventListener('click', function (e) {
    sketchingEnabled = !sketchingEnabled;
});

// Use a loop to create a 16 by 16 grid of 'pixels' 
for(var i = 0; i < 256; i++) {
    // Create and style one pixel
    let pixel = document.createElement('div');
    let id = 'square_' + i;
    
    pixel.style.backgroundColor = 'white';
    pixel.id = id;
    pixel.classList.add('square');
    
    // Add each pixel to the container div
    container_div.appendChild(pixel);

    // Add a listener to each pixel
    pixel.addEventListener('mouseover', function(e) {
        if(drawingEnabled) {
            e.target.style.backgroundColor = 'black';
        }
    });
}