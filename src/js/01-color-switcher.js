
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body')

let timerId = null;

startBtnEl.addEventListener('click', onStartBtn)

function onStartBtn() {
  
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtnEl.addEventListener('click', () => {
  clearInterval(timerId)
})
