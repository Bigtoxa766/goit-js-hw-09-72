import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future')
      btnEl.disabled = true;
    } else {
      btnEl.disabled = false;
    }
    btnEl.addEventListener('click', () => {
      btnEl.disabled = true;
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = selectedDates[0]
    - currentTime;
    const timeComponents = convertMs(deltaTime)
    if (deltaTime <= 0) {
      clearInterval(intervalId)
      btnEl.disabled = false;
      return
    }
    updateConvertMs(timeComponents)
  console.log(timeComponents)
  }, 1000)
       
    })
  
  },
};

flatpickr('#datetime-picker', options)

function addLeadingZero(value) {
  return String(value).padStart(2, 0)
}

function updateConvertMs({ days, hours, minutes, seconds }){
  daysEl.textContent = `${days}`
  hoursEl.textContent = `${hours}`
  minutesEl.textContent = `${minutes}`
  secondsEl.textContent = `${seconds}`
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}