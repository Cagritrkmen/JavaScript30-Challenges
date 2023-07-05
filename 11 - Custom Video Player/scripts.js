// get our elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//build out functions

function togglePlay() {
    if(video.paused){
        video.play();
        toggle.textContent ='❚  ❚'
    }
    else {
        video.pause();
        toggle.textContent ='►'

    }
}


function back() {
    video.currentTime = video.currentTime - 10;
}
function forward() {
    video.currentTime = video.currentTime + 25;
}

function bar() {
    let barpercent = (video.currentTime /video.duration)*100;
    progressBar.style.flexBasis = barpercent + "%"
}
function volume(){
    video.volume=ranges[0].value;
}
function videorate(){
    video.playbackRate=ranges[1].value;
    console.log(video.playbackRate);
}
function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } 
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//hook up the event listeners 
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
skipButtons[0].addEventListener("click" , back);
skipButtons[1].addEventListener("click" , forward);
ranges[0].addEventListener("mousemove",volume);
ranges[1].addEventListener("mousemove",videorate);
addEventListener("keyup",event => {
    if(event.key=" "){
        togglePlay() ;
    }
})

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


setInterval(bar,10);



