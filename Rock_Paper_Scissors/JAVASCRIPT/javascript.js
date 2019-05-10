
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner = [0, 0];

//adds an event listener on each of the three buttons in the array (rock, paper and scissor buttons)
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

//this function is called when a button is clicked. The inner text of the button is looked at, and compared to the
//computer selection (which is decided via math.random rounded down) Each number of the Math function, corresponds
// to a string of "rock", "paper", or "scissors".
function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerSelection = "Rock";
    }else if (computerSelection === 1) {
        computerSelection = "Paper";
    }else {
        computerSelection = "Scissors";
    }

//this section adds the string "wins" onto the result of Player or Computer winning. It then adds one point to the
//score array from above; with the player located at array index zero, and the computer located at array index 1.
//If the player and computer choose the same item, the message will display "results in a tie match", and no
//score is added to the score array. The checkwinner function is called to determine a winner.
    let result = checkWinner(playerSelection, computerSelection);
    if (result === "Player") {
        result += " wins!";
        winner[0]++;
    }else if (result === "Computer") {
        result += " wins!";
        winner[1]++;
    }else {
        result += " results in a tie match";
    }

//This is a string literal, that displays which player is in the lead, at the top of the screen. Below it, is
//a messager function that displays the player and computer choices, and who is the winner.
    score.innerHTML = `Player: ${winner[0]}   Computer: ${winner[1]}`;
    messager(`${playerSelection} vs ${computerSelection} <br> <b> ${result} </b>`)
}

//the messager function that is called in the playgame function; this simply changes the message portion of
//the HTML. I didn't use innerText because I am changing actual tags and not just text.
function messager(mes) {
    message.innerHTML = mes;

}


//the function that is called in the playgame function (line 30). This determines the winner of the game, by comparing
//the strings of player and computer. The result of this function, is converted to the variable "result" in the
//playgame function.
function checkWinner(player, computer) {
    if(player === computer) {
        return "Draw";
    }
    if (player === "Rock") {
        if (computer === "Paper") {
            return "Computer";
        }else {
            return "Player";
        }
    }
    if(player === "Paper") {
        if (computer === "Scissors") {
            return "Computer";
        }else {
            return "Player";
        }
    }
    if (player === "Scissors") {
        if (computer === "Rock") {
            return "Computer";
        }else {
            return "Player";
        }
    }
    
}


