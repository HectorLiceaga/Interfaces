let cv = document.getElementById('canvas');
let ctx = cv.getContext('2d');

let w = cv.clientWidth;
let h = cv.clientHeight;

const CANT = 30;

let figures = [];
let lastClickedFigure = null;
let isMoving = false;

/* **********************************************  Add random figures  ************************************************************** */
function addFigure(){
    if(Math.random() > 0.5){
        addRect();
    } else {
        addCircle();
    }
    drawFigure();
}


function drawFigure(){
    clearCanvas();
    for(let i = 0; i < figures.length; i++){
        figures[i].draw();
    }
}

/* **********************************************  Add a rectangle in a random position  **************************************************** */
function addRect(){
    let x = Math.round(Math.random()*w);
    let y = Math.round(Math.random()*h);
    let color = randomRGBA();

    let rect = new Rect(x,y,50,50,color,ctx);
    figures.push(rect);
}


function addCircle(){
    let x = Math.round(Math.random()*w);
    let y = Math.round(Math.random()*h);
    let color = randomRGBA();

    let circle = new Circle(x,y,25,color,ctx);
    figures.push(circle);
}

/* **********************************************  Random color generator  ************************************************************** */
function randomRGBA(){
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ', 255)';
}


function clearCanvas(){
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,0,w,h);
}

for(let i=0; i<CANT;i++){
    addFigure();
}

cv.addEventListener('mousedown',start, false);
cv.addEventListener('mousemove',move, false);
cv.addEventListener('mouseup',stop, false);

function start(e){
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
}