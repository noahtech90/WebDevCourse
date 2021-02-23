let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);

document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`

let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("try again");
}