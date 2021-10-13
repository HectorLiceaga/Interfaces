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
    let click = player1.findFigure(e.layerX, e.layerY);
    if (click != null) {//tb preguntar si esta disponible, si es su turno
        xOriginal = click.getX();
        yOriginal = click.getY();
        lastClickedFigure = click;
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
    if (lastClickedFigure != null) { //funcion paara detectar el rect
        if (lastClickedFigure.getX() > 40 && lastClickedFigure.getX() < 100) {//funcion que retorna el x correspondiente a la columna != null
            let b = board.setToken(0, lastClickedFigure); //misma función pero usando la x
            console.log(b);
            reload();
        } else {
            //devuelvo a su lugar original
            lastClickedFigure.setPosition(xOriginal, yOriginal);
            reload();
        }
    }
    lastClickedFigure = null;
}
