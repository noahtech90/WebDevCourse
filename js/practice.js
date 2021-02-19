
function defineVariables() {

    storyChange = {

        story = document.querySelector("#story"),
        storyImg = document.querySelector("#story-img"),
        btn1 = document.querySelector("#choiceA"),
        btn2 = document.querySelector("#choiceB"),
    }

    return storyChange


}

function kingdom() {

    // Adjust Settings
    storyChange = defineVariables()
    storyChange[0].innerHTML = "You went to the kingdom";
    storyChange[1].src = "../img/kingdom.jfif";
    storyChange[2].innerHtml = "Enter your room";
    console.log(typeof storyChange[3])
}

function forest() {
    storyChange = defineVariables()
    storyChange[0].innerHTML = "You went to the forest"
    storyChange[1].src = "../img/forest.jfif"
}
