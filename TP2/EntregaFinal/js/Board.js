class Board {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(40, 70, 60 * w, 60 * h);
        let matrix = new Array();
        for (let x = 0; x < this.w; x++) {
            matrix[x] = new Array();
            for (let y = 0; y < this.h; y++) {
                let posX = 70 + x * 60;
                let posY = 100 + y * 60;
                matrix[x][y] = new Circle(posX, posY, ctx).draw('white');
            }
        }
    }

    setFill(fill) {
        
    }
    
}