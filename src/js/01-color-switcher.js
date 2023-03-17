
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body')

let timerId = null;
stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', onStartBtn)
stopBtnEl.addEventListener('click', onStopBtn)

function onStartBtn() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000)
}

function onStopBtn() {
  clearInterval(timerId)
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



