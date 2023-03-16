function GameState(context) {
                this.startTime = this.lastTime = Date.now();
                this.timePassed = 0;
                this.gameFrame = 0;
                this.isOver = false;
            
                this.currentLevel = null;
                this.currentPlayer = null;
                this.currentEnemy = null;
                this.object1 = null;
                this.object2 = null;
                this.object3 = null;
            
                this.context = context;
            }
            
            GameState.prototype.start = function() {
                this.reset();
            }
            
            GameState.prototype.gameOverChecker = function(secondPassed) {
                this.timePassed = secondPassed;
                if (this.timePassed >= this.currentLevel.timeLimit) {
                    this.isOver = true;
                }
            
                if (this.isOver) {
                    return true;
                }
                return false;
            }

            GameState.prototype.nowOver = function() {
                this.isOver = true;
            }
            
            GameState.prototype.isGameOver = function() {
                return this.isOver;
            }
            
            GameState.prototype.reset = function() {
                this.startTime = this.lastTime = Date.now();
                this.timePassed = 0;
                this.gameFrame = 0;
                this.isOver = false;
            
                this.currentLevel = getLatestLevelByUser("");
                this.currentPlayer = new PlayerEntity({
                    startPos: this.currentLevel.start
                });
                this.currentEnemy = new PlayerEntity({
                    startPos: this.currentLevel.enemySpawn
                });
                this.object1 = new Object({
                    pos: this.currentLevel.object1Pos,
                    pointValue: 100
                });
                this.object2 = new Object({
                    pos: this.currentLevel.object2Pos,
                    pointValue: 100
                });
                this.object3 = new Object({
                    pos: this.currentLevel.object3Pos,
                    pointValue: 100
                });
            }
            
            GameState.prototype.gameOver = function() {
                context.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
                document.getElementById("game-over-screen").style = "display: block";
                stopAudio(document.getElementById("audio"));
            }

            GameState.prototype.youWin = function() {
                context.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
                document.getElementById("you-win-screen").style = "display: block";
                stopAudio(document.getElementById("audio"));
            }
            
            GameState.prototype.getLevel = function() {
                return this.currentLevel;
            }
            
            GameState.prototype.getPlayer = function() {
                return this.currentPlayer;
            }
            
            
