function playBackgroundMusic() {
    document.getElementById("audio").play();
}
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("start-screen").addEventListener("click", function() {
        document.getElementById("start-screen").style = "display:none";
        playBackgroundMusic();
        startGame();
    });
});
