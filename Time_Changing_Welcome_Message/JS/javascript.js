

const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener("click", showOutput);



function showOutput() {
    const date = new Date();
    const shortDate = new Date().toDateString();
    let current = date.getHours();


    if(current >= 17) {
        output.innerText = `The date is ${shortDate} and it's evening.`
    }else if (current >= 12) {
        output.innerText = `The date is ${shortDate} and it's afternoon.`
    }else if (current >= 0) {
        output.innerText = `The date is ${shortDate}, and it's morning.`
    }else {
        message = "Something is wrong.";
    }


}