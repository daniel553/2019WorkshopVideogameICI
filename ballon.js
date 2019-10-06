class Ballon {
    constructor(x, y, offsetX, offsetY, color) {
        this.x = x;
        this.y = y;
        this.w = 30;
        this.h = 30;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.color = color;
        this.popped = false;
    }

    show() {
        if (!this.popped) {
            fill(this.color);
            rect(this.x + this.offsetX, this.y + this.offsetY, this.w, this.h);
        }
    }

    updatePos(flyGuy) {
        this.x = flyGuy.x;
        this.y = flyGuy.y;
    }
}