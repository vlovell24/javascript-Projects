const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
 const myArray = ["javascript", "beans", "banana", "burrito", "guava"];
let inplay = false;
let scramble = "";
let scrambled = "";
let score = 0;
//adds an event listener to the button (on click), and runs the anon function based on the inplay variable
//declared above. If the game is not inplay, the score is set to zero, the button is changed to guess, and
//a scrambled word is created via the createWord function below. The inner HTML of "message" is then changed
//to the value of scrambled word. If the game IS in play, then the player can either guess correctly, or incorrectly.
//If correct, the message is changed, the players score is displayed, and all variables are reset. If incorrectly
//guessed, an alert box pops up with a 'try again'; and the score is updated by one.
button.addEventListener("click", function() {
    if (!inplay) {
        inplay = true;
        score = 0;
        button.innerHTML = "GUESS";
        guess.classList.toggle("hidden");
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else  {
        let tempGuess = guess.value.toLowerCase();
        score ++;
            if (tempGuess === scramble) {
                inplay = false;
                message.innerHTML = `Correct, it was ${scramble}. It took ${score} guesses.`;
                guess.value = "";
                button.innerHTML = "START";
                guess.classList.toggle("hidden");
            } else {
                alert("Guess Again");
                guess.value = "";
            }
    }
});

//This function uses Math. to create a random number to use as the index value for the stored array myArray above.
//Once a random index is grabbed, it's value is split into another array of individual letters (so we can rearrange
//them later).
function createWord() {
    let randomIndex = Math.floor(Math.random() * myArray.length);
    let tempWord = myArray[randomIndex];
    randomArray(tempWord.split(""));
    return tempWord;
}

//this function is called after createWord; and it takes the random word that was grabbed, and split into another array.
//it then rearranges those individual letters randomly using Math. This value is then returned to the anon function above
//to be used. Because literal values (i.e 1-9) are different than array values (starting at an index of zero), some
//tomfoolery and witchery has to be employed. Therefore, the array length -1 is used to grab all of the letters EXCEPT
//for the first letter (with a zero index). Then, i has one added back onto it, to grab the first letter to scramble it
// all together. Some handoffs are then done (i to j and then j to temp), and finally, the array is returned to the anon
//function in the beginning.
function randomArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


