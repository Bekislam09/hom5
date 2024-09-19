const display = document.getElementById('display');

function updateTime() {
    const elapsedTime = Date.now() - startTime;
    display.innerHTML = new Date(elapsedTime).toISOString().slice(11, 23);
}

document.getElementById('startBtn').onclick = () => {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
};

document.getElementById('stopBtn').onclick = () => clearInterval(timerInterval);

document.getElementById('resetBtn').onclick = () => {
    clearInterval(timerInterval);
    display.innerHTML = "00:00:00.000";
};