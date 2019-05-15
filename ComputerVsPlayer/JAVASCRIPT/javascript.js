let playerTurn = document.querySelectorAll("button");
let messageArea = document.querySelector('#messageArea');

for (let i = 0; i < playerTurn.length; i++) {
    playerTurn[i].addEventListener("click", function () {
        let playerLetter = playerTurn[i].innerText;
        clickedButton(playerLetter);
    });
}
function clickedButton (playerLetter) {
    if (playerLetter === "A" ||
        playerLetter === "C" ||
        playerLetter === "E" ||
        playerLetter === "G") {
        playerClick(playerLetter);
    } else if (playerLetter === "B" ||
                playerLetter === "D" ||
                playerLetter === "F" ||
                playerLetter === "H") {
        console.log(`Player chose ${playerLetter}. Computer's turn.`);
        messageArea.innerHTML = `Player chose ${playerLetter}. Computer's turn.`;
        computerClick();
    }
}
function playerClick(playerLetter) {
    messageArea.innerHTML = `Player chose ${playerLetter}. Player choose again`;
    console.log(`Player chose ${playerLetter}. Player choose again`);
    clickedButton();
}
function computerClick() {
    let randomLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let computerChoice = Math.floor(Math.random() * randomLetter.length);
    let randomComputerLetter = randomLetter[computerChoice];
    if (randomComputerLetter === 'A' ||
        randomComputerLetter === 'C' ||
        randomComputerLetter === 'E' ||
        randomComputerLetter === 'G') {
        console.log(`Computer chose ${randomComputerLetter}. Players turn`);
        messageArea.innerHTML = `Computer chose ${randomComputerLetter}. Players turn`;
        clickedButton();
    } else if (randomComputerLetter === 'B' ||
                randomComputerLetter === 'D' ||
                randomComputerLetter === 'F' ||
                randomComputerLetter === 'H') {
        console.log(`Computer chose ${randomComputerLetter}. Computer choose again.`);
        messageArea.innerHTML = `Computer chose ${randomComputerLetter}. Computer choose again.`;
        computerClick();
    }
}


