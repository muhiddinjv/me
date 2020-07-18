// const btns = document.querySelectorAll('.box');
const myArr = ["lion", "cougar", "bark"];

document.addEventListener('DOMContentLoaded', start);

function start() {
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);

    myArr.forEach(function(item) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box ' + item);
        // div.innerText = item.toUpperCase();
        div.innerText = item;
        div.addEventListener('click', () => {
            playIt(item);
        })
        container.appendChild(div);
    })
}

function playIt(name) {
    let activeEl = document.querySelector("." + name);
    let sounds = new Audio(`sound/${name}.mp3`);
    sounds.play()
    activeEl.classList.add('active');
    setTimeout(function() {
        activeEl.classList.remove('active');
    }, 500);
}