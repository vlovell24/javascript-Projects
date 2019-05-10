const messageDisplay = document.querySelector("#messageArea");
let numOne;
let numTwo;
let operator;
//The following function is for number buttons only. It determines the values of numberOne and numberTwo; based on
//the class name of the operator that is clicked after a series of number buttons. If number buttons are clicked before
//an operator is clicked, the numbers are stored as numOne. If an operator has been clicked, then the numbers will
//be stored as numTwo.
function numberKeyPressed(number) {
    if (messageDisplay.innerText === "0") {
        messageDisplay.innerHTML = "";
        messageDisplay.innerHTML += number;
    }else {
        messageDisplay.innerHTML += number;
    }
    if (document.getElementById("equals").className === "equalsSign"
        || document.getElementById("squareRoot").className === "squareRootClicked"
        || document.getElementById("powerOfTwo").className === "squareRootClicked"
        || document.getElementById("leftParen").className === "squareRootClicked"
        || document.getElementById("rightParen").className === "squareRootClicked") {
        messageDisplay.innerHTML = "";
        resetClasses();
    }
    if( document.getElementById("plus").className === "numberClicked" ||
        document.getElementById("subtract").className === "numberClicked" ||
        document.getElementById("divide").className === "numberClicked" ||
        document.getElementById("times").className === "numberClicked" ||
        document.getElementById("percent").className === "percentButtonClicked") {
        numTwo = messageDisplay.innerHTML;
    }
    else {
        numOne = messageDisplay.innerHTML;
    }
}
//the following function adds a new class whenever a number is clicked. This allows us to store two separate number
//variables. This function is only added to 'operators'.
function addClassAttribute(id) {
    document.getElementById(id).setAttribute("class", "numberClicked");
    operator = id;
    disableOperators();
    messageDisplay.innerHTML = "";
}
function clearDisplay() {
    messageDisplay.innerHTML = "0";
    numOne = "";
    numTwo = "";
    resetClasses();
}
//the following function resets the classes of certain classes that were changed in the other functions.
function resetClasses() {
    document.getElementById("plus").setAttribute("class", "littleButtonsOrange");
    document.getElementById("subtract").setAttribute("class", "littleButtonsOrange");
    document.getElementById("divide").setAttribute("class", "littleButtonsOrange");
    document.getElementById("times").setAttribute("class", "littleButtonsOrange");
    document.getElementById("equals").setAttribute("class", "littleButtonsGreen");
    document.getElementById("squareRoot").setAttribute("class", "littleButtonsBrown");
    document.getElementById("percent").setAttribute("class", "littleButtonsPurple");
    document.getElementById("powerOfTwo").setAttribute("class", "littleButtonsBrown");
    document.getElementById("leftParen").setAttribute("class", "littleButtonsBrown");
    document.getElementById("rightParen").setAttribute("class", "littleButtonsBrown");
    document.getElementById("equals").disabled = false;
    enableOperators();
}
//the following function is called when the equal sign is clicked; it does the final calculations
function finalCalculation() {
    let finalNumber;
    switch(operator) {
        case "plus":
            finalNumber = parseInt(numOne) + parseInt(numTwo);
            messageDisplay.innerHTML = finalNumber;
            break;
        case "subtract":
            finalNumber = numOne -= numTwo;
            messageDisplay.innerHTML = finalNumber;
            break;
        case "divide":
            finalNumber = numOne / numTwo;
            messageDisplay.innerHTML = finalNumber;
            break;
        case "times":
            finalNumber = numOne * numTwo;
            messageDisplay.innerHTML = finalNumber;
            break;
        case "percent":
            finalNumber = numOne * numOne / 100;
            messageDisplay.innerHTML = finalNumber;
    }
    resetClasses();
    disableOperators();
    document.getElementById("equals").setAttribute("class", "equalsSign");
}
function squareRootCalculation() {
    messageDisplay.innerHTML = Math.sqrt(numOne);
    document.getElementById("squareRoot").setAttribute("class", "squareRootClicked");
    disableOperators();
}
function percentCalculation() {
    document.getElementById("percent").setAttribute("class", "percentButtonClicked");
    messageDisplay.innerHTML = "";
    operator = "percent";
    disableOperators();
}
function powerOfTwoCalc() {
    messageDisplay.innerHTML = numOne * numOne;
    document.getElementById("powerOfTwo").setAttribute("class", "squareRootClicked");
    document.getElementById("equals").disabled = true;
    disableOperators();
}
function powerOfThreeCalc() {
    messageDisplay.innerHTML = numOne * numOne * numOne;
    document.getElementById("leftParen").setAttribute("class", "squareRootClicked");
    document.getElementById("equals").disabled = true;
    disableOperators();
}
function piCalculation () {
    messageDisplay.innerHTML = numOne * Math.PI;
    document.getElementById("rightParen").setAttribute("class", "squareRootClicked");
    document.getElementById("equals").disabled = true;
    disableOperators();
}

//the following functions disable/enable certain buttons to keep the user from entering error causing combo's. For
//example; clicking on PI will disable the other operator buttons.
function disableOperators() {
    document.getElementById("leftParen").disabled = true;
    document.getElementById("powerOfTwo").disabled = true;
    document.getElementById("rightParen").disabled = true;
    document.getElementById("squareRoot").disabled = true;
    document.getElementById("times").disabled = true;
    document.getElementById("divide").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("percent").disabled = true;
}
function enableOperators() {
    document.getElementById("times").disabled = false;
    document.getElementById("divide").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("subtract").disabled = false;
    document.getElementById("leftParen").disabled = false;
    document.getElementById("powerOfTwo").disabled = false;
    document.getElementById("rightParen").disabled = false;
    document.getElementById("squareRoot").disabled = false;
    document.getElementById("percent").disabled = false;
}
