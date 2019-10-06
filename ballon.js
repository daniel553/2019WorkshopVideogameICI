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
        this.assets = {};
    }

    show() {
        if (!this.popped) {
            if(this.color === 'blue'){
                image(assets['ballon'],this.x + this.offsetX, this.y + this.offsetY, this.w, this.h);
            }else {
                image(assets['ballon-enemy'],this.x + this.offsetX, this.y + this.offsetY, this.w, this.h);
            }
            
        }
    }

    updatePos(flyGuy) {
        this.x = flyGuy.x;
        this.y = flyGuy.y;
    }
}