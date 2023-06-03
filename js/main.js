import { ModeDisplay } from "./displaymode.js"
import { Sounds } from "./sounds.js"


/* Modo do display */
const boby = document.querySelector('body')
const timerDisplay  = document.querySelector('#timer')
const controlsSvgFill = document.querySelectorAll('#controls svg path')
const cardsSvgFill = document.querySelectorAll('#sounds svg path')

const buttonSoundCards = document.querySelectorAll('#sounds button')

const cards = document.querySelectorAll('#sounds .card')
const cardFlorest = document.querySelector('.cardFlorest')
const cardRain = document.querySelector('.cardRain');
const cardCoffeshop = document.querySelector('.cardCoffeshop');
const cardFireplace = document.querySelector('.cardFireplace');


/* Controles */
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop  = document.querySelector('.stop')
const plusButton = document.querySelector('.plus-button')
const minusButton = document.querySelector('.minus-button')
const inputRange = document.querySelectorAll('input[type="range"]')


const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')

const sounds = Sounds()
const volumeRange = document.querySelectorAll('input[type="range"]');
const audioElements = [
  sounds.soudOfFlorest,
  sounds.soudOfRain,
  sounds.soudOfCoffeshop,
  sounds.soudOfFireplace
];


volumeRange.forEach((range, index) => {
  range.addEventListener('input', function() {
    const volume = parseFloat(range.value);
    updateVolume(index, volume);
  });
});

function updateVolume(index, volume) {
  const audio = audioElements[index](volume);
  playAudio(audio);
}

function playAudio(audio) {
  if (audio && audio.paused) {
    audio.play();
    currentAudio = audio;
  } else if (audio) {
    audio.pause();
    currentAudio = null;
  }
}

function createCardSoundClickHandler(index) {
  return function() {
    const volume = parseFloat(volumeRange[index].value);
    const audio = audioElements[index](volume);
    playAudio(audio);
  };
}

buttonSoundCards.forEach(bg_audio => {
 bg_audio.addEventListener('click', function(){
    createCardSoundClickHandler(0)
    createCardSoundClickHandler(1)
    createCardSoundClickHandler(2)
    createCardSoundClickHandler(3)
  })

});

const modeDisplay = ModeDisplay({
  boby,
  timerDisplay,
  controlsSvgFill,
  cardsSvgFill,
  cards,
  volumeRange,
  buttonDarkMode,
  buttonLightMode,
});


buttonDarkMode.addEventListener('click', function () {
  darkAndLightMode();
  modeDisplay.lightModeContent();
  

});

buttonLightMode.addEventListener('click', function () {
  modeDisplay.darkModeContent();
  darkAndLightMode();
  
});


function darkAndLightMode() {
  buttonDarkMode.classList.toggle('hidden');
  buttonLightMode.classList.toggle('hidden');
}

    

