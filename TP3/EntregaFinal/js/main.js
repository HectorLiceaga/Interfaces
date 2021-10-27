"use strict";

let character = document.getElementById("character");
let bee = document.getElementById("bee");
let honey = document.getElementById("honey");
let beehive = document.getElementById("beehive");
let score = document.querySelector('.honey_count');
let honeyGrab = document.querySelector('#honeyGrab');
let counter = 0;
let end = false;
let wc = 5;



/******************************** Character's jump function ************************************************* */

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        character.className = "characterJump"
        character.addEventListener('animationend', () => {
            character.className = "character"
        })
    }
});

/****************************** Bee Spawn ******************************************************* */
let spawnFactor = (Math.random()) * Math.random() + 1500;

function createBees() {
    bee.classList.remove("hidden");
    bee.classList.add("bee");
    bee.addEventListener('animationend', () => {
        bee.classList.remove("bee");
        bee.classList.add("hidden");
    });

}
setInterval(createBees, spawnFactor + 900);

/****************************** Honey Spawn ******************************************************* */

function createHoney() {
    honey.classList.remove("hidden");
    honey.classList.add("honey");
    honey.addEventListener('animationend', () => {
        honey.classList.remove("honey");
        honey.classList.add("hidden");
    });
}

setInterval(createHoney, spawnFactor + 500);

/****************************** BeeHive Spawn ******************************************************* */

function createBeehive() {
    beehive.classList.remove("hidden");
    beehive.classList.add("beeHive");
    beehive.addEventListener('animationend', () => {
        beehive.classList.remove("beeHive");
        beehive.classList.add("hidden");
    });
}

setInterval(createBeehive, spawnFactor - 1500);

/****************************** Check Collision ******************************************************* */

function checkBeeCollision() {
    let characterPos = character.getBoundingClientRect();//pos character
    let beePos = bee.getBoundingClientRect();
    if (beePos.x < characterPos.x + characterPos.width - 10
        && beePos.y + 10 < characterPos.y + characterPos.height
        && beePos.x + 10 + beePos.width - 25 > characterPos.x
        && beePos.height + beePos.y > characterPos.y) {
        end = true;
        gameOver(false);
    }
}

function checkBeehiveCollision() {
    let characterPos = character.getBoundingClientRect();//pos character
    let beehivePos = beehive.getBoundingClientRect();
    if (beehivePos.x < characterPos.x + characterPos.width - 25
        && beehivePos.y < characterPos.y + characterPos.height - 10
        && beehivePos.x + beehivePos.width > characterPos.x + 10
        && beehivePos.height + beehivePos.y > characterPos.y) {
        end = true;
        gameOver(false);
    }
}

function checkHoneyCollision() {
    let characterPos = character.getBoundingClientRect();//pos character
    let honeyPos = honey.getBoundingClientRect();
    if (honeyPos.x < characterPos.x + characterPos.width - 25
        && honeyPos.y < characterPos.y + characterPos.height
        && honeyPos.x + honeyPos.width > characterPos.x
        && honeyPos.height + honeyPos.y > characterPos.y) {
        counter++;
        honey.classList.remove("honey");
        honey.classList.add("hidden");
        honeyGrab.classList.remove('hidden');
        honeyGrab.classList.add('honeyGrab');
        honeyGrab.addEventListener('animationend', () => {
            score.innerHTML = "X" + counter;
            honeyGrab.classList.add('hidden');
            honeyGrab.classList.remove('honeyGrab');
        });
    }
}

/****************************** Game Loop 100ms ******************************************************* */

let gameInterval = setInterval(() => {
    if (!end) {
        checkBeeCollision();
        checkHoneyCollision();
        checkBeehiveCollision();
        checkCounter();
    } else {
        clearInterval(gameInterval);
    }
}, 100);


function gameOver(bool) {// presentacion pantalla "Game Over" jugar de nuevo?
    if (bool) {
        console.log('Ganaste');
        alert('Ganaste');
        location.reload();

    }
    else {
        console.log('Game Over');
        alert('Game Over');
        location.reload();
    }
}

function checkCounter() {
    if (counter == wc) {
        end = true;
        gameOver(true);
    }
}


