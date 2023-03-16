function Object({
    pos,
    pointValue
}) {
    this.x = pos.x;
    this.y = pos.y;
    this.pointValue = pointValue;
    this.width = CONFIG.asset.width - 15;
    this.height = CONFIG.asset.height - 15;
    this.currentState = "idle";
}