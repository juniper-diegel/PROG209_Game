function playAudio(audio, volume = 0.3) {
    if (audio) {
        audio.volume = volume;
        audio.play();
    }
}

function stopAudio(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
