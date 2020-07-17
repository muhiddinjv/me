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
        result += " wins!";
        winner[0]++;
    } else if (result == "cpu") {
        result += " wins!";
        winner[1]++;
    } else {
        result += " results in a tie match";
    }
    pts.innerHTML = `Player 1[${winner[0]}] Player 2[${winner[1]}]`;
    // messager(player + " vs " + cpu + "<br><b>" + result + "</b>");
    messager(`${player} vs ${cpu} <br><b> ${result}</b>`);
}

function messager(mes) {
    msg.innerHTML = mes;
}

function checkWinner(yo, cp) {
    if (yo === cp) {
        return "Draw";
    }
    if (yo === "Rock") {
        if (cp === "Paper") {
            return "cpu";
        } else {
            return "player";
        }
    }
    if (yo === "Paper") {
        if (cp === "Scissors") {
            return "cpu";
        } else {
            return "player";
        }
    }
    if (yo === "Scissors") {
        if (cp === "Rock") {
            return "cpu";
        } else {
            return "player";
        }
    }
}