const coinArr = ["Heads", "Tails"];
let score = [0, 0];
const msg = document.querySelector('.msg');
const btns = document.querySelectorAll('button');
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    const el = btns[i];
    el.addEventListener('click', tossCoin);
}

function tossCoin(e) {
    const random = Math.floor(Math.random() * 2);
    let you = e.target.innerText;
    let cpu = coinArr[random];
    msg.innerHTML = `Cpu says ${cpu}<br>`;
    let output;
    if (you === cpu) {
        output = "You win!"
        score[0]++;
    } else {
        output = "Cpu wins!"
        score[1]++;
    }
    msg.innerHTML += `${output}<br>You ${score[0]} Cpu ${score[1]}`;
}