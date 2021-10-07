class Token {

    constructor(x, y, ctx, fill) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.fill = fill;
        this.rad = 30;
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



    drawToken(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x + 25, y + 25, 22, 0, Math.PI * 2);
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.closePath();
        let image = new Image();
        image.src = 'assets/images/ficha.png';
        image.onload = function () {
            ctx.drawImage(image, x, y, 50, 50);
        }
    }

    isOnFigure(x, y) {
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x * _x + _y * _y) < this.rad;
    };
}