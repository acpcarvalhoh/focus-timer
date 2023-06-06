import { ModeDisplay } from "./displaymode.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"

/* Modo do display */
const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')
const boby = document.querySelector('body')
const timerDisplay  = document.querySelector('#timer')
const controlsSvgFill = document.querySelectorAll('#controls svg path')

const cards = document.querySelectorAll('#sounds .card')

/* Controles */
const buttonPlay = document.querySelector('.play')
const buttonStop  = document.querySelector('.stop')
const plusButton = document.querySelector('.plus-button')
const minusButton = document.querySelector('.minus-button')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let timerTimeOut;
let minutes


const soud = Sounds()

const modeDisplay = ModeDisplay({
  boby,
  timerDisplay,
  controlsSvgFill,
  cards,
  buttonDarkMode,
  buttonLightMode,
});

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  timerTimeOut, 
  resetControls: controls.Reset
})

modeDisplay.activedCards()

buttonPlay.addEventListener('click', function(){
  timer.countDown()
  soud.buttonPressAudio.play()
})

buttonStop.addEventListener('click', function(){
  timer.hold()
})

plusButton.addEventListener('click', function(){
  minutes =  Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
})

minusButton.addEventListener('click', function(){
    minutes =  Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
})



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

    

