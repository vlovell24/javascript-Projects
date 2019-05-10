
const output = document.querySelector(".output");
const buttonA =  document.querySelector("#buttonA");
const buttonB = document.querySelector("#buttonB");
const input = document.querySelector("input");



buttonA.addEventListener("click", showMessage);
buttonB.addEventListener("click", reset);

function showMessage() {
    if(isNaN(input.value)) {
        output.innerHTML = `Hello, ${input.value}`;
    }else {
        output.innerHTML = "Must enter only letters";

    }
};