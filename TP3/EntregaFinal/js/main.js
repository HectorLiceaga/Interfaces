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

function createBees() {
    bee.classList.remove("hidden");
    bee.classList.add("bee");
    bee.addEventListener('animationend', () => {
        bee.classList.remove("bee");
        bee.classList.add("hidden");
    });

}
setInterval(createBees, 4830);

/****************************** Honey Spawn ******************************************************* */

function createHoney() {
    honey.classList.remove("hidden");
    honey.classList.add("honey");
    honey.addEventListener('animationend', () => {
        honey.classList.remove("honey");
        honey.classList.add("hidden");
    });
}

setInterval(createHoney, 3050);

/****************************** BeeHive Spawn ******************************************************* */

function createBeehive() {
    beehive.classList.remove("hidden");
    beehive.classList.add("beeHive");
    beehive.addEventListener('animationend', () => {
        beehive.classList.remove("beeHive");
        beehive.classList.add("hidden");
    });
}

setInterval(createBeehive, 5120);

/****************************** Check Collision ******************************************************* */

function checkBeeCollision() {
    let characterPos = character.getBoundingClientRect();//pos character
    let beePos = bee.getBoundingClientRect();
    if (beePos.x < characterPos.x + characterPos.width
        && beePos.y < characterPos.y + characterPos.height
        && beePos.x + beePos.width - 25 > characterPos.x
        && beePos.height + beePos.y > characterPos.y) {
        end = true;
        gameOver(false);
    }
}

function checkBeehiveCollision() {
    let characterPos = character.getBoundingClientRect();//pos character
    let beehivePos = beehive.getBoundingClientRect();
    if (beehivePos.x < characterPos.x + characterPos.width
        && beehivePos.y < characterPos.y + characterPos.height
        && beehivePos.x + beehivePos.width > characterPos.x
        && beehivePos.height + beehivePos.y > characterPos.y) {
        end = true;
        gameOver(false);
    }
}

function checkHoneyCollision() {
    let characterPos = character.getBoundingClientRect();//pos character
    let honeyPos = honey.getBoundingClientRect();
    if (honeyPos.x < characterPos.x + characterPos.width
        && honeyPos.y < characterPos.y + characterPos.height
        && honeyPos.x + honeyPos.width > characterPos.x
        && honeyPos.height + honeyPos.y > characterPos.y) {
        counter++;
        score.innerHTML= "X" + counter;
        honey.classList.remove("honey");
        honey.classList.add("hidden");
        honeyGrab.classList.remove('hidden');
        honeyGrab.classList.add('honeyGrab');
        honeyGrab.addEventListener('animationend',()=>{
            honeyGrab.classList.add('hidden');
            honeyGrab.classList.remove('honeyGrab');
        });
    }
}

/****************************** Game Loop 500ms ******************************************************* */

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
    if (bool)
        console.log('Ganaste');
    else
        console.log('Game Over');
}

function checkCounter() {
    if (counter == wc) {
        end = true;
        gameOver(true);
    }
}


