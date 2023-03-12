function PlayerEntity({
    startPos,
}) {
    this.x = startPos.x;
    this.y = startPos.y;
    this.width = CONFIG.asset.width;
    this.height = CONFIG.asset.height;
    this.speed = 0.45;
    this.faceTo = "right";
    this.direction = "right";
    this.currentState = {
        type: "idle",
        name: "idle" + this.faceTo.capitalize()
    }
}

PlayerEntity.prototype.changePosition = function({
    direction,
    type,
    speed
}) {
    this.direction = direction;
    this.faceTo =
        direction == "left" || direction == "right"
            ? direction
            : this.faceTo;
    this.currentState = {
        type: type,
        name: type + this.faceTo.capitalize()
    };

    function __internal__changePositionWithSpeed(player, speed) {
        if (player.direction === "right") {
            player.x += speed;
        }
        if (player.direction === "left") {
            player.x -= speed;
        }
        if (player.direction === "up") {
            player.y -= speed;
        }
        if (player.direction === "down") {
            player.y += speed;
        }
    }

    if (type !== "move") {
        return;
    }
    if (speed) {
        __internal__changePositionWithSpeed(this, speed);
    } else {
        __internal__changePositionWithSpeed(this, this.speed);
    }
}

PlayerEntity.prototype.idle = function() {
    let oldCurrentState = this.currentState;
    this.currentState = {
        type: "idle",
        name: "idle" + this.faceTo.capitalize()
    }
}

PlayerEntity.prototype.move = function(direction) {
    this.changePosition({
        direction: direction,
        type: "move",
    });
}

PlayerEntity.prototype.keepMoving = function() {
    this.move(this.direction);
    setTimeout(() => this.idle(), 300);
}


PlayerEntity.prototype.attack = function(direction) {
    this.changePosition({
        direction: direction,
        type: "attack",
    });
}

PlayerEntity.prototype.turn = function(faceTo) {
    this.faceTo = faceTo;
    let oldCurrentState = this.currentState;
    this.currentState = {
        type: oldCurrentState.type,
        name: oldCurrentState.type + this.faceTo.capitalize()
    }
}
