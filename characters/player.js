function PlayerEntity({
    startPos,
}) {
    this.x = startPos.x;
    this.y = startPos.y;
    this.width = CONFIG.asset.width;
    this.height = CONFIG.asset.height;
    this.speed = 0.15;
    this.currentState = "idle";

    this.hitBadGuySound = new Audio();
    this.hitBadGuySound.src = "assets/hit-bad-guy.wav";

    this.hitTheWall = new Audio();
    this.hitTheWall.src = "assets/hit-the-wall.ogg";
}

PlayerEntity.prototype.changeX = function(e) {
    this.x += e;
}

PlayerEntity.prototype.changeY = function(e) {
    this.y += e;
}
