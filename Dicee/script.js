// Select the stateText element and playertext elements
let stateText = document.querySelector('#state');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
console.log(player1);

// Select 'Roll the Dice!' Button
let rollButton = document.getElementById('roll');

const rollDice = () => {
  //  generate two random numbers
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  // use random numbers to set img src attribute to dice images
  document
    .querySelector('.die1')
    .setAttribute('src', './images/dice' + randomNumber1 + 'NEW.png');
  document
    .querySelector('.die2')
    .setAttribute('src', './images/dice' + randomNumber2 + 'NEW.png');

  // Make if statements to determine result text!
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
};

// Add an eventlistener for a mouseclick to run the rollDice function
rollButton.addEventListener('click', () => {
  rollDice();
});
