function Level({
    maze,
    start,
    end,
    enemySpawn,
    enemyTurns,
    enemyCheckpoint,
    timeLimit
}) {
    if (maze.length != CONFIG.maze.row || (maze[0] && maze[0].length != CONFIG.maze.column)) {
        throw new Error("Invalid Maze");
    }
    this.maze = maze;
    this.start = start;
    this.end = end;
    this.enemySpawn = enemySpawn;
    this.enemyTurns = enemyTurns;
    this.enemyCheckpoint = enemyCheckpoint;
    this.timeLimit = timeLimit;
}
