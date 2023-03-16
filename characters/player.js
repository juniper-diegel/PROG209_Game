function PlayerEntity({
    startPos,
    point
}) {
    this.x = startPos.x;
    this.y = startPos.y;
    this.width = CONFIG.asset.width - 15;
    this.height = CONFIG.asset.height - 15;
    this.speed = 0.15;
    this.currentState = "idle";

    this.hitTheWall = new AudioAsset("assets/hit-the-wall.ogg");
    this.point = point;
    this.wins = 0;
}

PlayerEntity.prototype.changeX = function(e) {
    this.x += e;
}

PlayerEntity.prototype.changeY = function(e) {
    this.y += e;
}
