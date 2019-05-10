
//These are all the variables that are tying together the html id's, as well as an empty score array
//that will be used to store the player and computer scores.
const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector("#output");
const score = [0,0];
const message = document.querySelector("#score");

//When the roll button is clicked, and anonymous function is called that then calls the roll function below it.
//The roll function uses Math.random and Math.ceiling to roll a random number between 1 and 6. Ceiling is used
//rather than floor, because dice start at one, and not zero. Once the numbers are returned from roll() (as the
// roll variable is an array of two values), they are compared with one another, an output is returned
//and the score is increased by one.
button.addEventListener("click", function() {
    let rolls = [roll(6), roll(6)];
    let temp;
    if (rolls[0] === rolls[1]) {
        temp = "It was a draw";
    }else if (rolls[0] > rolls[1]) {
        score[0]++;
        temp = "Player wins";
    }else {
        score[1]++;
        temp = "Computer wins";
    }
    output.innerText = temp;
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];
    message.innerHTML = `Player: ${score[0]} Computer: ${score[1]}`;
});


//This function is called by the anon function above. This function gets a random number between 1 and 6, and
//returns the number and the unicode symbol for the matching die.
function roll(num) {
    let rollNumber = Math.ceil(Math.random() * num);
    let number = 9855 + rollNumber;
    let char = "&#" +number+ ";";
    return `${rollNumber} ${char}`;

}