const resources = new Resources();
const renderer = new Renderer();

const context = resources.context;
const assets = resources.assets;


let lastTime;

function render() {
    renderer.render(context, assets, MAZE_LEVEL_1);
}

function update(deltaTime) {
}

function gameLoop() {
    let now = Date.now();
    let delta = now - lastTime;

    update(delta / 1000);
    render();
    lastTime = now;

    requestAnimationFrame(gameLoop);
}

function startGame() {
    gameLoop();
}

