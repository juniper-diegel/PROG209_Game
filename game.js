const resources = new Resources();
const renderer = new Renderer();

const context = resources.context;
const assets = resources.assets;

let lastTime;
let startTime;

// GAME variables
let timePassed;

function normalizeTimePassed(value) {
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}

function reset() {
    lastTime = startTime = Date.now();
    timePassed = 0;
}

function update(deltaTime, secondPassed) {
    timePassed = secondPassed;
    if (timePassed === MAZE_LEVEL_1.timeLimit) {
        alert("GAME OVER");
        reset();
    }
}

function render() {
    renderer.render(context, assets, MAZE_LEVEL_1);
    renderer.renderTimeLimit(context, normalizeTimePassed(timePassed));
}

function gameLoop() {
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
    let seconds = Math.floor((startInLoop - startGameTime) / 1000);
    seconds %= 60;

    return seconds;
}

function startGame() {
    startTime = lastTime = Date.now();
    gameLoop();
}

