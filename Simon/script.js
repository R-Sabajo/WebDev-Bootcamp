let buttonColors = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let gameOver = false;

// Animate title text
$('#level-title').addClass('blink');

// Press A key to start the Game

$('body').keypress(() => gameStart());
$('h1').click(() => gameStart());

function gameStart() {
  if (level === 0) {
    gameOver = false;
    repeatSequence();
    $('#level-title')
      .text('Level ' + level)
      .removeClass('blink');
    level++;
  } else {
    return;
  }
}

// Function to generate and play the next random color in the sequence
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  animatePress(randomChosenColor);
  playSound(randomChosenColor);

  console.log(gamePattern);
}

// Function to update level and repeat the sequence for the user + run nextSequence
function repeatSequence() {
  $('#level-title').text('Level ' + level);
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(() => {
      $('.' + gamePattern[i]).addClass('pressed');
      playSound(gamePattern[i]);
    }, i * 350 + 500);
    setTimeout(
      () => $('.' + gamePattern[i]).removeClass('pressed'),
      i * 350 + 800
    );
  }

  // Add the next color in the sequence after the existing pattern ends
  setTimeout(() => {
    nextSequence();
  }, gamePattern.length * 350 + 550);

  // empty userClicked pattern Array
  setTimeout(() => {
    userClickedPattern = [];
  }, gamePattern.length * 350 + 550);

  // update the level
  level++;
}

// Add eventlisteners for UserClick on the buttons
$('.btn').click(() => {
  if (userClickedPattern.length < gamePattern.length) {
    btnClick(event);
  } else {
    return;
  }
});

// Add the clicked color to the user Array
function btnClick(event) {
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  console.log(gamePattern);
  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  // run the repeatSequence if the user and game are the same length and the user is not gameOver.
  if (userClickedPattern.length === gamePattern.length && gameOver === false) {
    setTimeout(() => repeatSequence(), 1000);
  } else {
    return;
  }
}

// function to play the sound files based on colorName
function playSound(colorName) {
  let colorSound = new Audio(`./_sounds/${colorName}.mp3`);
  colorSound.play();
}

// function to animate pressing the buttons with the pressed class.
function animatePress(currentColor) {
  $('.' + currentColor).addClass('pressed');
  setTimeout(() => $('.' + currentColor).removeClass('pressed'), 300);
}

// check the currentLevel answer by comparing the user array with the game array.
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log('Succes!');
  } else {
    // if the user chooses the wrong color in the sequence. The game is over.
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 333);

    playSound('wrong');
    $('#level-title')
      .text('Game Over, Press Any Key to Restart')
      .addClass('blink');

    gameOver = true;
    restartGame();
    console.log('Wrong!');
  }
}

// function to reset the game. User can restart again by pressing any key.
function restartGame() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}
