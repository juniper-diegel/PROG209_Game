function Renderer() {

}

Renderer.prototype.renderBackground = function(context, backgroundAsset, { x, y }) {
    context.drawImage(backgroundAsset, x, y);
}

Renderer.prototype.renderMaze = function(context, { treeImage, roadImage }, maze) {

    function __internal__renderNature(image, { i, j }) {
        context.drawImage(image,
            CONFIG.asset.width * j + CONFIG.asset.marginLeft,
            CONFIG.asset.height * i + CONFIG.asset.marginTop,
            CONFIG.asset.width, CONFIG.asset.height);
    }

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            switch (maze[i][j]) {
                case 1:
                    __internal__renderNature(treeImage, { i, j });
                    break;
                case 0:
                    __internal__renderNature(roadImage, { i, j });
                    break;
            }
        }
    }
}

Renderer.prototype.renderPlayer = function(context, playerAsset, { x, y }) {

}

Renderer.prototype.render = function(context, assets, levelMaze) {

    function __internal__renderBackground(renderer) {
        const background = assets["background"];
        if (!background) {
            return;
        }
        if (background.isLoaded()) {
            renderer.renderBackground(context, background.getElement(), { x: 0, y: 0 });
        } else {
            background.setLoaded(true);
        }
    }

    function __internal__renderMaze(renderer, level) {
        const treeImage = assets["tree"];
        const roadImage = assets["road"];

        if (!treeImage || !roadImage) {
            return;
        }
        if (treeImage.isLoaded() && roadImage.isLoaded()) {
            const treeImage = assets["tree"].getElement();
            const roadImage = assets["road"].getElement();
            renderer.renderMaze(context, { treeImage, roadImage }, level.maze);
        } else if (!treeImage.isLoaded()) {
            treeImage.setLoaded(true);
        } else if (!roadImage.isLoaded()) {
            roadImage.setLoaded(true);
        }
    }

    function __internal__renderPlayer(renderer, level) {

        // some check

        // call render function
        // renderer.renderPlayer(context, playerAsset, level.start);
    }

    __internal__renderBackground(this);
    __internal__renderMaze(this, levelMaze);
    // __internal__renderPlayer(this, levelMaze);
}
