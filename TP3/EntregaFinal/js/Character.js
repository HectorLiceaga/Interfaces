class Character {
    constructor() {
        this.elem = document.getElementById("character");
        this.characterPos = this.elem.getBoundingClientRect();
    }

    getElem() {
        return this.elem;
    }

    getPos() {
        return this.characterPos;
    }
}






