class Circle {
    constructor(x, y, ctx, fill) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.fill = fill;
        this.occupied = false
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setFill(fill) {
        this.fill = fill;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.closePath();
    }

    setOccuppied(bool) {
        this.occupied = bool;
    }

    isOccupied() {
        return this.occupied;
    }


}