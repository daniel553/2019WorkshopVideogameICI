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
        this.followGuy = undefined;
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
        } else {
            //The bot
            if (this.followGuy) {
                if (Math.random() > 0.8) {
                    this.vx = this.followGuy.x < this.x ? -3 : 3;
                    this.vy = this.followGuy.y < this.y ? -3 : 3;
                }
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

    poppedBallon(guy) {
        if (this.ballon1 && !this.ballon1.popped) {
            this.ballon1.popped = this.ballonCollidedWithGuy(this.ballon1, guy);
            return this.ballon1.popped;
        }
        if (this.ballon2 && !this.ballon2.popped) {
            this.ballon2.popped = this.ballonCollidedWithGuy(this.ballon2, guy);
            return this.ballon2.popped;
        }
        return false;
    }

    /**
     * Uses a library called 2d collide, see in html import.
     */
    ballonCollidedWithGuy(ballon, guy) {
        return collideRectRect(ballon.x, ballon.y, ballon.w, ballon.h, guy.x, guy.y, guy.w, guy.h);
    }

    crashed(guy) {
        //bounce the guys
        if (!this.dead) {
            if (this.vx > 0) {
                this.vx *= -1;
                if (this.vx > -10)
                    this.vx = -12;
            }

            if (this.vx <= 0) {
                this.vx *= -1;
                if (this.vx < 10)
                    this.vx = 12;
            }

            if (this.vy > 0) {
                this.vy *= -1;
                if (this.vy > -5)
                    this.vy = -7;
            }

        }
    }

    isDead() {
        //With 2 ballons
        if (this.ballon1 && this.ballon2) {
            return this.ballon1.popped && this.ballon2.popped;
        }
        // With 1 ballon
        if (this.ballon1 && !this.ballon2) {
            return this.ballon1.popped;
        }
        return false;
    }
}