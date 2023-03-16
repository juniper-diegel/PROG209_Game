function getLatestLevelByUser(
    username,
    winCount
) {
    if (winCount == 0) return MAZE_LEVEL_1;
    else if (winCount == 1) return MAZE_LEVEL_2;
    else if (winCount == 2) return MAZE_LEVEL_3;
    else throw "ERROR: Level not synced with maze completion!";
}

