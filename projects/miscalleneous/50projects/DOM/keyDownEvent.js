const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', keyLog);

function keyLog(e) {
    log.textContent += ` ${e.code}`;
}

const input = document.querySelector('input');
const li4 = document.getElementById('li4');
const h1 = document.querySelector('h1');
input.addEventListener('keypress', addItem);

function addItem(e) {
    h1.textContent = input.value;
    if (input.value.length > 9) {
        input.style.background = 'red';
        li4.textContent = 'MORE THAN 8';
    } else if (input.value.length > 5) {
        input.style.background = 'yellow';
        li4.textContent = 'MORE THAN 4';
    } else {
        input.style.background = 'white';
    }
    if (e.keyCode === 13 && input.value.length > 1) {
        h1.style.background = 'yellow';
    }
}