class Circle {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.isOccupied = false
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    draw(fill) {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
        this.ctx.fillStyle = fill;
        this.ctx.fill();
        this.ctx.closePath();
    }



    






}