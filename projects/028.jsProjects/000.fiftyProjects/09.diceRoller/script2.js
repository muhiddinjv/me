const btn = document.querySelector('button');
const output = document.querySelector('.output');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const dice = [
    [5],
    [1, 9],
    [1, 5, 9],
    [1, 3, 7, 9],
    [1, 3, 5, 7, 9],
    [1, 3, 4, 6, 7, 9]
];

btn.addEventListener('click', function() {
    let rolls = [roll(6), roll(6)];
    let msg;
    if (rolls[0] == rolls[1]) { msg = "Draw" } else if (rolls[0] > rolls[1]) { msg = "Player 1 wins!" } else { msg = "Player 2 wins!"; };

    updateOutput(player1, rolls[0]);
    updateOutput(player2, rolls[1]);
    output.innerHTML = msg;
})

function updateOutput(el, num) {
    let holder = builder(num);
    if (el.children[0]) { el.children[0].remove(); }
    el.appendChild(holder);
}

function builder(num) {
    let div = document.createElement('div');
    let dieArr = dice[num - 1];
    // console.log(dieArr);
    for (let i = 1; i < 10; i++) {
        let span = document.createElement('div');
        span.setAttribute('class', 'dot');
        if (dieArr.includes(i)) {
            span.classList.add('black');
        }
        div.appendChild(span);
    }
    div.setAttribute('class', 'dicer');
    return div;
}

function roll(num) {
    let random = Math.floor(Math.random() * num) + 1;
    return random;
}