//VYC
let flyGuy;
let enemy;
let assets = {};

function preload() {
    assets['ballon'] = loadImage('./assets/ballon.png');
    assets['fighter-left'] = loadImage('./assets/fighter-left.png');
    assets['fighter-right'] = loadImage('./assets/fighter-right.png');
    assets['enemy-right'] = loadImage('./assets/enemy-right.png');
    assets['enemy-left'] = loadImage('./assets/enemy-left.png');
    assets['ballon-enemy'] = loadImage('./assets/ballon-enemy.png');
}

function setup() {
    createCanvas(600, 600);
    flyGuy = new FlyGuy(100, 100, 'red', true);
    flyGuy.assets = assets;
    flyGuy.ballon1 = new Ballon(flyGuy.x, flyGuy.y, 5, -30, 'blue');
    flyGuy.ballon1.assets = assets;
    flyGuy.ballon2 = new Ballon(flyGuy.x, flyGuy.y, 20, -30, 'blue');
    flyGuy.ballon2.assets = assets;
    enemy = new FlyGuy(300, 300, 'green');
    enemy.assets = assets;
    enemy.ballon1 = new Ballon(enemy.x, enemy.y, 10, -30, 'pink');
    enemy.ballon1.assets = assets;
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
    enemy.followGuy = flyGuy;
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