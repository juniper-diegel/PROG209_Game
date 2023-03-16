const PLAYER_ANIMATIONS = {
    idle: {
        frames: 5,
        width: 52,
        height: 60,
        loc: [
            { x: 0, y: 0 },
            { x: 52, y: 0 },
            { x: 104, y: 0 },
            { x: 152, y: 0 },
            { x: 208, y: 0 },
        ]
    },
    move: {
        frames: 7,
        width: 70,
        height: 54,
        loc: [
            { x: 262, y: 0 },
            { x: 332, y: 0 },
            { x: 402, y: 0 },
            { x: 472, y: 0 },
            { x: 542, y: 0 },
            { x: 612, y: 0 },
            { x: 682, y: 0 },
        ]
    }
}

const ENEMY_ANIMATIONS = {
    idle: {
        frames: 5,
        width: 48.25,
        height: 60,
        loc: [
            { x: 48.25, y: 0 },
            { x: 96.5, y: 0 },
            { x: 144.75, y: 0 },
            { x: 193, y: 0 },
            { x: 241.25, y: 0 }
        ]
    },
    move: {
        frames: 3,
        width: 42,
        height: 60,
        loc: [
            { x: 0, y: 0 },
            { x: 42, y: 0 },
            { x: 84, y: 0 }
        ]
    }
}

const OBJECT_ANIMATIONS = {
    idle: {
        frames: 3,
        width: 45,
        height: 60,
        loc: [
            { x: 0, y: 0 },
            { x: 45, y: 0 },
            { x: 90, y: 0 }
        ]
    }
}