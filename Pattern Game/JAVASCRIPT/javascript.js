const message = document.querySelector(".message");
const gamearea = document.querySelector(".gameArea");
const button = document.querySelector("button");
const gameColors = ["red", "blue", "green", "yellow"];

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;
//adds an event listener to the button (on click)
button.addEventListener("click", function() {
    if (!inPlay) {
        player();
    }
});
//disables the button, changes the message, and sets both arrays to empty. Then runs the
//runSequence function.
function player() {
    button.disabled = true;
    button.style.display = "none";
    messager("Match Pattern");
    gameClicks = [];
    userClicks = [];
    runSequence(playNum);
}
//pushes a random color into the empty gameClicks array. That random color is displayed to the player via a
//timeout function that sets the opacity from .5 to 1; for half a second. Another timeout is used to create
//a tenth of a second delay between the colors being shown. The 'computer' will randomly choose numbers based on
//the value of playNum. Once playNum reaches zero, the turn will shift to the player.
function runSequence(num) {
    let squares = document.querySelectorAll(".box");
    num--;
    if (num < 0) {
        inPlay = true;
        return;
    }
    let randomNum = Math.floor(Math.random() * gameColors.length);
    gameClicks.push(gameColors[randomNum]);
    squares[randomNum].style.opacity = "1";
    setTimeout(function() {
        squares[randomNum].style.opacity = "0.5";
        setTimeout(function () {
            runSequence(num);
        }, 100)
    }, 500);
}
//adds an event listener on page load, that runs the setup function
window.addEventListener("load", setup);
//sets up the game board via javascript. Adds the four colored boxes, and assigns an event listener
//on click, to all four of the boxes. Once a box is clicked on, the checkAnswer function is called.
function setup () {
    for (let x = 0; x < gameColors.length; x++) {
        let div = eleFactory("div");
        div.style.backgroundColor = gameColors[x];
        div.classList.add("box");
        div.style.opacity = "0.5";
        div.myColor = gameColors[x];
        div.addEventListener("click", checkAnswer);
        gamearea.appendChild(div);
    }
}
//stores the player clicks (on each colored box) into an array called userClicks. Sets the opacity to 1, when the
//player clicks on a square, for a half of a second. Continues to allow the player to click on squares, until
//playerClicks length is equal to gameClicks length. Once they are equal, inPlay is changed to false, and the
//endGame function is ran.
function checkAnswer(e) {
    if (inPlay) {
        let el = e.target;
        userClicks.push(el.myColor);
        el.style.opacity = "1";
        setTimeout(function() {
            el.style.opacity = "0.5";
        }, 500);
        if (userClicks.length == gameClicks.length) {
            inPlay = false;
            endGame();
        }
    }
}
//creates an updated message area in the html. Easier to call a function than to change this every time the
//message needs to be updated.
function messager(mes) {
    message.innerHTML = mes;
}
//compares the string values of the userClicks array to the gameClicks array. If they are equal, playNum is increased
//by one (allowing the rounds to get progressively harder), and updates the message to 'correct'. If the player and
//game arrays are not equal, the message is changed to 'not correct' and playNum is not updated by one. This allows
//the player to try the round again.
function endGame() {
    button.disabled = false;
    button.style.display = "block";
    if (userClicks.toString() == gameClicks.toString()) {
        playNum++;
        messager("Correct");

    } else {
        messager("Not Correct");
    }
}
//a function that creates a html element. Called by the setup function to create the four colored boxes; but
//can be used to create any type of html element that you would like.
function eleFactory(elType) {
    let ele = document.createElement(elType);
    return ele;
}