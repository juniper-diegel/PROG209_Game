const resources = new Resources();
const renderer = new Renderer();

const context = resources.context;
const assets = resources.assets;

let lastTime;
let startTime;

// GAME variables
let timePassed;
let isOver = false;

function normalizeTimePassed(value) {
    let minutes = Math.trunc(value / 60);
    let seconds = value % 60;
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}

function reset() {
    lastTime = startTime = Date.now();
    timePassed = 0;
}

function gameOver() {
    context.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    document.getElementById("game-over-screen").style = "display: block"
    stopAudio(document.getElementById("audio"));
}

function update(deltaTime, secondPassed) {
    timePassed = secondPassed;
    if (timePassed >= MAZE_LEVEL_1.timeLimit) {
        isOver = true;
        return;
    }
}

function render() {
    renderer.render(context, assets, MAZE_LEVEL_1);
    renderer.renderTimeLimit(context, normalizeTimePassed(timePassed));
}

function gameLoop() {
    if (isOver) {
        gameOver();
        reset();
        return;
    }
    let now = Date.now();
    if (!lastTime) {
        lastTime = now;
    }
    let delta = now - lastTime;

    let secondPassed = calculateSecondPassed(now, startTime);
    update(delta / 1000, secondPassed);
    render();
    lastTime = now;

    requestAnimationFrame(gameLoop);
}

function calculateSecondPassed(startInLoop, startGameTime) {
    return Math.floor((startInLoop - startGameTime) / 1000);
}

function startGame() {
    isOver = false;
    reset();
    gameLoop();
}

