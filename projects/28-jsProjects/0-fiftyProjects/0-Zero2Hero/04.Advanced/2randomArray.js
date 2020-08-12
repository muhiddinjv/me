const myArray = ["Hello", "How R U?", "Welcome", "Bye Bye"];
const temp = randomItem(myArray);
const msg = document.createTextNode(temp);
document.body.appendChild(msg);

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}