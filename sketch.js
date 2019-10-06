function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    //Basic Shapes
    //Line line(x1, y1, x2, y2)
    stroke(255);
    strokeWeight(5);
    line(30, 20, 85, 75);
    //Rectangle  rect(x, y, w, h, [tl], [tr], [br], [bl])
    rect(90, 20, 55, 55);
    //Circle circle(x, y, d)
    circle(190,50,50);
    //Triangle triangle(x1, y1, x2, y2, x3, y3)
    triangle(30, 175, 58, 120, 86, 175);
    //Curves curve(x1, y1, x2, y2, x3, y3, x4, y4)
    curve(5, 5, 100, 120, 170, 120, 270, 260);

}