let rollButton = document.getElementById('roll');

const rollDice = () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector('.die1')
    .setAttribute('src', './images/dice' + randomNumber1 + 'NEW.png');
  document
    .querySelector('.die2')
    .setAttribute('src', './images/dice' + randomNumber2 + 'NEW.png');
};

let rollDiceTime = setTimeout(rollDice(), 2000);

// rollDiceTime;
// rollButton.addEventListener('click', () => {});
