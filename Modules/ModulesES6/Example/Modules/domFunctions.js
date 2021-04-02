function toggleElementDisplay(domElement) {
  if (domElement.style.display === 'none') {
    domElement.style.display = 'block'
  } else {
    domElement.style.display = 'none'
  }
}

function changeToFunkyColor(domElement) {
    const r = Math.random() * 255
    const g = Math.random() * 255
    const b = Math.random() * 255

    domElement.style.background = `rgb(${r}, ${g}, ${b})`
}

let resources = {
  toggleElementDisplay,
  changeToFunkyColor
}
// Using export default
export default resources

// Could also be exported using named exports like so:
// export {toggleElementDisplay, changeToFunkyColor}