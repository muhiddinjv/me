const msg = document.querySelector('.msg');
const pts = document.querySelector('.pts');
const btns = document.querySelectorAll('button');
const winner = [0, 0];

for (let i = 0; i < btns.length; i++) {
    const el = btns[i];
    el.addEventListener('click', playGame);
}

function playGame(e) {
    let player = e.target.innerText;
    let cpu = Math.random();
    if (cpu < 0.34) {
        cpu = "Rock";
    } else if (cpu <= 0.67) {
        cpu = "Paper";
    } else {
        cpu = "Scissors";
    };
    let result = checkWinner(player, cpu);
    if (result == "player") {
        result += " wins!"
        winner[0]++;
    } else if (result == "cpu") {
        result += " wins";
        winner[1]++;
    } else {
        result += " results in a tie match!";
    }
    pts.innerHTML = `Player[${winner[0]}] CPU[${winner[1]}]`;
    messager(`${player} vs ${cpu} <br> <b>${result}</b>`)
}

function messager(mes) {
    msg.innerHTML = mes;
}

function checkWinner(pl, co) {
    if (pl === co) {
        return "Draw";
    }
    if (pl === "Rock") {
        if (co === "Paper") {
            return "cpu";
        } else {
            return "player";
        }
    }
    if (pl === "Paper") {
        if (co === "Scissors") {
            return "cpu";
        } else {
            return "player";
        }
    }
    if (pl === "Scissors") {
        if (co === "Rock") {
            return "cpu";
        } else {
            return "player";
        }
    }
}