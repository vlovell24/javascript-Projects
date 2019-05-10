

const buttonA = document.querySelector("#button-A");
const buttonB = document.querySelector("#button-B");
const buttonC = document.querySelector("#button-C");
const buttonD = document.querySelector("#button-D");
const buttonReset = document.querySelector("#button-reset");
const output = document.querySelector(".output");
const cost = document.querySelector("input");
//console.log(buttonA);


buttonA.addEventListener("click", function() {
    let finalValue = cost.value * .15;
    output.innerHTML = `The correct tip is ${finalValue.toFixed(2)} on ${cost.value}.`
});


buttonB.addEventListener("click", function() {
    let finalValueB = cost.value * .20;
    output.innerHTML = ` The correct tip is ${finalValueB.toFixed(2)} on ${cost.value}.`
});

buttonC.addEventListener("click", function() {
    let finalValueC = cost.value * .25;
    output.innerHTML = ` The correct tip is ${finalValueC.toFixed(2)} on ${cost.value}.`
});

buttonD.addEventListener("click", function() {
    let finalValueD = cost.value * .10;
    output.innerHTML = ` The correct tip is ${finalValueD.toFixed(2)} on ${cost.value}.`
});

buttonReset.addEventListener("click", function() {

    output.innerText = 'WELCOME TO THE TIP CALCULATOR';
    cost.value = "100";
});

