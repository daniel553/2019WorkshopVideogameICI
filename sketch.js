//VYC
let flyGuy;
let enemy;
let assets = {};
let sound = true;

function preload() {
    assets['ballon'] = loadImage('./assets/ballon.png');
    assets['fighter-left'] = loadImage('./assets/fighter-left.png');
    assets['fighter-right'] = loadImage('./assets/fighter-right.png');
    assets['enemy-right'] = loadImage('./assets/enemy-right.png');
    assets['enemy-left'] = loadImage('./assets/enemy-left.png');
    assets['ballon-enemy'] = loadImage('./assets/ballon-enemy.png');
    assets['background'] = loadImage('./assets/background.png');
    soundFormats('mp3');
    assets['main-game'] = loadSound('./assets/main-game.mp3');
    assets['game-over'] = loadSound('./assets/game-over.mp3');
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

    assets['main-game'].setVolume(0.5);
    assets['main-game'].play();
}

function draw() {
    background(assets['background']);

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
    assets['main-game'].stop();
    assets['game-over'].setVolume(0.5);
    assets['game-over'].play();
}

document.getElementById('sound').onclick = ($event) => {
    $event.preventDefault();
    sound = !sound;
    if(!sound){
        assets['main-game'].stop(0);
    }
    else {
        assets['main-game'].play();
    }
}

window.onload = () => {
    //Add events to the buttons when clicked

    //Reset game (reload page)
    document.getElementById('reset').onclick = ($event) => {
        $event.preventDefault();
        location.reload();
    }


    //Sound on off
    document.getElementById('sound').onclick = ($event) => {
        $event.preventDefault();
        sound = !sound;
        if(!sound && assets['main-game'].isLoaded()){
            assets['main-game'].stop(0);
        }
        else {
            assets['main-game'].play();
        }
    }
}