import { Sounds } from "./sounds.js"

const sounds = Sounds()

export function ModeDisplay({
    boby,
    timerDisplay,
    controlsSvgFill,
    cards,
    buttonDarkMode,
    buttonLightMode, 
}){

    function darkModeContent(){
        boby.style.background = 'var(--bg-body-dark)'
        timerDisplay.style.color = 'var(--color-timer-dark)'

        cards.forEach(card => {
            const svgFill = card.querySelector('svg path')
            const range = card.querySelector('input[type="range'); 

            card.classList.add('Dark')
            svgFill.classList.add('Dark')
            range.classList.add('Dark');
            card.classList.remove('activedLight')
            svgFill.classList.remove('activedLight')
            range.classList.remove('activedLight');
           
            range.value = '0'
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-dark)'
        });

        
    }

    function lightModeContent(){
        boby.style.background = 'var(--bg-body-light)'
        timerDisplay.style.color = 'var(--color-timer-light)'

        cards.forEach(card => {
            const svgFill = card.querySelector('svg path')
            const range = card.querySelector('input[type="range'); 

            card.classList.remove('Dark')
            svgFill.classList.remove('Dark')
            range.classList.remove('Dark');

            card.classList.remove('activedDark')
            svgFill.classList.remove('activedDark')
            
            range.value = '0'
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-light)'
        });
    }

    function activedCards() {
        
        cards.forEach((card) => {
            const path = card.querySelector('svg path');
            const range = card.querySelector('input[type="range"]');  
            
            card.addEventListener('click', function () {
              if(buttonDarkMode.classList.contains('hidden')){
                    card.classList.toggle('activedLight');
                    path.classList.toggle('activedLight');
                    range.classList.toggle('activedLight');
                }

              if (buttonLightMode.classList.contains('hidden')) {
                    card.classList.toggle('activedDark');
                    card.classList.toggle('Dark')
                    path.classList.toggle('activedDark');
                    path.classList.toggle('Dark');
                }

                const isActivedCard = card.classList.contains('activedLight') ||  
                card.classList.contains('activedDark')
                
                if(isActivedCard){
                    range.value = '0.5'
                }else{
                    range.value = '0'
                }

                const cardSounds = {
                    rain: card.classList.contains('card-rain'),
                    florest: card.classList.contains('card-florest'),
                    coffeeshop: card.classList.contains('card-coffeshop'),
                    fireplace: card.classList.contains('card-fireplace'),
                }
        
                if(cardSounds.florest){
                    if(isActivedCard){
                        sounds.soudOfFlorest()
                    }else{
                        sounds.Pause(0)
                    }

                }else if(cardSounds.rain){
                    if(isActivedCard){
                        sounds.soudOfRain()
                    }else{
                        sounds.Pause(1)
                    }

                }else if(cardSounds.coffeeshop){
                    if(isActivedCard){
                        sounds.soudOfCoffeshop()
                    }else{
                        sounds.Pause(2)
                    }

                }else{
                    if(isActivedCard){
                        sounds.soudOfFireplace()
                    }else{
                        sounds.Pause(3)
                    }
                }

                range.addEventListener('click', (event) => {
                    event.stopPropagation();

                    if (cardSounds.florest) {
                        if (isActivedCard) {
                          const volume = parseFloat(range.value);
                          sounds.soudOfFlorest(volume);
                        } else {
                          sounds.Pause(0);
                        }
                      } else if (cardSounds.rain) {
                        if (isActivedCard) {
                          const volume = parseFloat(range.value); 
                          sounds.soudOfRain(volume);
                        } else {
                          sounds.Pause(1);
                        }
                      } else if (cardSounds.coffeeshop) {
                        if (isActivedCard) {
                          const volume = parseFloat(range.value);
                          sounds.soudOfCoffeshop(volume);
                        } else {
                          sounds.Pause(2);
                        }
                      } else {
                        if (isActivedCard) {
                          const volume = parseFloat(range.value); 
                          sounds.soudOfFireplace(volume);
                        } else {
                          sounds.Pause(3);
                        }
                      }
                      
                    
                });
                    
            });

            
        
        });


    }

    return {
        darkModeContent,
        lightModeContent,
        activedCards
    };

}
