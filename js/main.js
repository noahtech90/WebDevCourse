function letGo() {
    let myDiv = document.querySelector(".make-happen")
    myDiv.style.backgroundColor = "blue"
}

function makeText() {
    let myText = document.querySelector(".make-happen p")
    myText.innerHTML = "   you just made some text my guy!".bold().toUpperCase()
}

function findText() {
    let myText = document.querySelector(".make-happen p")
    myText.innerHTML = "   you just made some text my guy!".indexOf("z")
}