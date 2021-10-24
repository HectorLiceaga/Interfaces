"use strict";

/******************************** Character's jump function ************************************************* */

document.addEventListener('keydown', (e) => {
    if(e.code === 'Space'){
    document.getElementById("character").className = "spriteJump"
    document.getElementById("character").addEventListener('animationend', () => {
        document.getElementById("character").className = "sprite"
    })
    }
});

/****************************** Character's relative position ************************************************** */
let med = document.getElementById("character").getBoundingClientRect();
console.log(med);

/****************************** Bee spawn ******************************************************* */
function createBees() {
        let gameCont = document.getElementById("gameCont");
        let bee = document.createElement("div");
        bee.className = "bee";
        gameCont.appendChild(bee);
        
        bee.addEventListener('animationend', () => {
            gameCont.removeChild(bee)
        });
}

setInterval(createBees, 3500);