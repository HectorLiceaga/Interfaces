class Figure {
    
    constructor(x,y,fill,ctx){
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.ctx = ctx;
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
        this.ctx.fillStyle = this.fill;
    }

    isOnFigure(x,y){ };
}