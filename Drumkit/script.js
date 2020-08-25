// Select all drum button sounds elements in an array
let sounds = document.querySelectorAll('.sounds');

// loop through sounds array to detect button press
for (let i = 0; i < sounds.length; i++) {
  sounds[i].addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// add keyboard evenlistener to document
document.addEventListener('keypress', e => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

// determine the which sound corresponds with which key or button press.
function makeSound(key) {
  switch (key) {
    case 'w':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case 's':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case 'j':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();

      break;

    case 'k':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();

      break;

    case 'l':
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(() => activeButton.classList.remove('pressed'), 100);
}

function buttonMuteAnimation(button) {
  let muted = document.querySelector('.' + button);
  muted.classList.toggle('pressed');
}

// select and make HTML elements for the song
const songStart = document.getElementById('song');
let lead = new Audio('./sounds/SMB2-overworld-lead.mp3');
let bass = new Audio('./sounds/SMB2-overworld-bass.mp3');

songStart.addEventListener('click', function () {
  lead.play();
  bass.play();
  buttonAnimation('song');
});

// select buttons to mute indivual parts of the song
document.getElementById('lead').addEventListener('click', function () {
  muteSound(lead);
  buttonMuteAnimation('lead');
});
document.getElementById('bass').addEventListener('click', function () {
  muteSound(bass);
  buttonMuteAnimation('bass');
});

// make function to toggle mute for the lead || bass sound
function muteSound(song) {
  if (song.volume === 1) {
    song.volume = 0;
  } else {
    song.volume = 1;
  }
}

document.addEventListener('keypress', e => {
  makeSound(e.key);
  buttonAnimation(e.key);
});
