const button = document.querySelector("button");
const gameArea = document.querySelector("#comboBox");
let message = document.querySelector("#messageBox");
let gamePlay = false;
let score = 0;
//adds an event listener of click, that runs an anon function.
button.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true;
        score = 0;
        gameArea.innerHTML = "";
        button.innerHTML = "CHECK COMBO";
        maker();
        message.innerHTML = "Guess the Combo";
    }else {
        score ++;
        message.innerHTML = "Guesses: " + score;
        const numbers = document.querySelectorAll(".numberButton");
        let winCondition = 0;

        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++;
            }else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue": "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";
            }
            if (winCondition == numbers.length) {
                gameEND();
            }
        }
    }
});
//ends the game. Resets the values of the message, score, button, and gameplay bool.
function gameEND () {
    message.innerHTML = `You solved the combo in ${score} guesses.`;
    score = 0;
    gamePlay = false;
    button.innerHTML = "RESTART GAME";
}
//sets the random number variable for the combo, adds the element to
// the HTML, and then sets the innerHTML to all zero's
//to hide it from the player.
function maker() {
    for (let x = 0; x < 6; x++) {
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = "9";
        el.min = "0";
        el.size = 1;
        el.classList.add("numberButton");
        el.order = x;
        el.correct = Math.floor(Math.random()*10);
        el.value = "0";
        gameArea.appendChild(el);

    }
}