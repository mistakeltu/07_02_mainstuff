console.clear();

//Selecting elements
const diceDOM = document.querySelector('.dice');
const score0DOM = document.querySelector('#score--0');
const score1DOM = document.querySelector('#score--1');
//Buttons
const newGameBtnDOM = document.querySelector('.btn--new');
const rollDiceDOM = document.querySelector('.btn--roll');
const holdBtnDOM = document.querySelector('.btn--hold');
//Current scores
const current0DOM = document.querySelector('#current--0');
const current1DOM = document.querySelector('#current--1');
//Players
const player0DOM = document.querySelector('.player--0');
const player1DOM = document.querySelector('.player--1');
//Bigger scores
const bigScore0DOM = document.querySelector('#score--0');
const bigScore1DOM = document.querySelector('#score--1');
//Player names
const playerName0DOM = document.querySelector('#name--0');
const playerName1DOM = document.querySelector('#name--1');

//Starting conditions

let scores, currentScore, activePlayer, playingGame;

const reset = _ => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playingGame = true;

  playingGame = true;
  score0DOM.textContent = 0;
  score1DOM.textContent = 0;
  current0DOM.textContent = 0;
  current1DOM.textContent = 0;

  diceDOM.classList.add('hidden');
  player0DOM.classList.remove('player--winner');
  player1DOM.classList.remove('player--winner');
  player0DOM.classList.add('player--active');
  player1DOM.classList.remove('player--active');
  playerName0DOM.textContent = `Player 1`;
  playerName1DOM.textContent = `Player 2`;
};

reset();

const switchPlayer = _ => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0DOM.classList.toggle('player--active');
  player1DOM.classList.toggle('player--active');
};

rollDiceDOM.addEventListener('click', function () {
  if (playingGame) {
    const randomDice = Math.floor(Math.random() * 5) + 1;

    diceDOM.classList.remove('hidden');

    diceDOM.src = `./dice-img/dice-${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore += randomDice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtnDOM.addEventListener('click', function () {
  if (playingGame) {
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playingGame = false;
      diceDOM.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.querySelector(`#name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } wins!`;
    } else {
      switchPlayer();
    }
  }
});

newGameBtnDOM.addEventListener('click', reset);
