function letGo() {
    let myDiv = document.querySelector(".make-happen")
    myDiv.style.backgroundColor = "blue"
}

function makeText() {
    let myText = document.querySelector(".make-happen p")
    myText.innerHTML = Math.floor(Math.random() * 10) + 1
}

function findText() {
    let myText = document.querySelector(".make-happen p")
    myText.innerHTML = "   you just made some text my guy!".slice(-9).toUpperCase().replace("GUY", "gal").repeat(4).trim()
}