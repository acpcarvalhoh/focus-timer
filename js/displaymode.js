export function ModeDisplay({
    boby,
    timerDisplay,
    controlsSvgFill,
    cardsSvgFill,
    cards,
    volumeRange,
    buttonDarkMode,
    buttonLightMode,
    
    
}){

    function darkModeContent(){
        boby.style.background = 'var(--bg-body-dark)'
        timerDisplay.style.color = 'var(--color-timer-dark)'

        cards.forEach(bg_card => {
            bg_card.classList.add('Dark')
        });

        cardsSvgFill.forEach(svg => {
            svg.classList.add('Dark')
        });

        volumeRange.forEach(slider => {
            slider.classList.add('dark');
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-dark)'
        });

    }

    function lightModeContent(){
        boby.style.background = 'var(--bg-body-light)'
        timerDisplay.style.color = 'var(--color-timer-light)'

        cards.forEach(bg_card => {
            bg_card.classList.remove('Dark')
        });

        cardsSvgFill.forEach(svg => {
            svg.classList.remove('Dark');
        });

        volumeRange.forEach(slider => {
            slider.classList.remove('dark');
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-light)'
        });
        
    }

    function activedCards() {
        cards.forEach((card) => {
            card.addEventListener('click', function () {
              const currentCard = card;
              if(buttonDarkMode.classList.contains('hidden')){
                card.classList.toggle('activedLight');
              }

              if (buttonLightMode.classList.contains('hidden')) {
                card.classList.toggle('activedDark');
                card.classList.toggle('Dark'); 
              }
            });
        });

    }
      
    activedCards()
    

    return {
        darkModeContent,
        lightModeContent,
    };

}
