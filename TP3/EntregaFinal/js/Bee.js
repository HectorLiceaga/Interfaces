class Bee {
    constructor() {

    }

    createBees() {
        let gameCont = document.getElementById("gameCont");
        let bee = document.createElement("div");
        bee.className = "bee";
        gameCont.appendChild(bee);
    
        bee.addEventListener('animationend', () => {
            gameCont.removeChild(bee)
        });
    }
}