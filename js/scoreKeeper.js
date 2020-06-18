
var btn1 = document.getElementById("playerOne");
var btn2 = document.getElementById("playerTwo");
var btnReset = document.getElementById("reset");

var h1 = document.querySelector("h1");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var playingTo = document.querySelector("p");

var winScore = 5;
var scoreInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
gameover = false;

btn1.addEventListener("click", function() {
    if(!gameover) {
        p1Score++;
        p1Display.innerHTML = p1Score;

        checkForWin();
    }
});

btn2.addEventListener("click", function() {
    if(!gameover) { 
        p2Score++;
        p2Display.innerHTML = p2Score;

        checkForWin();
    }
});

btnReset.addEventListener("click", reset);

scoreInput.addEventListener("input", function() {
    winScore = scoreInput.value;
    playingTo.innerHTML = "Playing to: " + winScore;
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = p1Score;
    p2Display.innerHTML = p2Score;

    playingTo.innerHTML = "Playing to: " + winScore;

    p1Display.style.color = "black";
    p2Display.style.color = "black";
    gameover = false;
};

function checkForWin() {
    if(p1Score == winScore) {
        p1Display.style.color = "green";
        gameover = true;
    } else if (p2Score == winScore) {
        p2Display.style.color = "green";
        gameover = true;
    }
}
