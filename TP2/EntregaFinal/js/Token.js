class Figure {
    
    constructor(x,y,rad,fill,ctx){
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.ctx = ctx;
        this.rad = rad;
    }

    setFill(fill){
        this.fill = fill;
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
    }

    getPosition(){
        return{
            x: this.getX(),
            y: this.getY()
        };
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getFill(){
        return this.fill;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fill;
        this.ctx.arc(this.x,this.y,25,0, Math.PI*2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    isOnFigure(x,y){
        let _x = this.x - x;
        let _y = this.y - y;
        return Math.sqrt(_x *_x + _y * _y) < this.rad;
    };
}