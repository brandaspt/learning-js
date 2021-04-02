// Importing default
import domFunctions from "../Modules/domFunctions.js"
// Destructuring
let { toggleElementDisplay, changeToFunkyColor } = domFunctions

// Could also import using named imports like so:
// import { toggleElementDisplay, changeToFunkyColor } from "../Modules/domFunctions.js"

let buttonElement = document.getElementById("secret-button")
let imgElement = document.getElementById("secret-img")

buttonElement.addEventListener("click", () => {
    imgElement.src = `https://picsum.photos/${Math.floor(Math.random() * 1000) + 400}/${Math.floor(
        Math.random() * 1000 + 400
    )}`
    toggleElementDisplay(imgElement)
    changeToFunkyColor(buttonElement)
})
