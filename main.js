window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("start-screen").addEventListener("click", function() {
        document.getElementById("start-screen").style = "display:none";
        playAudio(document.getElementById("audio"));
        startGame();
    });

    document.getElementById("game-over-screen").addEventListener("click", function() {
        document.getElementById("game-over-screen").style = "display: none";
        playAudio(document.getElementById("audio"));
        startGame();
    });
});
