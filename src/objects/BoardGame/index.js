import "./style.css"
import CardGame from "../../components/CardGame"

function BoardGame(quantity) {
    const $singleCard = CardGame()
    const $allCards = $singleCard.repeat(quantity)

    return /*html*/ `
        <section class="board-game">
            ${$allCards}    
        </section>
    `
}

export default BoardGame