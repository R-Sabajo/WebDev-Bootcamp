// Select the state Text Element
let stateText = document.getElementById('state');

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

  // Make if statements to determine the Winner or draw text!
  if (randomNumber1 > randomNumber2) {
    stateText.innerHTML = 'Player 1 wins!';
  } else if (randomNumber1 === randomNumber2) {
    stateText.innerHTML = 'Draw!';
  } else {
    stateText.innerHTML = 'Player 2 wins!';
  }
};

// Add an eventlistener for a mouseclick to run the rollDice function
rollButton.addEventListener('click', () => {
  rollDice();
});
