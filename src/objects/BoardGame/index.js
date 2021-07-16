import "./style.css"
import CardFrontBack from "../../components/CardFrontBack"

function BoardGame(quantity) {
    const $singleCard = CardFrontBack()
    const $allCards = $singleCard.repeat(quantity)

    return /*html*/ `
        <section class="board-game">
            ${$allCards}    
        </section>
    `
}

export default BoardGame