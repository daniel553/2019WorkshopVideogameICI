//VYC
let colorKeyPressed = 'white'
let mouseToggle = true;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    //If mouse pressed do not refresh background (resets)
    if(mouseToggle){
        background(0);
    }
    //Set a color depending on key pressed
    fill(colorKeyPressed);
    //Draw a circle where mouse is
    circle(mouseX,mouseY,50);

}

/**
 * Everytime you type a keyboard, this function is called automatically
 */
function keyTyped(){
    switch (key) {
        case 'r':
            colorKeyPressed = 'red';
            break;
        case 'g':
            colorKeyPressed = 'green';
            break;
        case 'b':
            colorKeyPressed = 'blue';
            break;
        default:
            colorKeyPressed = 'white';
    }
}

/**
 * If left arrow is pressed then we pause the program, and right arrow resumes it.
 */
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        noLoop();
    } else if (keyCode === RIGHT_ARROW) {
        loop();
    }
}

/**
 * Toggles mouse if pressed = true, false otherwise.
 */
function mousePressed() {
    mouseToggle = !mouseToggle;
    // prevent default
    return false;
  }
