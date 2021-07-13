const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let indexInt = null;
let currentColor = 0;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function onStartBtnClick() {
  setBgColorOnBody();
  indexInt = setInterval(setBgColorOnBody, 1000);
  startBtn.disabled = true;
}

function onStopBtnClick() {
  document.body.style.backgroundColor = '';
  clearInterval(indexInt);
  startBtn.disabled = false;
  currentColor = 0;
}

function setBgColorOnBody() {
  let randomColorIndex = 0;
  do {
    randomColorIndex = randomIntegerFromInterval(0, colors.length);
  } while (randomColorIndex === currentColor);
  currentColor = randomColorIndex;
  document.body.style.backgroundColor = colors[randomColorIndex];
}
