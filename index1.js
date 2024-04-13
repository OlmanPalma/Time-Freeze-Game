let startTime;
let stopwatchInterval;
let running = false;

document.getElementById("startButton").addEventListener("click", startStopwatch);

document.getElementById("stopButton").addEventListener("click", stopStopwatch);

function startStopwatch() {
    if (!running) {
        startTime = Date.now();
        stopwatchInterval = setInterval(updateTimer, 1);
        running = true;
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;

    const milliseconds = Math.floor((elapsedTime % 100));
    document.getElementById("timer-display").innerHTML = formatTime(milliseconds)

}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
