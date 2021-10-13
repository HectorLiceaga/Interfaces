class Rect extends Figure{

    constructor(x,y,w,h,fill,ctx){
        super(x,y,fill,ctx);

        this.w = w;
        this.h = h;
    }

    getH(){
        return this.h;
    }

    getY(){
        return this.y;
    }

    draw(){
        super.draw();
        this.ctx.fillRect(this.x,this.y,this.w,this.h);
    }

    isOnFigure(x,y){
        return !(x < this.x || x > this.x + this.w || y < this.y || y > this.y + this.h);
    }
}