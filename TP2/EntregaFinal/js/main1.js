let cv = document.getElementById('canvas');
let ctx = cv.getContext('2d');

let w = cv.clientWidth;
let h = cv.clientHeight;

const CANT = 30;

let figures = [];
let lastClickedFigure = null;
let isMoving = false;

let board = new Board(ctx, 8, 7);
/* **********************************************  Add random figures  ************************************************************** */
function addFigure(){
    addCircle();
    drawFigure();
}


function drawFigure(){
    clearCanvas();
    for(let i = 0; i < figures.length; i++){
        figures[i].draw();
    }
}

function addCircle(x,y,color){
    let token = new Token(x,y,25,color,ctx);
    figures.push(token);
}

function clearCanvas(){
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,0,w,h);
}

/*for(let i=0; i<CANT;i++){
    addFigure();
}*/

cv.addEventListener('mousedown',start, false);
cv.addEventListener('mousemove',move, false);
cv.addEventListener('mouseup',stop, false);

/*function start(e){
    isMoving = true;
    let click = findFigure(e.layerX,e.layerY);
    if(click != null){

        lastClickedFigure = click;
    }
    drawFigure();
}

function findFigure(x,y){
    for(let i=0; i<figures.length; i++){
        const element = figures[i];
        if(element.isOnFigure(x,y)){
            return element;
        }
    }
}

function move(e){
    if(isMoving && lastClickedFigure != null){
        lastClickedFigure.setPosition(e.layerX,e.layerY);
        drawFigure();
    }
}

function stop(){
    isMoving = false;
    lastClickedFigure = null;
}*/