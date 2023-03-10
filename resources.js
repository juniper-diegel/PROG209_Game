function Resources() {
    function __internal__initContext() {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = (CONFIG.maze.row + 4) * CONFIG.asset.width;
        canvas.height = (CONFIG.maze.column + 1) * CONFIG.asset.height;

        document.body.appendChild(canvas);

        return context;
    }

    function __internal__initAssets() {
        const assets = {}
        assets["background"] = new ImageAsset("assets/background.jpg");
        assets["tree"] = new ImageAsset("assets/tree.png");
        assets["road"] = new ImageAsset("assets/road.png");

        return assets;
    }

    this.context = __internal__initContext();
    this.assets = __internal__initAssets();
}
