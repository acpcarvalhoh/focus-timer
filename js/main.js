import { darkModeDisplay } from "./darkmode.js"



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



const darkMode = darkModeDisplay({
    boby,
    timerDisplay,
    controlsSvgFill,
    cardsSvgFill,
    cards,
})

buttonDarkMode.addEventListener('click', function(){
    darkAndLightMode()
    return
})

buttonLightMode.addEventListener('click', function(){
    darkAndLightMode()
    darkMode.darkModeContent()
})


function darkAndLightMode(){
    buttonDarkMode.classList.toggle('hidden')
    buttonLightMode.classList.toggle('hidden')
}

    

