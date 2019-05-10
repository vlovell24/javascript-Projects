
const wording = ["Santa Claus' helpers are known as subordinate Clauses.",
    "She had a photographic memory but never developed it.",
    "The two pianists had a good marriage. They always were in a chord.",
    "I was struggling to figure out how lightning works, but then it struck me.",
    "The grammarian was very logical. He had a lot of comma sense.",
    "A chicken farmer's favorite car is a coupe.",
    "What do you call a person rabid with wordplay? An energizer punny.",
    "How do construction workers party? They raise the roof.",
    "After hours of waiting for the bowling alley to open, we finally got the ball rolling.",
    "Reading while sunbathing makes you well red.",
    "No matter how much you push the envelope, it will still be stationery.",
    "What do you call a fake noodle? An Impasta.",
    "Want to hear a joke about paper? Nevermind it’s tearable.",
    "Why did the cookie cry? Because his father was a wafer so long!",
    "I used to work in a shoe recycling shop. It was sole destroying.",
    "How do you organize an outer space party? You planet.",
    "Do you know where you can get chicken broth in bulk? The stock market.",
    "My cat was just sick on the carpet, I don’t think it’s feline well.",
    "Why did the octopus beat the shark in a fight? Because it was well armed."
];

let startTime;
let endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", clicky);
playText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        clicky();
    }
});

function clicky() {

    if(button.innerText === "Start") {
        playText.disabled = false;
        playGame();
        startFocus();
    }else if (button.innerText === "Done") {
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
        playText.value = "";
    }
};

function startFocus() {
    document.getElementById("textBox").focus();

}

function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMessage = `You typed at ${speed} words per minute.`;
    finalMessage += "<br>" + compareWords(message.innerText, str);
    message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
    let response = strWords.split(" ").length;
    return response;
}

function compareWords(str1, str2) {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function(item, index) {
        if(item === words2[index]) {
            cnt++;
        }
    });
    return (`${cnt} correct out of ${words1.length} words.`);
}

function playGame() {
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    console.log(startTime);
    button.innerText = "Done";
}