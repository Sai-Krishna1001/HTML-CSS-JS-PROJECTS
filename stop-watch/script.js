let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const startStop = () => {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("startStop").classList.remove("stop-button");
    document.getElementById("startStop").classList.add("start-button");
  } else {
    timer = setInterval(updateTime, 10);
    document.getElementById("startStop").textContent = "Stop";
    document.getElementById("startStop").classList.remove("start-button");
    document.getElementById("startStop").classList.add("stop-button");
  }
  isRunning = !isRunning;
};

const reset = () => {
  clearInterval(timer);
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("startStop").classList.remove("stop-button");
  document.getElementById("startStop").classList.add("start-button");
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliseconds = 0;
  document.getElementById("display").textContent = "00:00:00";
};

const updateTime = () => {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("display").textContent = time;
};

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
