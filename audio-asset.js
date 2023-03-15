function AudioAsset(src) {
    this.audio = new Audio();
    this.audio.src = src;
    this.loaded = false;
    this.audio.onload = () => {
        this.loaded = true;
    }
}

AudioAsset.prototype.isLoaded = function() {
    return this.loaded;
}

AudioAsset.prototype.getElement = function() {
    return this.audio;
}

AudioAsset.prototype.play = function(volume = 0.3) {
    playAudio(this.audio, 0.3);
}

AudioAsset.prototype.stop = function(volume = 0.3) {
    stopAudio(this.audio);
}
