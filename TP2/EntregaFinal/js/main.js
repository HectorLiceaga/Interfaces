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
let player1, player2;
let wc;
let p1, p2, bor;

/*************************************************  Creación de eventos  ************************************************************* */

cv.addEventListener('mousedown', start, false);
cv.addEventListener('mousemove', move, false);
cv.addEventListener('mouseup', stop, false);
cv.addEventListener('mouseout', stop, false); //Para cuando se sale del áresa del canvas


document.getElementById("token-g").addEventListener('click', () => {
    document.getElementById("token-g").id = "imP1";
    document.getElementById("imP1").classList.toggle('imgNone')
    document.getElementById("token-r").classList.toggle('imgNone')
    document.getElementById("token-p").classList.toggle('imgNone')
    p1 = true;
});
document.getElementById("token-p").addEventListener('click', () => {
    document.getElementById("token-p").id = "imP1";
    document.getElementById("imP1").classList.toggle('imgNone')
    document.getElementById("token-g").classList.toggle('imgNone')
    document.getElementById("token-r").classList.toggle('imgNone')
    p1 = true;
});
document.getElementById("token-r").addEventListener('click', () => {
    document.getElementById("token-r").id = "imP1";
    document.getElementById("imP1").classList.toggle('imgNone')
    document.getElementById("token-g").classList.toggle('imgNone')
    document.getElementById("token-p").classList.toggle('imgNone')
    p1 = true;
});
document.getElementById("token-v").addEventListener('click', () => {
    document.getElementById("token-v").id = "imP2";
    document.getElementById("imP2").classList.toggle('imgNone')
    document.getElementById("token-w").classList.toggle('imgNone')
    document.getElementById("token-y").classList.toggle('imgNone')
    p2 = true;
});
document.getElementById("token-w").addEventListener('click', () => {
    document.getElementById("token-w").id = "imP2";
    document.getElementById("imP2").classList.toggle('imgNone')
    document.getElementById("token-y").classList.toggle('imgNone')
    document.getElementById("token-v").classList.toggle('imgNone')
    p2 = true;
});
document.getElementById("token-y").addEventListener('click', () => {
    document.getElementById("token-y").id = "imP2";
    document.getElementById("imP2").classList.toggle('imgNone')
    document.getElementById("token-v").classList.toggle('imgNone')
    document.getElementById("token-w").classList.toggle('imgNone')
    p2 = true;
});


/*************************************************  Creación de tablero  ************************************************************* */
let board = new Board(ctx); // estado jugable
let v = document.getElementById("winCondition").value;
addEventListener('input', (e) => {
    wc = parseInt(e.target.value);
    bor = true;
});

/*************************************************  Game start: event, gameStart = true ************************************************************* */

let strt = document.getElementById("btnStart");
strt.addEventListener('click', (e) => {
    if (p1 && p2 && bor) {
        let sec = 59;                                   /*************************************************  Timer ************************************************************* */
        let min = 4;
        gameStart = true;
        turn = 0;
        let interval = setInterval(function () {
            if (sec < 10) {
                sec = "0" + sec;
            }
            document.getElementById("countdown").innerHTML = '0' + min + ':' + sec;
            if (min >= 0) {
                sec--;
                if (sec == -1) {
                    sec = 59;
                    min--;
                }
            } else {
                clearInterval(interval);
                terminate('GAME OVER!!! sE TERMINÓ EL TIEMPO')
            }
        }, 1000);

        /*************************************************  Creación de jugadores  ************************************************************* */
        player1 = new Player(670, 100, ctx, 1);
        let imgP1 = document.getElementById("imP1");
        player1.createDeck(imgP1, (((wc + 3) * (wc + 2)) / 2));

        player2 = new Player(750, 100, ctx, 2);
        let imgP2 = document.getElementById("imP2");
        player2.createDeck(imgP2, (((wc + 3) * (wc + 2)) / 2));
        board.setWC(wc);
        reload();
    }
});

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



/*************************************************  Funciones de eventos  ************************************************************* */
/**Función invocada con click */
function start(e) {
    if (gameStart) {
        isMoving = true;
        let first = player1.findFigure(e.layerX, e.layerY);
        let second = player2.findFigure(e.layerX, e.layerY);
        if (first != null && turn % 2 == 0) {
            xOriginal = first.getX();
            yOriginal = first.getY();
            lastClickedFigure = first;
        }
        if (second != null && turn % 2 == 1) {
            xOriginal = second.getX();
            yOriginal = second.getY();
            lastClickedFigure = second;
        }
    }
}
/**Función invocada al mover el mouse */
function move(e) {
    if (isMoving && lastClickedFigure != null) {
        lastClickedFigure.setPosition(e.layerX, e.layerY);
        reload();
    }
}
/**Función invocada al soltar el click */
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
                let id = board.winCondition(lastClickedFigure);
                if (id == 1) {
                    terminate('GANASTE jugador 1!!!');
                }
                if (id == 2) {
                    terminate('GANASTE jugador 2!!!');
                }
                if (turn == 42) {
                    terminate('GAME OVER!!! Empate!!!')
                }
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

/**Termina el juego */
function terminate(msj) {
    alert(msj);
    location.reload();
}

