// Select the stateText element and playertext elements
let stateText = document.querySelector('#state');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
console.log(player1);

// Select 'Roll the Dice!' Button
let rollButton = document.getElementById('roll');
rollButton.classList.add('rollNow');

const resetWinner = () => {
  rollButton.classList.remove('rollNow');
  stateText.classList.remove('win');
  player1.classList.remove('win');
  player2.classList.remove('win');
  stateText.innerHTML = 'Do you feel Lucky?';
};

const rollDice = () => {
  //  generate two random numbers
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  // use random numbers to set img src attribute to dice images
  document
    .querySelectorAll('img')[0]
    .setAttribute('src', './images/dice' + randomNumber1 + 'NEW.png');
  document
    .querySelectorAll('img')[1]
    .setAttribute('src', './images/dice' + randomNumber2 + 'NEW.png');
};

const rollDiceAndStateWinner = () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  document
    .querySelectorAll('img')[0]
    .setAttribute('src', './images/dice' + randomNumber1 + 'NEW.png');
  document
    .querySelectorAll('img')[1]
    .setAttribute('src', './images/dice' + randomNumber2 + 'NEW.png');

  // determine and animate result text!
  stateText.classList.add('win');

  if (randomNumber1 > randomNumber2) {
    stateText.innerHTML = 'Player 1 wins!';
    player1.classList.add('win');
    player2.classList.remove('win');
  } else if (randomNumber1 === randomNumber2) {
    stateText.innerHTML = 'Draw!';
    player1.classList.add('win');
    player2.classList.add('win');
  } else {
    stateText.innerHTML = 'Player 2 wins!';
    player2.classList.add('win');
    player1.classList.remove('win');
  }

  setTimeout(() => rollButton.classList.add('rollNow'), 3000);
};

// Add an eventlistener for mouseclick to run the rollDice function. SEt a timeout out to simulate dice roll effect.
rollButton.addEventListener('click', () => {
  resetWinner();
  rollDice();
  for (let i = 1; i < 10; i++) {
    setTimeout(() => rollDice(), [i * 50]);
  }
  for (let i = 1; i < 20; i++) {
    setTimeout(() => rollDice(), [i * 100]);
  }

  for (let i = 1; i < 20; i++) {
    setTimeout(() => rollDice(), [i * 200]);
  }
  setTimeout(() => rollDice(), 3000);
  setTimeout(() => rollDice(), 3500);
  setTimeout(() => rollDiceAndStateWinner(), 4500);
});
