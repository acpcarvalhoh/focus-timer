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
let setMinutes;


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
  setTimer()
  soud.buttonPressAudio.play()
})

buttonStop.addEventListener('click', function(){
  timer.hold()
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


function setTimer(){
  setMinutes = prompt('Quantos minutos?')
    if (setMinutes === null || 
        setMinutes.match(/[^0-9]/g) || 
        setMinutes.match(/\bnull\b/)) {
        setMinutes = '00';
    }
    if(setMinutes < 10){
        setMinutes = setMinutes.toString().padStart(2, '0'); // adicionar um zero antes
    }

    minutesDisplay.textContent = setMinutes


    timer.countDown()
}
    

