let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);

document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`

let chores = prompt("Done your chores?");
let reading = prompt("Done your reading?");

if (chores.toLowerCase() === 'yes' || reading.toLowerCase() === 'yes') {
    alert("alright play your games")
} else {
    alert("no games for you")
}