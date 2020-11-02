'use strict';

// secret number to compare against (between 1-20)
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// constants from the DOM
let guessedNumber = Number(document.querySelector('.guess').value);
// check button
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');

// secret number
let displayNumber = document.querySelector('.number').textContent;

// FUNCTIONS
// function to change the display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const enablebtn = function () {
  checkBtn.disabled = false;
  checkBtn.classList.remove('btn-disabled');
  checkBtn.classList.add('btn-enabled');
};

const disableBtn = function () {
  checkBtn.disabled = true;
  checkBtn.classList.remove('btn-enabled');
  checkBtn.classList.add('btn-disabled');
};

// init function
const init = function () {
  score = 20;
  // all items should be reset to normal
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  enablebtn();
};

// decreasing the score
const decreaseScore = function () {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // losing the game
    disableBtn();
    displayMessage('You lost!');
  }
};

// GAME LOGIC
// set game state
// when the number is entered, compare it against the secret number
// change the message (.message) textcontent to say if it's too low, too high
// if number is the same as the secret one, add a you won message and restart the game state

document.querySelector('.check').addEventListener('click', function () {
  secretNumber = secretNumber;
  // input number
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    displayMessage('🖍 No number.');
  } else if (guessedNumber === secretNumber) {
    // change the background and the message
    document.querySelector('body').style.backgroundColor = '#60b347';
    // add the correct message
    displayMessage('🎉Your number is correct.');
    // remove the border from the number
    document.querySelector('.guess').style.border =
      '6px solid rgb(124, 25, 25)';
    // display correct number
    document.querySelector('.number').textContent = secretNumber;
    // disable the check button
    disableBtn();

    // display highest score
    // calculate current score
    let current = 20 - score + 1;

    // if there is no highscore yet or if the current score is lower than the highscore
    // then the highscore becomes the current score
    if (!highscore) {
      highscore = current;
      document.querySelector('.highscore').textContent = highscore;
      // else continue displaying the highscore
    } else if (current > highscore) {
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscore = current;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessedNumber < secretNumber) {
    // display message
    displayMessage('Your number needs to be higher.');
    // decrease the tries by 1
    decreaseScore();
  } else if (guessedNumber > secretNumber) {
    displayMessage('Your number needs to be lower.');
    // decrease the tries by 1
    decreaseScore();
  }
});

document.querySelector('.again').addEventListener('click', init);
