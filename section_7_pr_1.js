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

let randomNumber = Math.floor(Math.random() * 22) + 1;

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
  } else if (newNumber > randomNumber) {
    messageDOM.textContent = 'Number is to big...';
  } else if (newNumber < randomNumber) {
    messageDOM.textContent = 'Number is to small...';
  } else {
    messageDOM.textContent = 'Guess again!';
  }
});
