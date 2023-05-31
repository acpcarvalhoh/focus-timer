export function ModeDisplay({
    boby,
    timerDisplay,
    controlsSvgFill,
    cardsSvgFill,
    cards,
}){

    function darkModeContent(){
        boby.style.background = 'var(--bg-body-dark)'
        timerDisplay.style.color = 'var(--color-timer-dark)'

        cards.forEach(bg_card => {
            bg_card.style.background = 'var( --bg-cards-dark)';
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-dark)'
        });

        cardsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--cards-fill-dark)';
        });
    }

    function lightModeContent(){
        boby.style.background = 'var(--bg-body-light)'
        timerDisplay.style.color = 'var(--color-timer-light)'

        cards.forEach(bg_card => {
            bg_card.style.background = 'var(--bg-cards-light)';
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-light)'
        });

        cardsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--cards-fill-light)';
        });
    }
    
    function activeCards(){
        cards.style.background = 'var(--bg-active-cards)'
        cardsSvgFill.style.fill = 'var(--cards-fill-active)'
    }

    return{
        darkModeContent,
        lightModeContent,
        activeCards
    }


}
