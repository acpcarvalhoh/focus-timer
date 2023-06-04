import { ModeDisplay } from "./displaymode.js"



/* Modo do display */
const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')
const boby = document.querySelector('body')
const timerDisplay  = document.querySelector('#timer')
const controlsSvgFill = document.querySelectorAll('#controls svg path')

const cards = document.querySelectorAll('#sounds .card')

/* Controles */
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop  = document.querySelector('.stop')
const plusButton = document.querySelector('.plus-button')
const minusButton = document.querySelector('.minus-button')

const modeDisplay = ModeDisplay({
  boby,
  timerDisplay,
  controlsSvgFill,
  cards,
  buttonDarkMode,
  buttonLightMode,
});

modeDisplay.activedCards()

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

    

