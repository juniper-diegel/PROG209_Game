function ImageAsset(src) {
    this.img = new Image();
    this.img.src = src;
    this.loaded = false;
    this.img.addEventListener("load", function() {
        this.loaded = true;
    })
}


ImageAsset.prototype.isLoaded = function() {
    return this.loaded;
}

ImageAsset.prototype.getElement = function() {
    return this.img;
}

ImageAsset.prototype.setLoaded = function(val) {
    this.loaded = val;
}
