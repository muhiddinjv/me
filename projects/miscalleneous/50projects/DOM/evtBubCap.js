const outputEl = document.querySelector('section');
const divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    const element = divs[i];
    element.style.border = "1px solid red";
    element.style.width = "100px";
    element.style.margin = "10px";
    element.v = (i + 1);
    element.addEventListener('click', capture, true);
    element.addEventListener('click', bubble, false);
}

function output(msg) {
    outputEl.innerHTML += `${msg}<br>`;
}

function bubble() {
    output('bubble:' + this.v);
}

function capture() {
    output('capture:' + this.v);
}