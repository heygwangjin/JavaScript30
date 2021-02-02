const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function changeColor() {
  secondsHand.style.background = 'red';
}

function changeSize() {
  hoursHand.style.height = '8px';
}

function alarmSound() {
  const audio = document.querySelector('audio');
  audio.src = 'alarm.wav';
  audio.play();
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  if (mins == 00 && seconds == 00) alarmSound(); // alarm sounds every hour

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); // 특정시간 마다 메서드를 호출하는 메서드
setDate();
changeColor();
changeSize();
