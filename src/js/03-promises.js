const formEl = document.querySelector('form');
const inputDelayEl = document.querySelector('input[name="delay"]');
const inputStepEl = document.querySelector('input[name="step"]');
const inputAmountEl = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const handleSubmitPromise = e => {
  e.preventDefault();
  const numberOfPromise = Number(inputAmountEl.value);
  let delay = Number(inputDelayEl.value);
  const stepPromise = Number(inputStepEl.value);
  formEl.reset();

  for (let i = 0; i < numberOfPromise; i++) {
    createPromise(i + 1, delay)
      .then(({ position, delay }) =>
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delay += stepPromise;
  }
};

formEl.addEventListener('submit', handleSubmitPromise);