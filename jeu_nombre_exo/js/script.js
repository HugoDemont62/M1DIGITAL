const SETTINGS = {
  easy: {
    attempts: 10,
    range: 100
  },
  medium: {
    attempts: 10,
    range: 200
  },
  hard: {
    attempts: 20,
    range: 1000
  }
};

let selectedMode = "easy";
let numberToGuess = null;
let currentAmountOfAttempts = null;

function setMode(mode) {
  selectedMode = mode;
  const settings = SETTINGS[mode];
  numberToGuess = Math.floor(Math.random() * settings.range) + 1;
  currentAmountOfAttempts = settings.attempts;
  updateUI();
}

function updateUI(param) {
  if (param === 'lose') {
    $('#lvls').css('display', 'block');
    $('.choice').css('display', 'none');
    $('#feedback').text('Vous avez perdu! Voulez-vous rejouer?');
  } else if (param === 'win') {
    $('#lvls').css('display', 'block');
    $('.choice').css('display', 'none');
    $('#feedback').text('Vous avez gagné! Voulez-vous rejouer?');
  } else {
    $('#lvls').css('display', 'none');
    $('.choice').css('display', 'block');
    $('#game h1').text(`Trouvez le nombre compris entre 1 et ${SETTINGS[selectedMode].range}`);
    $('#attempts').text(`Tentatives restantes: ${currentAmountOfAttempts}`);
  }
}

function play() {
  $('#lvls li').on('click', function() {
    const mode = $(this).find('b').text() === '100' ? 'easy' : $(this).find('b').text() === '200' ? 'medium' : 'hard';
    setMode(mode);
  });
}

function win() {
  updateUI('win');
}

function lose() {
  updateUI('lose');
}

function decrementAttempts() {
  if (currentAmountOfAttempts !== null) currentAmountOfAttempts -= 1;
  if (currentAmountOfAttempts === 0) lose();
  console.log(currentAmountOfAttempts);
}

function makeGuess(input) {
  const safeNumber = Number(input);
  if (safeNumber === numberToGuess) {
    win();
  } else {
    if (safeNumber < 1 || safeNumber > SETTINGS[selectedMode].range) {
      $('#feedback').text(`Le nombre doit être compris entre 1 et ${SETTINGS[selectedMode].range}`);
      return;
    } else if (isNaN(safeNumber)) {
      $('#feedback').text('Veuillez entrer un nombre');
      return;
    } else if (safeNumber % 1 !== 0) {
      $('#feedback').text('Veuillez entrer un nombre entier');
      return;
    } else if(safeNumber < numberToGuess) {
      console.log('plus grand');
      $('#feedback').text('Le nombre voulu est plus grand');
    } else if (safeNumber > numberToGuess) {
      $('#feedback').text('Le nombre voulu est plus petit');
    }
    decrementAttempts();
    updateUI()
  }
}

$(function() {
  play();
  $('#guessButton').on('click', function() {
    const guess = $('#guessInput').val();
    makeGuess(guess);
  });
});