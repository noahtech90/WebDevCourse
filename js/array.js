let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);

document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`

let todo = ["hello"];
let todoList = document.getElementById("todo");
for (i = 0; i <= todo.length - 1; i++) {
    let newEle = todoList.appendChild("ul");
    newEle.innerHTML = todo[i];
}

