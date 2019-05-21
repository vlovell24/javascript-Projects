const endDate = document.querySelector("input");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;
//sets the value to the local storage, so that the timer doesn't reset if you leave the page.
const savedValue = localStorage.getItem("countdown") || false;
if (savedValue) {
    startClock(savedValue);
    let inputValue = new Date(savedValue);
    endDate.valueAsDate = inputValue;
}

//adds the event listener to the date input (this listener detects if the date has been changed).
//makes sure the timestop is set to true, sets the countdown to the local storage, clears any previous
//countdowns, prevents default actions, sets the new date clicked as the temp variable, and runs the startClock
//function with the parameter of temp.
endDate.addEventListener("change", function(e) {
    e.preventDefault();
    clearInterval(timeInterval);
    const temp = new Date(endDate.value);
    localStorage.setItem("countdown", temp);
    startClock(temp);
    timeStop = true;
});
//runs the function updateCounter; which calls the timeLeft function (timeLeft calculates all of the
//params (days, hours, mins, and seconds) and returns them as a new object. Timeleft() uses the temp
//variable to return the new object. If timeLeft is less than zero (or no time is left on the clock), then
//the counter stops, if not, then the matching html tag is updated with the correct time (tl[pro]).
function startClock(d) {
    function updateCounter() {
        let tl = (timeLeft(d));
        if (tl.total <= 0) {
            timeStop = false;
        }
        for (let pro in tl) {
            let el = document.querySelector("." + pro);
            if (el) {
                el.innerHTML = tl[pro];
            }
        }
    }
    updateCounter();
    if (timeStop) {
        timeInterval = setInterval(updateCounter, 1000);
    }else {
        clearInterval(timeInterval);
    }
}

//this function is called by startClock above, which passes the value of temp(d). Todays date and the date
//chosen, are parsed into milliseconds, and then current date is subtracted from chosen date. Seconds, minutes,
//hours and days are then calculated with Math.floor, and returned in a new object (back to startClock).
function timeLeft(d) {
    let currentDate = new Date();
    let t = Date.parse(d) - Date.parse(currentDate);
    let seconds = Math.floor((t/1000) % 60);
    let minutes = Math.floor((t/1000/60) % 60);
    let hours = Math.floor((t/(1000*60*60)) % 24);
    let days = Math.floor(t/(1000*60*60*24));
    return {
        "total":t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}