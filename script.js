const wheel = document.getElementById('rouletteWheel');
const result = document.getElementById('result');
const spinBtn = document.getElementById('spinBtn');

const numbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23,
  10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
];

let currentRotation = 0;

const getRandomNumber = () => {
  const index = Math.floor(Math.random() * numbers.length);
  return { index, value: numbers[index] };
};

spinBtn.addEventListener('click', () => {
  const { index, value } = getRandomNumber();
  const sliceAngle = 360 / numbers.length;
  const pointerOffset = 360 - (index * sliceAngle + sliceAngle / 2);
  const spinTurns = 6;
  const targetRotation = currentRotation + spinTurns * 360 + pointerOffset;

  wheel.style.transform = `rotate(${targetRotation}deg)`;
  currentRotation = targetRotation;
  result.textContent = `Číslo ${value}!`;
});
