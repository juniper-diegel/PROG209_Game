const resources = new Resources();
const renderer = new Renderer();

const context = resources.context;
const assets = resources.assets;

const gameState = new GameState(context);
let keyInput = new InputHandler();

let object1Caught = false;
let object2Caught = false;
let object3Caught = false;

let firstTime = true;
let playerWins = 0;
let playerPoints = 0;

function normalizeTimePassed(value) {
    let minutes = Math.trunc(value / 60);
    let seconds = value % 60;
    return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
}

function update(deltaTime, secondPassed) {
    if (gameState.gameOverChecker(secondPassed)) {
        // time out === game over
        assets["game-over-audio"].play();
        return;
    }
    if (gameState.currentPlayer.x <= (gameState.currentEnemy.x + 0.5)
        && gameState.currentEnemy.x <= (gameState.currentPlayer.x + 0.5)
        && gameState.currentPlayer.y <= (gameState.currentEnemy.y + 0.5)
        && gameState.currentEnemy.y <= (gameState.currentPlayer.y + 0.5)) {
        gameState.nowOver();
        assets["game-over-audio"].play();
        return;
    }

    if (secondPassed <= 0.5 && firstTime) {
        document.addEventListener("keydown", movePlayer);
    } else {
        firstTime = false;
    }

    function movePlayer(event) {
        var keyPressed = String.fromCharCode(event.keyCode);

        if (keyPressed == "W") {
            for (i = 0; i < gameState.currentLevel.maze.length; i++) {
                for (j = 0; j < gameState.currentLevel.maze[0].length; j++) {
                    if (
                        gameState.currentLevel.maze[i][j] == 1
                        && gameState.currentPlayer.y - 0.7 < i
                        && gameState.currentPlayer.y + 0.3 > i
                        && gameState.currentPlayer.x + 0.49 > j
                        && gameState.currentPlayer.x - 0.49 < j) {
                        gameState.currentPlayer.hitTheWall.play()
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
                        && gameState.currentPlayer.x - 0.49 < j) {
                        gameState.currentPlayer.hitTheWall.play()
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
                        || gameState.currentPlayer.x < 0) {
                        gameState.currentPlayer.hitTheWall.play()
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
                        || gameState.currentPlayer.x > 19) {
                        gameState.currentPlayer.hitTheWall.play()
                        return;
                    }
                }
            }
            gameState.currentPlayer.x += gameState.currentPlayer.speed * deltaTime;
        }
    }
}

function updateObject() {
    if (
        gameState.currentPlayer.y - 0.25 < gameState.currentLevel.object1Pos.y
        && gameState.currentPlayer.y + 0.25 > gameState.currentLevel.object1Pos.y
        && gameState.currentPlayer.x - 0.25 < gameState.currentLevel.object1Pos.x
        && gameState.currentPlayer.x + 0.25 > gameState.currentLevel.object1Pos.x
        && !object1Caught
    )
    {
        object1Caught = true;
        gameState.object1.x = 999;
        gameState.object1.y = 999;
        gameState.currentPlayer.point += gameState.object1.pointValue;
        playerPoints += gameState.object1.pointValue;
    }

    if (
        gameState.currentPlayer.y - 0.25 < gameState.currentLevel.object2Pos.y
        && gameState.currentPlayer.y + 0.25 > gameState.currentLevel.object2Pos.y
        && gameState.currentPlayer.x - 0.25 < gameState.currentLevel.object2Pos.x
        && gameState.currentPlayer.x + 0.25 > gameState.currentLevel.object2Pos.x
        && !object2Caught
    )
    {
        object2Caught = true;
        gameState.object2.x = 999;
        gameState.object2.y = 999;
        gameState.currentPlayer.point += gameState.object2.pointValue;
        playerPoints += gameState.object2.pointValue;
    }

    if (
        gameState.currentPlayer.y - 0.25 < gameState.currentLevel.object3Pos.y
        && gameState.currentPlayer.y + 0.25 > gameState.currentLevel.object3Pos.y
        && gameState.currentPlayer.x - 0.25 < gameState.currentLevel.object3Pos.x
        && gameState.currentPlayer.x + 0.25 > gameState.currentLevel.object3Pos.x
        && !object3Caught
    )
    {
        object3Caught = true;
        gameState.object3.x = 999;
        gameState.object3.y = 999;
        gameState.currentPlayer.point += gameState.object3.pointValue;
        playerPoints += gameState.object3.pointValue;
    }
}

function updateEnemyCheckpoint() {

    if (
        gameState.currentEnemy.y - 0.15 < gameState.currentLevel.enemyTurns.coord[gameState.currentLevel.enemyCheckpoint].y
        && gameState.currentEnemy.y + 0.15 > gameState.currentLevel.enemyTurns.coord[gameState.currentLevel.enemyCheckpoint].y
        && gameState.currentEnemy.x - 0.15 < gameState.currentLevel.enemyTurns.coord[gameState.currentLevel.enemyCheckpoint].x
        && gameState.currentEnemy.x + 0.15 > gameState.currentLevel.enemyTurns.coord[gameState.currentLevel.enemyCheckpoint].x) {
        if (gameState.currentLevel.enemyCheckpoint + 1 < gameState.currentLevel.enemyTurns.coord.length) {
            gameState.currentLevel.enemyCheckpoint++;
        } else {
            gameState.currentLevel.enemyCheckpoint = 0;
        }

    }
}

function moveEnemy(deltaTime) {

    if (gameState.currentLevel.enemyTurns.turn[gameState.currentLevel.enemyCheckpoint] == "up") {
        gameState.currentEnemy.y -= gameState.currentEnemy.speed * deltaTime;
    }
    else if (gameState.currentLevel.enemyTurns.turn[gameState.currentLevel.enemyCheckpoint] == "down") {
        gameState.currentEnemy.y += gameState.currentEnemy.speed * deltaTime;
    }
    else if (gameState.currentLevel.enemyTurns.turn[gameState.currentLevel.enemyCheckpoint] == "left") {
        gameState.currentEnemy.x -= gameState.currentEnemy.speed * deltaTime;
    }
    else if (gameState.currentLevel.enemyTurns.turn[gameState.currentLevel.enemyCheckpoint] == "right") {
        gameState.currentEnemy.x += gameState.currentEnemy.speed * deltaTime;
    }
    else {
        console.log("ERROR: Enemy Direction not found!");
    }
    updateEnemyCheckpoint();
}

function render() {
    renderer.clear();
    renderer.renderMap(context, assets, gameState.currentLevel);
    renderer.renderTimeLimit(context, gameState.timePassed);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.currentPlayer, assets["player"].getElement(), PLAYER_ANIMATIONS);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.currentEnemy, assets["enemy"].getElement(), ENEMY_ANIMATIONS);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.object1, assets["object"].getElement(), OBJECT_ANIMATIONS);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.object2, assets["object"].getElement(), OBJECT_ANIMATIONS);
    renderer.renderPlayer(context, gameState.gameFrame, gameState.object3, assets["object"].getElement(), OBJECT_ANIMATIONS);

    renderer.renderPlayerPoint(context, gameState.currentPlayer);
}

function gameLoop() {
    if (gameState.isGameOver()) {
        gameState.gameOver();
        gameState.currentLevel.enemyCheckpoint = 0;
        gameState.reset(0, 0);
        playerWins = 0;
        playerPoints = 0;
        object1Caught = false;
        object2Caught = false;
        object3Caught = false;
        return;
    }
    if (gameState.currentPlayer.x + 0.1 > gameState.currentLevel.end.x && !firstTime) {
        playerWins++;

        if (playerWins < 3) {
            gameState.nextLevel();
            gameState.currentLevel.enemyCheckpoint = 0;
            gameState.reset(playerWins, playerPoints);
            object1Caught = false;
            object2Caught = false;
            object3Caught = false;
            return;
        } else {
            gameState.youWin();
            gameState.currentLevel.enemyCheckpoint = 0;
            gameState.reset(0, 0);
            playerWins = 0;
            playerPoints = 0;
            object1Caught = false;
            object2Caught = false;
            object3Caught = false;
            renderer.clear();
            assets["victory-audio"].play();
            return;
        }
        
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
    moveEnemy(delta / 1000);
    updateObject();
    gameState.lastTime = now;
    gameState.gameFrame++;
    gameState.currentEnemy.speed *= 1 + (delta / 100000);

    requestAnimationFrame(gameLoop);
}

function calculateSecondPassed(startInLoop, startGameTime) {
    return Math.floor((startInLoop - startGameTime) / 1000);
}

function startGame() {
    gameState.start(playerWins, playerPoints);
    gameState.currentEnemy.speed = 1.2;
    gameLoop();
}

