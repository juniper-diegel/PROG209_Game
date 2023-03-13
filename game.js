const resources = new Resources();
const renderer = new Renderer();

const context = resources.context;
const assets = resources.assets;

const gameState = new GameState(context);
const keyInput = new InputHandler();

let firstTime = true;

function normalizeTimePassed(value) {
    let minutes = Math.trunc(value / 60);
    let seconds = value % 60;
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}

function update(deltaTime, secondPassed) {
    if (gameState.gameOverChecker(secondPassed)) {
        return;
    }
    if (gameState.currentPlayer.x <= (gameState.currentEnemy.x + 0.5)
		&& gameState.currentEnemy.x <= (gameState.currentPlayer.x + 0.5)
		&& gameState.currentPlayer.y <= (gameState.currentEnemy.y + 0.5)
		&& gameState.currentEnemy.y <= (gameState.currentPlayer.y + 0.5)) 
	{
        gameState.nowOver();
        return;
    }

    if (secondPassed <= 0.5 && firstTime) {
        document.addEventListener("keydown", move);
    } else {
        firstTime = false;
    }

    function move(event) {
        var keyPressed = String.fromCharCode(event.keyCode);

        if (keyPressed == "W") {
            for (i = 0; i < gameState.currentLevel.maze.length; i++) {
                for (j = 0; j < gameState.currentLevel.maze[0].length; j++) {
                    if (
                        gameState.currentLevel.maze[i][j] == 1
                        && gameState.currentPlayer.y - 0.7 < i 
                        && gameState.currentPlayer.y + 0.3 > i
                        && gameState.currentPlayer.x + 0.49 > j
                        && gameState.currentPlayer.x - 0.49 < j) 
                    {
                        return;
                    }    
                }
            }
            gameState.currentPlayer.y -= gameState.currentPlayer.speed * deltaTime;   
        }
        if (keyPressed == "S") {
            for (i = 0; i < gameState.currentLevel.maze.length; i++) {
                for (j = 0; j < gameState.currentLevel.maze[0].length; j++) {
                    if (
                        gameState.currentLevel.maze[i][j] == 1
                        && gameState.currentPlayer.y - 0.3 < i 
                        && gameState.currentPlayer.y + 0.7 > i
                        && gameState.currentPlayer.x + 0.49 > j
                        && gameState.currentPlayer.x - 0.49 < j) 
                    {
                        return;
                    }    
                }
            }
            gameState.currentPlayer.y += gameState.currentPlayer.speed * deltaTime;
        }
        if (keyPressed == "A") {
            for (i = 0; i < gameState.currentLevel.maze.length; i++) {
                for (j = 0; j < gameState.currentLevel.maze[0].length; j++) {
                    if (
                        (gameState.currentLevel.maze[i][j] == 1
                        && gameState.currentPlayer.y - 0.49 < i 
                        && gameState.currentPlayer.y + 0.49 > i
                        && gameState.currentPlayer.x + 0.3 > j
                        && gameState.currentPlayer.x - 0.7 < j)
                        || gameState.currentPlayer.x < 0) 
                    {
                        return;
                    }    
                }
            }
            gameState.currentPlayer.x -= gameState.currentPlayer.speed * deltaTime;
        }
        if (keyPressed == "D") {
            for (i = 0; i < gameState.currentLevel.maze.length; i++) {
                for (j = 0; j < gameState.currentLevel.maze[0].length; j++) {
                    if (
                        (gameState.currentLevel.maze[i][j] == 1
                        && gameState.currentPlayer.y - 0.49 < i 
                        && gameState.currentPlayer.y + 0.49 > i
                        && gameState.currentPlayer.x + 0.7 > j
                        && gameState.currentPlayer.x - 0.3 < j)
                        || gameState.currentPlayer.x > 19) 
                    {
                        return;
                    }    
                }
            }
            gameState.currentPlayer.x += gameState.currentPlayer.speed * deltaTime;
        }
    }
}

function render() {
    renderer.clear();
    renderer.renderMap(context, assets, gameState.currentLevel);
    renderer.renderTimeLimit(context, gameState.timePassed);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.currentPlayer, assets["player"].getElement(), PLAYER_ANIMATIONS);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.currentEnemy, assets["enemy"].getElement(), ENEMY_ANIMATIONS);

}

function gameLoop() {
    if (gameState.isGameOver()) {
        gameState.gameOver();
        gameState.reset();
        return;
    }
    if (gameState.currentPlayer.x + 0.1 > gameState.currentLevel.end.x && !firstTime) {
        gameState.youWin();
        gameState.reset();
        renderer.clear();
        return;
    }
    let now = Date.now();
    let lastTime = gameState.lastTime;
    if (!lastTime) {
        lastTime = now;
    }
    let delta = now - lastTime;

    let secondPassed = calculateSecondPassed(now, gameState.startTime);
    update(delta / 1000, secondPassed);
    render();
    gameState.lastTime = now;
    gameState.gameFrame++;



    requestAnimationFrame(gameLoop);
}

function calculateSecondPassed(startInLoop, startGameTime) {
    return Math.floor((startInLoop - startGameTime) / 1000);
}

function startGame() {
    gameState.start();
    gameLoop();
    console.log(gameState.currentLevel.end.x);
}

