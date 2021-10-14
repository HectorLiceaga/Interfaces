class Player {
    constructor(x, y, ctx, id) {
        this.deck = [];
        this.ctx = ctx;
        this.initX = x;
        this.initY = y;
        this.id = id;
    }

    createDeck(img, quantity) {
        for (let i = 0; i < quantity; i++) {
            let token = new Token(this.initX, this.initY + i * 15, this.ctx, img, this.id);
            this.deck.push(token);
            this.deck[i].draw();
        }
    }

    getDeck() {
        return this.deck;
    }

    getId(){
        return this.id;
    }

    findFigure(x, y) {
        for (let i = 0; i < this.deck.length; i++) {
            const element = this.deck[i];
            if (element.isOnFigure(x, y)) {
                return element;
            }
        }
    }

    drawDeck() {
        this.deck.forEach(element => {
            element.draw();
        });
    }
/** Elimina el token del mazo */
    dropToken(token){
        this.deck.splice(this.deck.indexOf(token), 1);
    }
}
