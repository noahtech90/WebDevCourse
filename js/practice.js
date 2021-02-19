
function defineVariables() {
    let story = document.querySelector("#story");
    let storyImg = document.querySelector("#story-img");

    let btn1 = document.querySelector("#choiceA");
    let btn2 = document.querySelector("#choiceB");
    storyChange = [story, storyImg, btn1, btn2]
    return storyChange


}

function kingdom() {

    // Adjust Settings
    storyChange = defineVariables()
    storyChange[0].innerHTML = "You went to the kingdom";
    storyChange[1].src = "../img/kingdom.jfif";
    storyChange[2].innerHtml = "Enter your room";
    storyChange[3].innerHtml = "Enter your room";
}

function forest() {
    storyChange = defineVariables()
    storyChange[0].innerHTML = "You went to the forest"
    storyChange[1].src = "../img/forest.jfif"
}
