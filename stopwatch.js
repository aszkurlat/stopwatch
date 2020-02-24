const startBtn = document.querySelector('button.start');
const resetBtn = document.querySelector('button.reset');
const counter = document.querySelector('div.time');
let time = 0;
let active = false;
let idInterval;


const startTimer = () => {
    if (!active) {
        active = !active;
        startBtn.textContent = "STOP";
        startBtn.style.backgroundColor = "#b73131";
        idInterval = setInterval(startTime, 10);


    } else if (active) {
        active = !active;
        startBtn.textContent = "START";
        startBtn.style.backgroundColor = "#d43c3c";
        clearInterval(idInterval);
    }
}
const resetTime = () => {
    active = !active;
    clearInterval(idInterval);
    time = 0;
    counter.textContent = "00:00";
    resetBtn.style.backgroundColor = "#b73131";
}
const startTime = () => {
    time++;
    counter.textContent = (time / 100).toFixed(2) < 10 ? "0" + (time / 100).toFixed(2) : (time / 100).toFixed(2);
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTime);