var squares = document.querySelectorAll(".square");
var colors = [];
var correctColor;
var pickedColor;
var newColorsBtn = document.getElementById("newColorsBtn");

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
}

newColorsBtn.addEventListener("click", updateColors);

function updateColors() {
    for(var i = 0; i < squares.length; i++) {
        colors[i] = random_rgb();
        squares[i].style.backgroundColor = colors[i];
    }
    correctColor = colors[Math.floor(Math.random() * 6)];
    updateRgbTitle(correctColor);
}

function updateRgbTitle(correctColor) {
    document.getElementById("correctColor").textContent = String(correctColor);
}

for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        
        pickedColor = this.style.backgroundColor;

        if(String(pickedColor) == String(correctColor)){
            winnerFound(pickedColor);
        }
    })
}

function winnerFound(pickedColor) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
};