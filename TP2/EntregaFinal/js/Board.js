class Board {
    constructor(ctx, w, h) {

        const FACTOR = 60;

        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(40, 70, FACTOR * w, FACTOR * h);
        let matrix = new Array();
        for (let x = 0; x < this.w; x++) {
            matrix[x] = new Array();
            for (let y = 0; y < this.h; y++) {
                let posX = 70 + x * FACTOR;
                let posY = 100 + y * FACTOR;
                matrix[x][y] = new Circle(posX, posY, ctx).draw('white');
            }
        }
    }

    setToken(x, token) {
        for(let i = matrix[x].length()-1; i > -1; i--){
            matrix[x][i] =  token.draw();

        }
    }

    draw(){
        for (let x = 0; x < this.w; x++) {
            for (let y = 0; y < this.h; y++) {
                let elem = this.matrix[posX][posY];
                elem.draw();
            }
        }
    }

    
}