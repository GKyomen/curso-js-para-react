import "./style.css"

function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
    return /*html*/ `
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `
}

const $cards = document.querySelectorAll(".card-game");
$cards.forEach(card => card.addEventListener('click', () => {
    card.insertAdjacentHTML("beforeend", "<p>olá!</p>")
}))

export default CardGame