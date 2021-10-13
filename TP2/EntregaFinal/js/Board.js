class Board {
    constructor(ctx, w, h) {

        const FACTOR = 60;

        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(40, 70, FACTOR * w, FACTOR * h);
        this.matrix = new Array();
        for (let x = 0; x < this.w; x++) {
            this.matrix[x] = new Array();
            for (let y = 0; y < this.h; y++) {
                let posX = 70 + x * FACTOR;
                let posY = 100 + y * FACTOR;
                this.matrix[x][y] = new Circle(posX, posY, ctx, 'white');
                this.matrix[x][y].draw();
            }
        }
    }

    setToken(x, token) {
        let m = this.matrix;
        for (let i = m[x].length - 1; i > -1; i--) {
            if (!m[x][i].isOccupied()) {
                let t = new Token(m[x][i].getX(), m[x][i].getY(), token.getCtx(), token.getFill());
                m[x][i] = t;
                m[x][i].setOccuppied(true);
                return true;
            }
        }
        return false;
    }

    draw() {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(40, 70, 60 * this.w, 60 * this.h);

        for (let x = 0; x < this.w; x++) {
            for (let y = 0; y < this.h; y++) {
                let elem = this.matrix[x][y];
                elem.draw();
            }
        }
    }


}