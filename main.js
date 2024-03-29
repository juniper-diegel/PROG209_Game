window.addEventListener('DOMContentLoaded', (event) => {

    function runGame() {
        playAudio(document.getElementById("audio"), 0.1);
        startGame();
    }

    document.getElementById("start-screen").addEventListener("click", function() {
        document.getElementById("start-screen").style = "display: none";
        runGame();
    });

    document.getElementById("next-level-screen").addEventListener("click", function() {
        document.getElementById("next-level-screen").style = "display: none";
        runGame();
    });

    document.getElementById("game-over-screen").addEventListener("click", function() {
        document.getElementById("game-over-screen").style = "display: none";
        runGame();
    });

    document.getElementById("you-win-screen").addEventListener("click", function() {
        document.getElementById("you-win-screen").style = "display: none";
        runGame();
    });

});
