//all div's with a class of horn are stored into a variable "horns"
const horns = document.querySelectorAll(".horn");

//an event listener is added to all of the "horns" variables (on click); once clicked,
//an anon function is called that first turns all of the inner HTML of "horns" to
//lowercase. Then, the functions makeSound() and addStyle() are called on "littleHorn"
for (let i = 0; i < horns.length; i++) {
    horns[i].addEventListener("click", function() {
        let horn = this.innerHTML;
        let littleHorn = horn.toLowerCase();
        makeSound(littleHorn);
        addStyle(littleHorn);
    })
}

//the addStyle() function adds the '.' before the name param, so that the proper horn
//can be selected, and have it's css style modified on click. The setTimeout() function
//turns .active on for 200ms; creating a pseudo style 'button'.
function addStyle(name) {
    let activeElement = document.querySelector("." +name);
    activeElement.classList.add("active");
    setTimeout(function() {
        activeElement.classList.remove("active");
    }, 200)
}

//The function makeSound() plays the proper audio clip depending on which 'button' was
//clicked. I included an mp3, wav, and flac audio file.
function makeSound(name) {
    switch(name) {
        case "clown":
            let sound1 = new Audio("SOUND/Clown_Horn_A.mp3");
            sound1.play();
            break;
        case "bike":
            let sound2 = new Audio("SOUND/Honk_2.wav");
            sound2.play();
            break;
        case "car":
            let sound3 = new Audio("SOUND/Honk_3.flac");
            sound3.play();
            break;
    }
}