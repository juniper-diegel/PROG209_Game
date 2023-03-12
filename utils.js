function playAudio(audio) {
    if (audio) {
        audio.volume = 0.3;
        audio.play();
    }
}

function stopAudio(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
