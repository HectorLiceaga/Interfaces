class Token extends Circle {

    constructor(x, y, ctx) {
        super(x, y, ctx);
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

    draw() {//aca iria un drawimage de la ficha
 /*       
        let image = new Image();
        image.src = '..\assets\images\ficha.png';
        super.ctx.drawImage(image, this.x,this.y, 50, 50)
*/
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.x, this.y, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath()

    }

    isOnFigure(x, y) {
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x * _x + _y * _y) < this.rad;
    };
}