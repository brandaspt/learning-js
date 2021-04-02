// Importing default
import domFunctions from "../Modules/domFunctions.js"
// Destructuring
let { toggleElementDisplay, changeToFunkyColor } = domFunctions

// Could also import using named imports like so:
// import { toggleElementDisplay, changeToFunkyColor } from "../Modules/domFunctions.js"

const buttonElement = document.getElementById("secret-button")
const pElement = document.getElementById("secret-p")

buttonElement.addEventListener("click", () => {
    toggleElementDisplay(pElement)
    changeToFunkyColor(buttonElement)
})
