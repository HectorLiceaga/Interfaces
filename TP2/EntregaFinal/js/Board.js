class Board{
    constructor(ctx, w, h){
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(40,70,60*w,60*h);
        this.createBlanks();
    }
    
    createBlanks(){
        for(let x=0; x < this.w; x++){
            let posX = 70+x*60;
            for(let y=0; y < this.h; y++){
                let posY = 100+y*60;
                this.ctx.beginPath();
                this.ctx.arc(posX,posY,25,0, Math.PI*2);
                this.ctx.fillStyle = 'white';
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
    }

    crateMatrix(){
        let x
    }

    draw(x){

    }

}