function InputHandler() {
    this.keys = [];

    window.addEventListener("keydown", e => {
        if ((e.key === "ArrowDown" || e.key === "ArrowUp"
            || e.key === "ArrowLeft" || e.key === "ArrowRight"
            || e.key === "Shift" || e.key === "d")
            && this.keys.indexOf(e.code) === -1) { // can't multiple add the same keys
            if (e.key === "d") {
                CONFIG.game.debug = true;
            } else {
                this.keys.push(e.code);
            }
        }
    });

    window.addEventListener("keyup", e => {
        if ((e.key === "ArrowDown" || e.key === "ArrowUp"
            || e.key === "ArrowLeft" || e.key === "ArrowRight"
            || e.key === "Shift")) {
            this.keys.splice(this.keys.indexOf(e.code), 1);
        }
    })
}
