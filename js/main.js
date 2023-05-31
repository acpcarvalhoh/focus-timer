import { ModeDisplay } from "./displaymode.js"
import { Sounds } from "./sounds.js"

const timerDisplay  = document.querySelector('#timer')
const controlsSvgFill = document.querySelectorAll('#controls svg path')
const cardsSvgFill = document.querySelectorAll('#sounds svg path')
const cards = document.querySelectorAll('#sounds button')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop  = document.querySelector('.stop')
const plusButton = document.querySelector('.plus-button')
const minusButton = document.querySelector('.minus-button')
const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')
const boby = document.querySelector('body')

const CardSoundFlorest = document.querySelector('.florest')

const volumeRange = document.querySelector('#vol-florest')

const sounds = Sounds()
volumeRange.addEventListener('input', function(event) {
    const volume = parseFloat(volumeRange.value);
    sounds.soudOfFlorest(volume);
    event.stopPropagation()
    
});
  

CardSoundFlorest.addEventListener('click', function(){
    sounds.soudOfFlorest(volumeRange)
    console.log('testando')
})

const modeDisplay = ModeDisplay({
    boby,
    timerDisplay,
    controlsSvgFill,
    cardsSvgFill,
    cards,
})

buttonDarkMode.addEventListener('click', function(){
    darkAndLightMode()
    modeDisplay.lightModeContent()
})

buttonLightMode.addEventListener('click', function(){
    darkAndLightMode()
    modeDisplay.darkModeContent()
})


function darkAndLightMode(){
    buttonDarkMode.classList.toggle('hidden')
    buttonLightMode.classList.toggle('hidden')
}

    

