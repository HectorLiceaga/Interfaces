'use strict';

/*************************************************  Creación de variables de uso gral  ************************************************************* */
let cv = document.getElementById('canvas');
let ctx = cv.getContext('2d');

let w = cv.clientWidth;
let h = cv.clientHeight;

let lastClickedFigure = null;
let isMoving = false;
let xOriginal;
let yOriginal;
let turn = 0;

/*************************************************  Creación de jugadores  ************************************************************* */
let player1 = new Player(670, 100, ctx);
let imgP1 = document.getElementById("token-y"); 
player1.createDeck(imgP1, 25);

let player2 = new Player(750, 100, ctx);
let imgP2 = document.getElementById("token-r"); 
player2.createDeck(imgP2, 25);

/*************************************************  Creación de tablero  ************************************************************* */
let board = new Board(ctx, 7, 6);
//3 en línea = 6 5 ??
//4 en linea = 7 6
//5 en línea = 8 7
//6 en línea = 9 8
//7 en línea = 10 9 ?? 

/*************************************************  Actualización dibujo canvas  ************************************************************* */

function reload() {
    clearCanvas();
    board.draw();
    player1.drawDeck();
    player2.drawDeck();
    lastClickedFigure.draw();
}

function clearCanvas() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
}

/*************************************************  Creación de eventos  ************************************************************* */

cv.addEventListener('mousedown', start, false);
cv.addEventListener('mousemove', move, false);
cv.addEventListener('mouseup', stop, false);
cv.addEventListener('mouseout', stop, false);


/*************************************************  Funciones de eventos  ************************************************************* */

function start(e) {
    isMoving = true;
    let first = player1.findFigure(e.layerX, e.layerY);
    let second = player2.findFigure(e.layerX, e.layerY);
    if (first != null && turn%2 == 0 ) {//tb preguntar si esta disponible, si es su turno
        xOriginal = first.getX();
        yOriginal = first.getY();
        lastClickedFigure = first;
        reload();
    }
    if (second != null && turn%2 == 1 ) {//tb preguntar si esta disponible, si es su turno
        xOriginal = second.getX();
        yOriginal = second.getY();
        lastClickedFigure = second;
        reload();
    }
}
/*
function findFigure(x, y) {
    for (let i = 0; i < tokensP1.length; i++) {//j1
        const element = tokensP1[i];
        if (element.isOnFigure(x, y)) {
            return element;
        }
    }
    for (let i = 0; i < tokensP2.length; i++) {//j1
        const element = tokensP2[i];
        if (element.isOnFigure(x, y)) {
            return element;
        }
    }
}
*/

function move(e) {
    if (isMoving && lastClickedFigure != null) {
        lastClickedFigure.setPosition(e.layerX, e.layerY);
        reload();
    }
}

function stop() {
    isMoving = false;
    let position = board.getDropZone(lastClickedFigure.getX(),lastClickedFigure.getY() );
    if (lastClickedFigure != null) { //funcion paara detectar el rect
        if (position != null) {//funcion que retorna el x correspondiente a la columna != null
            let b = board.setToken(position, lastClickedFigure); //misma función pero usando la x
            console.log(b);
            turn++;
            reload();
        } else {
            //devuelvo a su lugar original
            lastClickedFigure.setPosition(xOriginal, yOriginal);
            reload();
        }
    }
    lastClickedFigure = null;
}


