import CardGame from "../CardGame"

function CardFrontBack() {
    return /*html*/ `
        <article>
            ${CardGame()}
            ${CardGame("javascript", "Logo do JavaScript")}
        </article>
    `
}

export default CardFrontBack