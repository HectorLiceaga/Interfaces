class Circle extends Figure {
    constructor(x, y, ctx, fill) {
        super(x, y, ctx, fill);
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
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
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