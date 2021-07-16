import "./style.css"

function CardGame() {
    return /*html*/ `
        <article class="card-game">
            <img src="images/alura-pixel.png" alt="Logo da Alura">
        </article>
    `
}

const $cards = document.querySelectorAll(".card-game");
$cards.forEach(card => card.addEventListener('click', () => {
    card.insertAdjacentHTML("beforeend", "<p>olá!</p>")
}))

export default CardGame