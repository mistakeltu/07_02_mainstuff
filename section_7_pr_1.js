console.clear();
('use strict');

// const message = document.querySelector('.message');

// message.textContent = 'karolis';

// console.log((document.querySelector('.message').textContent = 'karolis1'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 7;
// document.querySelector('.number').textContent = 10;

// document.querySelector('.guess').value = 10;

// console.log(document.querySelector('.guess').value);

const checkBtnDOM = document.querySelector('.check');
const valueDOM = document.querySelector('.guess');
const numberDOM = document.querySelector('.number');
const messageDOM = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const bodyDOM = document.querySelector('body');
const againBtnDOM = document.querySelector('.again');
const highscoreDOM = document.querySelector('.highscore');

let randomNumber = Math.floor(Math.random() * 22) + 1;
let score = 20;
let newHighScore = 0;

checkBtnDOM.addEventListener('click', function () {
  const newNumber = Number(valueDOM.value);
  //numberDOM.textContent = randomNumber;
  //console.log(typeof newNumber);

  console.log(randomNumber);
  if (!newNumber) {
    messageDOM.textContent = 'Need a number';
  } else if (newNumber === randomNumber) {
    messageDOM.textContent = `Correct number was: ${randomNumber}`;
    numberDOM.textContent = newNumber;
    bodyDOM.style.backgroundColor = 'green';
    numberDOM.style.width = '30rem';
    if (score > newHighScore) {
      newHighScore = score;
      highscoreDOM.textContent = newHighScore;
    }
  } else if (newNumber > randomNumber) {
    if (score > 1) {
      messageDOM.textContent = 'Number is to big...';
      score--;
      scoreDOM.textContent = score;
    } else {
      messageDOM.textContent = 'You lost the game!';
      scoreDOM.textContent = 0;
    }
  } else if (newNumber < randomNumber) {
    if (score > 1) {
      messageDOM.textContent = 'Number is to small...';
      score--;
      scoreDOM.textContent = score;
    } else {
      messageDOM.textContent = 'You lost the game';
      scoreDOM.textContent = 0;
    }
  } else {
    messageDOM.textContent = 'Guess again!';
  }
});

againBtnDOM.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 22) + 1;
  score = 20;
  scoreDOM.textContent = 20;
  valueDOM.value = '';
  bodyDOM.style.backgroundColor = '';
  numberDOM.style.width = '15rem';
  numberDOM.textContent = '?';
  messageDOM.textContent = 'Start guessing...';
});
