import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import PlayerName from "./src/components/PlayerName"
import BoardGame from "./src/objects/BoardGame"

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $player1label = PlayerName(1)
const $player2label = PlayerName(2)

$root.insertAdjacentHTML("beforeend", $player1label)
$root.insertAdjacentHTML("beforeend", $player2label)
$root.insertAdjacentHTML("beforeend", "<br>")
$root.insertAdjacentHTML("beforeend", $htmlBoardGame)