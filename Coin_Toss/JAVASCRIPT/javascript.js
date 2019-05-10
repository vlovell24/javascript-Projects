
const coinArray = ["Heads", "Tails"];
let score = [0,0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);



for(let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
    let computerToss = Math.floor(Math.random() * 2);
    let playerGuess = e.target.innerText;
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "Computer Selected: " + computerGuess + "<br>";
    let output;
    if (playerGuess === computerGuess) {
        score[0]++;
        output = "Player Wins";
    }else {
        score[1]++;
        output = "Computer Wins"
    }

        message.innerHTML += output + "<br> Player: " + score[0] + " Computer: " + score[1];
}