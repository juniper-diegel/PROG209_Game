const MAZE = {
    maze: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    start: {
        X: 0,
        Y: 1
    },
    end: {
        X: 19,
        Y: 18
    }
}

const ASSET_WIDTH = 50;
const ASSET_HEIGHT = 50;

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

canvas.width = (MAZE.maze.length + 1) * ASSET_WIDTH;
canvas.height = (MAZE.maze[0].length + 1) * ASSET_HEIGHT;
document.body.appendChild(canvas);

const backgroundImage = new Image();
backgroundImage.src = "assets/background.jpg";

const treeImage = new Image();
treeImage.src = "assets/tree.png";

const roadImage = new Image();
roadImage.src = "assets/road.png";

function rawMaze(maze) {
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            switch (maze[i][j]) {
                case 1:
                    context.drawImage(treeImage, ASSET_WIDTH * j, ASSET_HEIGHT * i, ASSET_WIDTH, ASSET_HEIGHT);
                    break;
                case 0:
                    context.drawImage(roadImage, ASSET_WIDTH * j, ASSET_HEIGHT * i, ASSET_WIDTH, ASSET_HEIGHT);
                    break
            }
        }

    }
}


function main() {
    context.drawImage(backgroundImage, 0, 0)
    rawMaze(MAZE.maze);
    requestAnimationFrame(main);
}

function startGame() {
    main();
}


