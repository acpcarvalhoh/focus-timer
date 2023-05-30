export function darkModeDisplay({
    boby,
    timerDisplay,
    controlsSvgFill,
    cardsSvgFill,
    cards,
}){

    function darkModeContent(){
        boby.style.background = 'var(--bg-body-dark)'
        timerDisplay.style.color = 'var(--color-timer-dark)'

        cards.forEach(svg => {
            svg.style.background = 'var( --bg-cards-dark)';
        });

        controlsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--controls-fill-dark)'
        });

        cardsSvgFill.forEach(svg => {
            svg.style.fill = 'var(--cards-fill-dark)';
        });
    }
    
    function activeCards(){
        cards.style.background = 'var(--bg-active-cards)'
        cardsSvgFill.style.fill = 'var(--cards-fill-active)'
    }

    return{
        darkModeContent,
        activeCards
    }
}
