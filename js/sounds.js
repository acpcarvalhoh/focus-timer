export function Sounds(){

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    const BgAudio = [
        { audio: new Audio("sounds/Floresta.wav"), volume: 1 },
        { audio: new Audio("sounds/Chuva.wav"), volume: 1 },
        { audio: new Audio("sounds/Cafeteria.wav"), volume: 1 },
        { audio: new Audio("sounds/Lareira.wav"), volume: 1 },
    ];

    function soudOfFlorest(volume = 1) {
        if (!isNaN(volume)) {
          BgAudio[0].audio.volume = volume;
        }
        if (BgAudio[0].audio.paused) {
          BgAudio[0].audio.play();
        }
    }

    function soudOfRain(volume = 1){
        if (!isNaN(volume)) {
            BgAudio[1].audio.volume = volume;
        }
        if (BgAudio[1].audio.paused) {
            BgAudio[1].audio.play();
        }
    }

    function soudOfCoffeshop(volume = 1){
        if (!isNaN(volume)) {
            BgAudio[2].audio.volume = volume;
        }
        if (BgAudio[2].audio.paused) {
            BgAudio[2].audio.play();
         }
    }

    function soudOfFireplace(volume = 1){
        if (!isNaN(volume)) {
            BgAudio[3].audio.volume = volume;
        }
        if (BgAudio[3].audio.paused) {
            BgAudio[3].audio.play();
        }
    }
     
    function Pause(index){
        BgAudio[index].audio.pause()
    }

    BgAudio.map(audio => audio.audio.loop = true)

    function timeAnd() {
        BgAudio.forEach(audio => {
          audio.audio.pause();
          audio.audio.currentTime = 0; 
        });

        kitchenTimer.play();
    }

    

    return{
        soudOfFlorest,
        soudOfRain,
        soudOfCoffeshop,
        soudOfFireplace,
        Pause,
        timeAnd,
        buttonPressAudio
    }


}


