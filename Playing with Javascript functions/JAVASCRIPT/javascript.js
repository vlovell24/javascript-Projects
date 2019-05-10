
let myBlock;
let sound1 = new Audio("SOUNDS/Beep_A.wav");
let sound2 = new Audio("SOUNDS/Beep_B.flac");
let sound3 = new Audio("SOUNDS/Beep_C.wav");
let sound4 = new Audio("SOUNDS/Beep_D.wav");

document.addEventListener("DOMContentLoaded", function(){
    document.body.style.backgroundColor = "black";
    myBlock = document.createElement("div");
    myBlock.style.fontFamily = "Permanent Marker";
    myBlock.style.fontSize = "25px";
    myBlock.style.borderRadius = "50%";
    myBlock.style.width = "110px";
    myBlock.style.height = "110px";
    myBlock.style.backgroundColor = "red";
    myBlock.style.color = "white";
    myBlock.style.lineHeight = "45px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute";
    myBlock.style.top = "100px";
    myBlock.style.left = "150px";
    document.body.appendChild(myBlock);
});

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    let keyC = e.key;
    if (keyC === "ArrowLeft") {
        goLeft();
        myBlock.style.backgroundColor = randomColor();
        sound1.play();
    }else if (keyC === "ArrowRight") {
        goRight();
        myBlock.style.backgroundColor = randomColor();
        sound2.play();
    }else if (keyC === "ArrowUp") {
        goUp();
        myBlock.style.backgroundColor = randomColor();
        sound3.play();
    }else if (keyC === "ArrowDown") {
        goDown();
        myBlock.style.backgroundColor = randomColor();
        sound4.play();
    }else if (keyC === "c") {
        myBlock.style.backgroundColor = randomColor();
    }
});

function randomColor() {
    return "#" + Math.random().toString(16).substr(-6);
}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
}

function goUp() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
}

function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
}










