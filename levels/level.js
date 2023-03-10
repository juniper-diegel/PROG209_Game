function Level({
    maze,
    start,
    end
}) {
    if (maze.length != CONFIG.maze.row || (maze[0] && maze[0].length != CONFIG.maze.column)) {
        throw new Error("Invalid Maze");
    }
    this.maze = maze;
    this.start = start;
    this.end = end;
}
