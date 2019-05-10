let game = {"min": 1, "max": 10};

document.addEventListener("DOMContentLoaded", function () {
    game.output = document.querySelector(".output");
    game.message = document.querySelector(".message");
    game.guessInput = document.querySelector("input");
    game.btn = document.querySelector("button");
    game.btn.addEventListener("click", guessValue);
    init();
});

function guessValue() {
    if (game.btn.classList.contains("replay")) {
        init();
        game.btn.innerHTML = "Guess";
        game.guessInput.style.display = "block";
        game.btn.classList.remove("replay");
    }else {
        game.guesses++;
        let tempGuess = game.guessInput.value;
        tempGuess = parseInt(tempGuess);
        if (isNaN(tempGuess)) {
            message("Please enter only Digits", "red");
        } else if (tempGuess === game.num) {
            message(`Correct, you guessed the number ${game.num} in ${game.guesses} tries.`, "green");
            gameOver();
        } else {
            let holder = tempGuess > game.num ? {color: "blue", message: "Is Lower"} : {
                color: "purple",
                message: "Is Higher"
            };
            message(holder.message, holder.color);
            game.guessInput.value = " ";
        }
        console.log(game.num);
    }
}

function gameOver() {
    game.btn.innerHTML = "Restart Game";
    game.guessInput.style.display = "none";
    game.btn.classList.add("replay");
}

function init() {
    game.guessInput.value = ' ';
    game.guesses = 0;
    game.num = ranNumber(game.min, game.max);
    let tempMes = `Welcome to the game. Guess a number from ${game.min} to ${game.max}.`;
    message(tempMes, "blue");
}

function ranNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function message(mes, clr) {
    game.message.innerHTML = mes;
    game.message.style.color = clr || "black";
    game.guessInput.style.borderColor = clr || "black";
    game.btn.style.backgroundColor = clr || "black";
    game.btn.style.color = "white";
}




