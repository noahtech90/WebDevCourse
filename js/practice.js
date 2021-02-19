function kingdom() {
    let story = document.querySelector("#story")
    let storyImg = document.querySelector("#story-img")
    let btn1 = document.querySelector(".btn"[0])
    let btn2 = document.querySelector(".btn"[1])
    story.innerHTML = "You went to the kingdom"
    storyImg.src = "../img/kingdom.jfif"
}

function forest() {
    let story = document.querySelector("#story")
    let storyImg = document.querySelector("#story-img")
    story.innerHTML = "You went to the forest"
    storyImg.src = "../img/forest.jfif"
}