class Figure {

    constructor(x, y, ctx, fill) {
        this.x = x;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.fill = fill;
    }

    setFill(fill) {
        this.fill = fill;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return {
            x: this.getX(),
            y: this.getY()
        };
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getFill() {
        return this.fill;
    }

    draw() {
        this.ctx.fillStyle = this.fill;
    }

    isOnFigure(x, y) { };
}