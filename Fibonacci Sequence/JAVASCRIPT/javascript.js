
function fibonacciForLoop() {
    let numOne = 0;
    let numTwo = 1;
    let numThree = 0;
    for (; numThree < 800; numThree = numOne + numTwo) {
        numOne = numTwo;
        numTwo = numThree;
        let myDiv = document.createElement('div');
        document.body.appendChild(myDiv);
        myDiv.innerHTML = numThree;
    }
}


function fibonacciWhileLoop() {
    let numberOne = 0;
    let numberTwo = 1;
    let numberThree = 0;
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
    myDiv.innerHTML = numberOne;
    let myDiv2 = document.createElement('div');
    document.body.appendChild(myDiv2);
    myDiv2.innerHTML = numberTwo;
    while (numberThree < 500) {
        numberThree = numberOne + numberTwo;
        numberOne = numberTwo;
        numberTwo = numberThree;
        let myDiv = document.createElement('div');
        document.body.appendChild(myDiv);
        myDiv.innerHTML = numberThree;
    }
}


function fibonacciDoWhile() {
    let number1 = 0;
    let number2 = 1;
    let number3 = 0;
    let myWhileDiv = document.createElement("div");
    document.body.appendChild(myWhileDiv);
    myWhileDiv.innerHTML = number1;
    let myWhileDiv2 = document.createElement("div");
    document.body.appendChild(myWhileDiv2);
    myWhileDiv2.innerHTML = number2;
    do {
        number3 = number1 + number2;
        number1 = number2;
        number2 = number3;
        let myWhileDiv = document.createElement("div");
        document.body.appendChild(myWhileDiv);
        myWhileDiv.innerText = number3;
    }while(number3 < 500);
}

 fibonacciForLoop();
 fibonacciWhileLoop();
 fibonacciDoWhile();








