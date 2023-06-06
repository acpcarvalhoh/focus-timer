import {Sounds} from "./sounds.js"
const sound = Sounds()


export function Timer({
    minutesDisplay, 
    secondsDisplay, 
    timerTimeOut,
    resetControls
}){

    function Reset(){
        minutesDisplay.textContent = '25'
        secondsDisplay.textContent = '00'
        clearTimeout(timerTimeOut) // Parando a função setTimeOut
    }


    function countDown(){
        timerTimeOut = setTimeout(function(){
            let seconds =  Number(secondsDisplay.textContent)  
            let minutes = Number(minutesDisplay.textContent)   // Decrementando minutos e segundos
            
            secondsDisplay.textContent = '00'

            if(minutes <= 0 && seconds <= 0){
                Reset()
                Sounds().kitchenTimer.play()
                return
            }

            if (seconds <= 0) {
                seconds = 60;

                minutesDisplay.textContent = String(minutes - 1).padStart(2, '0'); // adicionar um zero antes
            }
            
            secondsDisplay.textContent = String(seconds - 1).padStart(2, '0'); // adicionar um zero antes

        countDown() // execultando a função novamente
        }, 1000)
    }

    function hold(){
        clearTimeout(timerTimeOut) // Parando a função setTimeOut
    }

    return{
        countDown,
        hold,
        Reset
    }
}

