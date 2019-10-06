//VYC
let sonic;
let rings;

/**
 * Used to preload assets
 */
function preload() {
    sonic = loadImage('./assets/sonic.png');
    soundFormats('wav');
    rings = loadSound('assets/rings.wav');
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    //Paint the sonic
    image(sonic, 100, 100, 200, 300);
}

function mousePressed(){
    //Play a clip sound
    rings.setVolume(0.5);
    rings.play();
}