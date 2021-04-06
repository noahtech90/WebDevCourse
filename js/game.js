let maximum = parseInt(prompt("Please enter maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = parseInt(prompt("Guess the number!"));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt("To high, try a lower number!"));
    }
    else {
        guess = parseInt(prompt("To low, try a higher number!"))
    }

    if (quess.toLowerCase() === "stop") {
        break
    }
}