class FlyGuy {
    constructor(x, y, color, isControlled) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.isControlled = isControlled;
        this.w = 50;
        this.h = 50;
        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.3;
        this.ballon1 = undefined;
        this.ballon2 = undefined;
    }

    show() {
        //Draw body 
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.w, this.h);

        if (this.ballon1) {
            this.ballon1.updatePos(this);
            this.ballon1.show();
        }
        if (this.ballon2) {
            this.ballon2.updatePos(this);
            this.ballon2.show();
        }
    }

    move() {
        if (this.isControlled) {
            //Apply forces for
            //Up
            if (keyIsDown(UP_ARROW)) {
                this.vy = -6;
            }
            //left
            if (keyIsDown(LEFT_ARROW)) {
                this.vx = this.vx - 2;
            }
            //right
            if (keyIsDown(RIGHT_ARROW)) {
                this.vx = this.vx + 2;
            }
        }

        //Apply gravity
        //Up
        this.vy += this.gravity;
        if (this.vy > 3)
            this.vy = 3;

        //Right and left.
        if (this.vx != 0) {
            if (this.vx > 0) {
                this.vx = Math.round(this.vx - 1);
                if (this.vx < -2)
                    this.vx = -2;
            }
            if (this.vx < 0) {
                this.vx = Math.round(this.vx + 1);
                if (this.vx > 2)
                    this.vx = 2;
            }

        }

        //Update position
        this.x += this.vx
        this.y += this.vy;

        //Stop on bottom
        if (this.y >= height - this.h) {
            this.y = height - this.h;
            this.vy = 0;
        }


    }
}