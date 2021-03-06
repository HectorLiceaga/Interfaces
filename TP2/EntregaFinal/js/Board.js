class Board {
    constructor(ctx) {

        const FACTOR = 60;

        this.ctx = ctx;
        this.wc;
        this.w;
        this.h;

        this.matrix = new Array();
        this.dropZone = new Array();
        this.lastTokenX;
        this.lastTokenY;
    }

    /*************************************************  Set un nuevo token en la matriz - Retorna bool  ************************************************************* */
    setToken(x, token) {
        let m = this.matrix;
        for (let i = m[x].length - 1; i > -1; i--) {
            if (!m[x][i].isOccupied()) {
                let t = new Token(m[x][i].getX(), m[x][i].getY(), token.getCtx(), token.getFill(), token.getId());
                m[x][i] = t;
                m[x][i].setOccuppied(true);
                this.lastTokenX = x;
                this.lastTokenY = i;
                return true;
            }
        }
        return false;
    }

    /*************************************************  Setea los valores del tablero  ************************************************************* */
    setWC(wc){
        this.wc = wc;
        this.w = wc + 3;
        this.h = wc +2
        
        for (let x = 0; x < this.w; x++) {
            this.dropZone.push(new Rect(40 + x * 60, 0, 60, 60, this.ctx, 'white'));
            this.dropZone[x].draw();
            this.matrix[x] = new Array();
            for (let y = 0; y < this.h; y++) {
                let posX = 70 + x * 60;
                let posY = 100 + y * 60;
                this.matrix[x][y] = new Circle(posX, posY, ctx, 'white');
                this.matrix[x][y].draw();
            }
        }
    }

    /*************************************************  Dibuja el tablero  ************************************************************* */
    draw() {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(40, 70, 60 * this.w, 60 * this.h);

        for (let x = 0; x < this.w; x++) {
            this.dropZone[x].draw();
            for (let y = 0; y < this.h; y++) {
                let elem = this.matrix[x][y];
                elem.draw();
            }
        }
    }

    /*************************************************  Devuelve la columna donde fue soltada la ficha ************************************************************* */
    getDropZone(x, y) {
        for (let i = 0; i < this.dropZone.length; i++) {
            const element = this.dropZone[i];
            if (element.isOnFigure(x, y)) {
                return i;
            }
        }
    }

    /*************************************************  Funciones de chequeos de victoria  ************************************************************* */
    checkVertical(Token) {
        let contador = 0;
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (contador < wc) {
                    if (this.matrix[i][j].isOccupied() && this.matrix[i][j].getId() == Token.getId()) {
                        contador++;
                    } else {
                        contador = 0;
                    }
                } else {
                    return true;
                }
            }
        }
        if (contador == this.wc)
            return true;
    }

    checkHorizontal(Token) {
        let contador = 0;
        for (let i = 0; i < this.matrix.length; i++) {
            if (contador < wc) {
                if (this.matrix[i][this.lastTokenY].isOccupied() && this.matrix[i][this.lastTokenY].getId() == Token.getId()) {
                    contador++;
                } else {
                    contador = 0;
                }
            } else {
                return true;
            }
        }
        if (contador == this.wc)
            return true;
    }

    checkDiagDesc(Token) {
        let contador = 0;
        let i = this.lastTokenX;
        let j = this.lastTokenY;
        while (i < this.matrix.length && j < this.matrix[i].length && this.matrix[i][j].isOccupied() && this.matrix[i][j].getId() == Token.getId()) {
            contador++;
            i++;
            j++;
            if (contador == this.wc)
                return true;
        }
        i = this.lastTokenX - 1;
        if (i < 0)
            i = 0;
        j = this.lastTokenY - 1;
        if (j < 0)
            j = 0;
        while (i >= 0 && j >= 0 && i < this.matrix.length && j < this.matrix[i].length && this.matrix[i][j].isOccupied() && this.matrix[i][j].getId() == Token.getId()) {
            contador++;
            i--;
            j--;
            if (contador == this.wc)
                return true;
        }
    }

    checkDiagAsc(Token) {
        let contador = 0;
        let i = this.lastTokenX;
        let j = this.lastTokenY;
        if (j < 0)
            j = 0;
        while (i >= 0 && j >= 0 && i < this.matrix.length && j < this.matrix[i].length && this.matrix[i][j].isOccupied() && this.matrix[i][j].getId() == Token.getId()) {
            contador++;
            i++;
            j--;
            if (contador == this.wc)
                return true;
        }
        i = this.lastTokenX - 1;
        if (i < 0)
            i = 0;
        j = this.lastTokenY + 1;
        while (i >= 0 && j >= 0 && i < this.matrix.length && j < this.matrix[i].length && this.matrix[i][j].isOccupied() && this.matrix[i][j].getId() == Token.getId()) {
            contador++;
            i--;
            j++;
            if (contador == this.wc)
                return true;
        }
    }

    /*************************************************  Ejecuta funciones de chequeos - Devuelve el id ganador  ************************************************************* */
    winCondition(token) {
        let vertical = this.checkVertical(token);
        let horizontal = this.checkHorizontal(token);
        let diagDesc = this.checkDiagDesc(token);
        let diagAsc = this.checkDiagAsc(token);
        if (vertical || horizontal || diagDesc || diagAsc) {
            return token.getId();
        }
    }

}