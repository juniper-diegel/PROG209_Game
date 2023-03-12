function InputHandler() {
    this.keys = [];

    window.addEventListener("keydown", e => {
        if ((e.key === "ArrowDown" || e.key === "ArrowUp"
            || e.key === "ArrowLeft" || e.key === "ArrowRight"
            || e.key === "Shift" || e.key === "d")
            && this.keys.indexOf(e.code) === -1) { // can't multiple add the same keys
            this.keys.push(e.code);

            CONFIG.game.debug = true;
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
