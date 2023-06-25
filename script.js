'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number🚫');

    // When correct number is guessed
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!!🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess is to high!📈'
          : 'Your guess is to low!📉'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      score--;
      displayMessage('You lose!😣');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
