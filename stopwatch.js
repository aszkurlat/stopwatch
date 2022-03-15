const startBtn = document.querySelector("button.start");
const resetBtn = document.querySelector("button.reset");
const stopBtn = document.querySelector("button.stop");
const display = document.querySelector("div.display");

let [ms, secs, mins] = [0, 0, 0];
let idInterval;

const startTimer = () => {
  idInterval = setInterval(start, 10);
};

const start = () => {
  ms += 10;
  if (ms == 1000) {
    ms = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
      if (mins == 60) {
        mins = 0;
      }
    }
  }
  let min = mins < 10 ? "0" + mins : mins;
  let sec = secs < 10 ? "0" + secs : secs;
  let milisec = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
  display.innerHTML = `${min}:${sec}:${milisec}`;
};

const stopTimer = () => {
  clearInterval(idInterval);
  idInterval = null;
};

const resetTimer = () => {
  stopTimer();
  [ms, secs, mins] = [0, 0, 0];
  display.innerHTML = "00:00:000";
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
