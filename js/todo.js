let input = prompt("what would you like to do?");
const todos = ["Game", "Win"];


while (input != "quit" && input !== "q") {
    if (input === "list") {

        // List out todos 
        console.log("*******************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("*******************")

    }
    input = prompt("what would you like to do?")
}

todos.push(input)