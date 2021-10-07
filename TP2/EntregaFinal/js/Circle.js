class Circle {
    constructor(posX, posY, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.isOccupied = false
    }


    draw(fill) {
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, 25, 0, Math.PI * 2);
        this.ctx.fillStyle = fill;
        this.ctx.fill();
        this.ctx.closePath();
    }



    






}