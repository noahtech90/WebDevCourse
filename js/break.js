let input = prompt("Say something");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop") {
        console.log("you win")
        break;
    }
}