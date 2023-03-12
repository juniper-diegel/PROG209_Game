function PlayerEntity({
    startPos,
}) {
    this.x = startPos.x;
    this.y = startPos.y;
    this.width = CONFIG.asset.width;
    this.height = CONFIG.asset.height;
    this.speed = 0.15;
    this.currentState = "idle";
}

PlayerEntity.prototype.changeX = function(e) {
    this.x += e;
}

PlayerEntity.prototype.changeY = function(e) {
    this.y += e;
}
