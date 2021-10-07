let cv = document.getElementById('canvas');
let ctx = cv.getContext('2d');

let w = cv.clientWidth;
let h = cv.clientHeight;

const CANT = 30;

let figures = [];
let lastClickedFigure = null;
let isMoving = false;

//3 en línea = 6 5 ??
//4 en linea = 7 6
//5 en línea = 8 7
//6 en línea = 9 8
//7 en línea = 10 9 ?? se pasa de canvas
let board = new Board(ctx, 7, 6);
let token = addToken(720, 350, 'red'); //posicion y color de prueba
let rect = cv.getBoundingClientRect();

function addFigure() {
    addCircle();
    drawFigure();
}


function drawFigure(x, y) {
    
    clearCanvas();
    /*
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw();
    }*/
    //board.draw();
    token.drawToken(x,y);
}

/********************************************Crea y dibuja un token **********************************************/
function addToken(x, y, fill) {
    let token = new Token(x, y, ctx, fill);
    token.drawToken(x, y);
    //token.draw('black');
    //figures.push(token);
    return token;
}



function clearCanvas() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
}

/*for(let i=0; i<CANT;i++){
    addFigure();
}*/


cv.addEventListener('mousedown',start, false);
cv.addEventListener('mousemove',move, false);
cv.addEventListener('mouseup',stop, false);

function start(e){
    isMoving = true;
    let click = findFigure(e.layerX,e.layerY);//devuelve undefined
    if(click != null){
        lastClickedFigure = click;
        drawFigure(e.layerX,e.layerY);
    }
}

function findFigure(x,y){
    /*
    for(let i=0; i<figures.length; i++){
        const element = figures[i];
        if(element.isOnFigure(x,y)){
            return element;
        }
    }*/
    const ficha = token;
    let bool = ficha.isOnFigure(x, y); //xq devuleve falso?
    if(bool){
        return ficha;
    }
}

function move(e){
    if(isMoving && lastClickedFigure != null){
        lastClickedFigure.setPosition(e.layerX,e.layerY);
        drawFigure(e.layerX,e.layerY);
    }
}

function stop(){
    isMoving = false;
    lastClickedFigure = null;
}