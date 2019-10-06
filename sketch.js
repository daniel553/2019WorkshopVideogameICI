//VYC
let flyGuy;
let enemy;

function preload() {
}

function setup() {
    createCanvas(600, 600);
    flyGuy = new FlyGuy(100, 100, 'red', true);
    flyGuy.ballon1 = new Ballon(flyGuy.x, flyGuy.y, -15, -30, 'blue');
    flyGuy.ballon2 = new Ballon(flyGuy.x, flyGuy.y, 30, -30, 'blue');
    enemy = new FlyGuy(300, 300, 'green');
    enemy.ballon1 = new Ballon(enemy.x, enemy.y, 15, -30, 'pink');
}

function draw() {
    background(0);

    //Show hero
    if(flyGuy.isDead() || enemy.isDead())
        this.gameOver();

    flyGuy.move();
    if (flyGuy.poppedBallon(enemy)) {
        flyGuy.crashed(enemy);
    }
    flyGuy.show();

    //Show enemy
    enemy.move();
    if (enemy.poppedBallon(flyGuy)) {
        enemy.crashed(flyGuy);
    }
    enemy.show();
}

function gameOver() {
    fill(125);
    textSize(24);
    text('GAME OVER', width / 2 - 95, height / 2);
    noLoop();
}

//Reset
function mousePressed(){
    setup();
    loop();
}