function playAudio(audio) {
    if (audio) {
        audio.play();
    }
}

function stopAudio(audio) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
