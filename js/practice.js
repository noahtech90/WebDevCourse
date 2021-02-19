
function defineVariables() {
    //  Define Page Variables to be used later
    let story = document.querySelector("#story");
    let storyImg = document.querySelector("#story-img");

    let btn1 = document.querySelector("#choiceA");
    let btn2 = document.querySelector("#choiceB");
    storyChange = [story, storyImg, btn1, btn2]
    return storyChange
}

function kingdom() {
    // Grab Page Elements
    storyChange = defineVariables()

    // Adjust Story and Image
    storyChange[0].innerHTML = "You went to the kingdom";
    storyChange[1].src = "../img/kingdom.jfif";

    // Grab Choice Buttons
    choiceA = storyChange[2]
    choiceB = storyChange[3]

    // Adjust Choice Buttons
    choiceA.innerHTML = "Go to your cave";
    choiceA.setAttribute("onClick", "cave()");

    choiceB.innerHTML = "Go to your room"
    choiceB.setAttribute("onClick", "room()");
}

function forest() {
    // Grab Page Elements
    storyChange = defineVariables()

    // Adjust Story and Image
    storyChange[0].innerHTML = "You went to the forest";
    storyChange[1].src = "../img/forest.jfif";

    // Grab Choice Buttons
    choiceA = storyChange[2]
    choiceB = storyChange[3]

    // Adjust Choice Buttons
    choiceA.innerHTML = "Camp out for the night";
    choiceA.setAttribute("onClick", "camp()");

    choiceB.innerHTML = "Go on a hunt"
    choiceB.setAttribute("onClick", "hunt()");
}

function room() {
    // Grab Page Elements
    storyChange = defineVariables()

    // Adjust Story and Image
    storyChange[0].innerHTML = "You went into your room";
    storyChange[1].src = "../img/room.jpg";

    // Grab Choice Buttons
    choiceA = storyChange[2]
    choiceB = storyChange[3]

    // Adjust Choice Buttons
    choiceA.innerHTML = "Go back to the castle";
    choiceA.setAttribute("onClick", "kingdom()");

    choiceB.innerHTML = "Go to the forest"
    choiceB.setAttribute("onClick", "forest()");
}

function cave() {
    // Grab Page Elements
    storyChange = defineVariables()

    // Adjust Story and Image
    storyChange[0].innerHTML = "You went to the cave";
    storyChange[1].src = "../img/cave.jpg";

    // Grab Choice Buttons
    choiceA = storyChange[2]
    choiceB = storyChange[3]

    // Adjust Choice Buttons
    choiceA.innerHTML = "Go back to castle";
    choiceA.setAttribute("onClick", "kingdom()");

    choiceB.innerHTML = "Go to the forest"
    choiceB.setAttribute("onClick", "forest()");
}
function hunt() {
    // Grab Page Elements
    storyChange = defineVariables()

    // Adjust Story and Image
    storyChange[0].innerHTML = "You went for a hunt";
    storyChange[1].src = "../img/hunt.jpg";

    // Grab Choice Buttons
    choiceA = storyChange[2]
    choiceB = storyChange[3]

    // Adjust Choice Buttons
    choiceA.innerHTML = "Go to the castle";
    choiceA.setAttribute("onClick", "kingdom()");

    choiceB.innerHTML = "Go to the forest"
    choiceB.setAttribute("onClick", "forest()");
}
function camp() {
    // Grab Page Elements
    storyChange = defineVariables()

    // Adjust Story and Image
    storyChange[0].innerHTML = "You went to the camp";
    storyChange[1].src = "../img/camp.jfif";

    // Grab Choice Buttons
    choiceA = storyChange[2]
    choiceB = storyChange[3]

    // Adjust Choice Buttons
    choiceA.innerHTML = "Go to your kingdom";
    choiceA.setAttribute("onClick", "kingdom()");

    choiceB.innerHTML = "Go to your forest"
    choiceB.setAttribute("onClick", "forest()");
}