class Token extends Circle {

    constructor(x, y, ctx, fill, id) {
        super(x, y, ctx, fill);
        this.rad = 30;
        this.id = id;
    }

    setPosition(x, y) {
        super.x = x;
        super.y = y;
    }

    getPosition() {
        return {
            x: super.getX(),
            y: super.getY()
        };
    }

    getCtx() {
        return this.ctx;
    }

    getFill() {
        return this.fill;
    }

    getId() {
        return this.id;
    }

    draw() {
        super.draw();
        let x = this.getX();
        let y = this.getY();
        ctx.drawImage(this.fill, x - 25, y - 25, 50, 50);
    }

    isOnFigure(x, y) {
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x * _x + _y * _y) < this.rad;
    };
}