//VYC
let flyGuy;

function preload() {
}

function setup() {
    createCanvas(600, 600);
    flyGuy = new FlyGuy(100,100, 'red');
    flyGuy.ballon1 = new Ballon(flyGuy.x, flyGuy.y, -15,-30, 'blue');
    flyGuy.ballon2 = new Ballon(flyGuy.x, flyGuy.y, 30,-30, 'blue');
}

function draw() {
    background(0);

    //Show hero
    flyGuy.move();
    flyGuy.show();
}