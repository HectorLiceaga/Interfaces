class Circle extends Figure{

    constructor(x,y,rad,fill,ctx){
        super(x,y,fill,ctx);
        
        this.rad = rad;
    }

    getRad(){
        return this.rad;
    }

    draw(){
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.rad,0, Math.PI*2);
        this.ctx.lineWidth = 5;
        this.ctx.colorStroke = 'black';
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.rad - 5,0, Math.PI*2);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.rad-10,0, Math.PI);
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fill();
    }

    isOnFigure(x,y){
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x *_x + _y * _y) < this.rad;
    }
}