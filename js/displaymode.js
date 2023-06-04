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
            const range = card.querySelector('input[type="range');  
            
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
                
            });


            range.addEventListener('click', (event) => {
                event.stopPropagation();
    
            });

        });

    }

    return {
        darkModeContent,
        lightModeContent,
        activedCards
    };

}
