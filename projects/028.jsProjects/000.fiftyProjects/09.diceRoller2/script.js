const btn = document.querySelector('button');
const pla1 = document.querySelector('#player1');
const pla2 = document.querySelector('#player2');
const output = document.querySelector('#output');

btn.addEventListener('click', function() {
    let rolls = [roll(6), roll(6)];
    let msg;
    if (rolls[0] == rolls[1]) {
        msg = "It was a draw";
    } else if (rolls[0] > rolls[1]) {
        msg = "Player 1 wins!";
    } else {
        msg = "Player 2 wins!";
    }
    output.innerHTML = msg;
    pla1.innerHTML = rolls[0];
    pla2.innerHTML = rolls[1];
    console.log(rolls);
    console.log(msg);
})

function roll(num) {
    let random = Math.floor(Math.random() * num) + 1;
    let n = 9855 + random;
    let char = "&#" + n + ";";

    return random + " " + char;
}