const MAZE_LEVEL_3 = new Level({
    maze: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: {
        x: 0,
        y: 1
    },
    end: {
        x: 19,
        y: 18
    },
    enemySpawn: {
        x: 2,
        y: 18
    },
    enemyTurns: {
        coord: [{x: 2, y: 1}, {x: 2, y: 18}, {x: 16, y: 18}, {x: 16, y: 14}, 
                {x: 7, y: 14}, {x: 7, y: 9}, {x: 4, y: 9}, {x: 4, y: 7}, 
                {x: 7, y: 7}, {x: 7, y: 5}, {x: 9, y: 5}, {x: 9, y: 9},
                {x: 16, y: 9}, {x: 9, y: 9}, {x: 9, y: 5}, {x: 7, y: 5},
                {x: 7, y: 7},  {x: 4, y: 7}, {x: 4, y: 9}, {x: 7, y: 9}, 
                {x: 7, y: 14}, {x: 16, y: 14}, {x: 16, y: 18}, {x: 2, y: 18}],
        turn: ["up", "down", "right", "up", 
               "left", "up", "left", "up", 
               "right", "up", "right", "down",
               "right", "left", "up", "left",
               "down", "left", "down", "right",
               "down", "right", "down", "left"]
    },
    enemyCheckpoint: 0,
    object1Pos: {x: 16, y: 5},
    object2Pos: {x: 12, y: 16},
    object3Pos: {x: 5, y: 14},
    timeLimit: 180
});