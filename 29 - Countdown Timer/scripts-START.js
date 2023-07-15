let countdown; 
const timeDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
let buttons = document.querySelectorAll(".timer__button");

function timer(seconds){
    //
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(()=>{
        let secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        //display
        displayTimeLeft(secondsLeft);
    },1000);
}

function displayTimeLeft(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60; 
    if(minutes.toString().length <= 1){
        minutes = ("0"+minutes) 
    }
    if(secs.toString().length <= 1){
        secs = ("0"+secs.toString()) 
    }
    const display = `${minutes}:${secs}`;
    document.title = display
    timeDisplay.innerHTML = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes= end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? "0":""}${minutes}`;
    
}

buttons.forEach(button => button.addEventListener("click", ()=> {
    timer(button.dataset.time);
}))
document.customForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const mins = this.minutes.value * 60;
    console.log(mins);
    timer(mins);
})