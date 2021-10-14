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
let gameStart = false;

/*************************************************  Creación de jugadores  ************************************************************* */
let player1 = new Player(670, 100, ctx, 1);
let imgP1 = document.getElementById("token-y");
player1.createDeck(imgP1, 25);

let player2 = new Player(750, 100, ctx, 2);
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
    if (lastClickedFigure != null)
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


/*************************************************  Timer ************************************************************* */

let strt = document.getElementById("btnStart");
strt.addEventListener('click', (e) => {
    let sec = 59;
    let min = 4;
    gameStart = true;
    let interval = setInterval(function () {
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("countdown").innerHTML = '0' + min + ':' + sec;
        if(min >= 0){
            sec--;
            if (sec == -1) {
                sec = 59;
                min--;
            }
        }else{
            clearInterval(interval);
            alert('game over');
        }
    }, 1000);
});

/*************************************************  Funciones de eventos  ************************************************************* */

function start(e) {
    if (gameStart) {
        isMoving = true;
        let first = player1.findFigure(e.layerX, e.layerY); //no es la ficha
        let second = player2.findFigure(e.layerX, e.layerY);
        if (first != null && turn % 2 == 0) {
            xOriginal = first.getX();
            yOriginal = first.getY();
            lastClickedFigure = first;
            reload();
        }
        if (second != null && turn % 2 == 1) {
            xOriginal = second.getX();
            yOriginal = second.getY();
            lastClickedFigure = second;
            reload();
        }
    }
}

function move(e) {
    if (isMoving && lastClickedFigure != null) {
        lastClickedFigure.setPosition(e.layerX, e.layerY);
        reload();
    }
}

function stop() {
    isMoving = false;
    if (lastClickedFigure != null) {
        let position = board.getDropZone(lastClickedFigure.getX(), lastClickedFigure.getY());
        if (position != null) {
            let b = board.setToken(position, lastClickedFigure);
            if (b) {
                if (lastClickedFigure.getId() === player1.getId()) {
                    player1.dropToken(lastClickedFigure);
                }
                if (lastClickedFigure.getId() === player2.getId()) {
                    player2.dropToken(lastClickedFigure);
                }
                turn++;
                board.winCondition(lastClickedFigure);
                lastClickedFigure = null;
                reload();
            } else {
                lastClickedFigure.setPosition(xOriginal, yOriginal);
                reload();
            }
        } else {
            lastClickedFigure.setPosition(xOriginal, yOriginal);
            reload();
        }
    }
    lastClickedFigure = null;
}
