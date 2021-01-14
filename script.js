// Set initial variable for size
let size;

// Set original shades 255, 148, 225
let originalRed = 255;
let originalGreen = 148;
let originalBlue = 225;

// Diasble ability to sketch by default
let sketchingEnabled = false;

// Diasble rainbow coloring by default
let rainbowEnabled = false;

// Diasble shading by default
let shadingEnabled = false;

// Get container div
let container_div = document.getElementById('container_div');
container_div.style.height = '512px';

// Create and style logo div on left
let left_div = document.createElement('div');
left_div.style.width = '33%';
container_div.appendChild(left_div);

// Create and style logo div on left
let logo_div = document.createElement('div');
logo_div.style.width = 'max-content';
logo_div.style.margin = '0 auto';

// Add the logo div to the left div
left_div.appendChild(logo_div);

// Create and add the logo
let game_logo = document.createElement('img');
game_logo.src = 'game_logo.png';
logo_div.appendChild(game_logo);

let instruction_div = document.createElement('div');
instruction_div.innerText = 'Hi. To begin, click inside the box and start drawing. Click again to stop. Move the slider to adjust the fineness. Check out the shdaing and rainbow modes too.\n\nThis is an Odin Project experiment.'
instruction_div.style.margin = 'auto 30px auto 30px';
left_div.appendChild(instruction_div);

// Create and center the pixel grid
let grid_div = document.createElement('div');
grid_div.style.backgroundColor = 'white';
grid_div.style.width = '512px';
grid_div.style.height = '512px';
grid_div.style.display = 'grid';
grid_div.style.border = '10px solid rgb(65, 192, 201)';
grid_div.style.borderRadius = '15px';
grid_div.addEventListener('click', function (e) {
    sketchingEnabled = !sketchingEnabled;
});

// Add the pixel grid to the container div
container_div.appendChild(grid_div);

// Create and style options div on right
let right_div = document.createElement('div');
right_div.style.width = '33%';
container_div.appendChild(right_div);

// Create and style divs for the controls, coloring, and slider
let slider_div = document.createElement('div');
let colors_div = document.createElement('div');
let controls_div = document.createElement('div');

slider_div.style.padding = '10px';
slider_div.style.width = 'max-content';
slider_div.style.transform = 'translateY(60%)';
slider_div.style.margin = '0 auto';
slider_div.style.backgroundColor = 'rgb(65, 192, 201)';
slider_div.style.border = '5px solid rgb(65, 192, 201)';
slider_div.style.borderRadius = '12px';

colors_div.style.padding = '10px';
colors_div.style.width = 'max-content';
colors_div.style.transform = 'translateY(130%)';
colors_div.style.margin = '0 auto';

controls_div.style.padding = '30px';
controls_div.style.width = 'max-content';
controls_div.style.transform = 'translateY(100%)';
controls_div.style.margin = '0 auto';

// Add the controls div to the right div
right_div.appendChild(slider_div);

// Create and add the slider to the slider div
slider_div.innerHTML = '<input type="range" min="1" max="3" value="1" id="slider"></input>';
let slider = document.getElementById('slider');
slider.style.margin = '10px 0px 10px 0px';
slider.style.width = '150px';
slider.oninput = function() {
    switch(slider.value) {
        case '1':
            size = 16;
            break;
        case '2':
            size = 32;
            break;
        case '3':
            size = 64;
            break;
        default:
            size = 16;
    };
    makeGrid(size);
};
slider_div.appendChild(slider);

// Create and add the rainbow button to the colors div
let rainbow_button = document.createElement('button');
rainbow_button.innerText = 'RAINBOW MODE';
rainbow_button.classList.add('button');
rainbow_button.style.marginRight = '5px';
rainbow_button.addEventListener('click', function (e) {
    rainbowEnabled = !rainbowEnabled;
    rainbowEnabled ? rainbow_button.style.textDecoration = 'underline' : rainbow_button.style.textDecoration = 'none';
    shadingEnabled = false;
});
colors_div.appendChild(rainbow_button);

// Create and add the shading button to the colors div
let shade_button = document.createElement('button');
shade_button.innerText = 'SHADE-IN MODE';
shade_button.classList.add('button');
shade_button.style.marginLeft = '5px';
shade_button.addEventListener('click', function (e) {
    shadingEnabled = !shadingEnabled;
    shadingEnabled ? shade_button.style.textDecoration = 'underline' : shade_button.style.textDecoration = 'none';
    rainbowEnabled = false;
});
colors_div.appendChild(shade_button);

// Add the colors div to the right div
right_div.appendChild(colors_div);

// Create and add the reset button to the controls div
let reset_button = document.createElement('button');
reset_button.innerText = 'RESET';
reset_button.classList.add('button');
reset_button.style.margin = '0px 10px 0px 0px';
reset_button.addEventListener('click', function (e) {
    clear();
    shadingEnabled = false;
    rainbowEnabled = false;
    slider.value = 1;
    makeGrid(16);
});
controls_div.appendChild(reset_button);

// Create and add the clear button to the controls div
let clear_button = document.createElement('button');
clear_button.innerText = 'CLEAR';
clear_button.classList.add('button');
clear_button.style.margin = '0px 0px 10px 0px';
clear_button.addEventListener('click', function (e) {
    clear();
});
controls_div.appendChild(clear_button);

// Add the controls div to the right div
right_div.appendChild(controls_div);

// Use a loop to create a grid of 'pixels' 
function makeGrid(number) {
    size = number;
    for(var i = 0; i < Math.pow(number, 2); i++) {
         // Create and style one pixel
        let pixel = document.createElement('div');
        let id = 'square_' + i;
        
        pixel.style.backgroundColor = 'white';
        pixel.id = id;
        pixel.classList.add('square');
    
        // Add a listener to each pixel
        pixel.addEventListener('mouseover', function(e) {
            if(sketchingEnabled) {
                if(rainbowEnabled) {
                    e.target.style.backgroundColor = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
                } else if (shadingEnabled) {
                    e.target.style.backgroundColor = `rgb(${originalRed}, ${originalGreen--}, ${originalBlue--})`;
                } else {
                    e.target.style.backgroundColor = 'pink';
                }
            }
        });
        
        // Add each pixel to the container div
        grid_div.appendChild(pixel);
    }

    grid_div.style.gridTemplateColumns = `repeat(${size}, ${512/size}px)`;
    grid_div.style.gridTemplateRows = `repeat(${size}, ${512/size}px)`;
}

// Clear the pixels
function clear() {
    var pixels = document.getElementsByClassName('square');
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
}

function randomColorValue() {
    return Math.floor(Math.random() * (255 - 1 + 1) + 1);
}