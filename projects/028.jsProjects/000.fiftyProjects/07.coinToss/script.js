const coinArr = ["Heads", "Tails"];
const msg = document.querySelector('.msg');
const btns = document.querySelectorAll('button');
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    const el = btns[i];
    el.addEventListener('click', tossCoin);
}

function tossCoin(e) {
    console.log(e.target.innerText);
    const cpu = Math.floor(Math.random() * 2);
    msg.innerHTML = cpu + " " + e.target.innerText;
    console.log(coinArr[cpu]);

}