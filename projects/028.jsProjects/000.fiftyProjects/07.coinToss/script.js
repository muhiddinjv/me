const coinArr = ["Heads", "Tails"];
const score = [0, 0];
const msg = document.querySelector('.msg');
const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    const el = btns[i];
    el.addEventListener('click', coinToss);
}

function coinToss(e) {
    let random = Math.floor(Math.random() * 2);
    let player = e.target.innerText;
    let cpu = coinArr[random];
    msg.innerHTML = `Cpu picks ${cpu}<br>`;
    let output;
    if (player === cpu) {
        output = "Player wins!"
        score[0]++;
    } else {
        output = "Cpu wins!";
        score[1]++;
    }
    msg.innerHTML += `${output}<br> Player ${score[0]} Cpu ${score[1]}`;
}